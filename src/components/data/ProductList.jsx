import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";

export default function ProductList(props) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://fl4viooliveira.github.io/fakeAPI/products"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="product-list-container">
      <h2>Phone List</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="product-list">
        {products?.phones.map((product) => {
          return (
            <ul>
              <li key={product.id}>
                <img src={product.img} alt={`${product.name}`} />
                <h3>{product.name}</h3>
                <h4>From {product.price_month} per month</h4>
                <h4>{product.price_upfront} upfront</h4>
                <button>
                  <Link
                    key={product.id}
                    to={`${process.env.PUBLIC_URL}/detail/${product.id}`}
                    children={
                      <ProductDetail  />

                    }
                  >
                    {product.name}
                  </Link>
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
