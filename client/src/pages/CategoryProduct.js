import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/CategoryProductStyle.css";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      console.log("Fetching products for category:", params.slug); // Debug log
      getPrductsByCat();
    }
    // eslint-disable-next-line
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products || []);
      setCategory(data?.category || {});
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      if (error.response && error.response.status === 404) {
        setError("Category not found.");
      } else {
        setError("An error occurred while fetching products.");
      }
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mt-3">
          <h4 className="text-center">Loading...</h4>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mt-3">
          <h4 className="text-center text-danger">{error}</h4>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result(s) found</h6>
        <div className="row">
          <div className="col-md-9 offset-md-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2 product-card" key={p._id}>
                  <img
                    src={`http://localhost:8000/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="card-text"> $ {p.price}</p>
                    <button
                      className="btn btn-primary ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button className="btn btn-secondary ms-1">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
