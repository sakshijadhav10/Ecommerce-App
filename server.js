import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import cors from "cors";





//configure env
dotenv.config();

//databse config
connectDB();
//rest object
const app=express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// app.get("/", (res) => {
//     res.redirect("/api/v1/");
//   });
//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productRoute)
//rest api


app.get('/',(req,res)=>{
        res.send(
                "<h1>Welcome to ecommerce web</h1>"
        )
})
//Email send
//app.get("/sendemail",sendMail);

//Port
const Port=  process.env.Port ||8000;

//run listen
app.listen(Port,()=>{
    console.log(`Server running on mode ${process.env.DEV_MODE} on port ${Port}`.bgCyan.white);
})