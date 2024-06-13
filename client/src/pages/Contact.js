import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend ,BiPhoneCall,BiSupport} from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <Layout title={"Contact us"}>
        <div className="row contactus">
            <div className="col-md-6">
                <img src="/images/contactus.jpeg" alt="contact us" style={{width:"100%"}}/>
            </div>
            <div className="col-md-4">
                <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                <p className="test-justify mt-2">
                    any query and info about product feel free to call anytime we 24*7 available
                </p>
                <p className="mt-3">
                <BiMailSend /> :www.help@Ecommerceapp.com
                </p>
                <p className="mt-3">
                <BiPhoneCall />:012-3456789
                </p>
                <p className="mt-3">
                <BiSupport />:1800-0000-0000(toll free)
                </p>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
