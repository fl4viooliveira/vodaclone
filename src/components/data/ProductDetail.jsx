import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "./ProductDetail.css"

export default function ProductDetail(props) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://fl4viooliveira.github.io/fakeAPI/products"
        );
        setProducts(res.data[id - 1]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="detail-container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {products && (
        <div key={id} className="detail-content">
          <h1 className="brand">{products.brand}</h1>
          <h1 className="name">{products.name}</h1>
          <img src={products.img} alt={products.name} />
        </div>
      )}
    </div>
  );
}
