import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

export default function ProductList() {
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
            <ul key={product.id}>
              <li>
                <img src={product.img} alt={`${product.name}`} />
                <h3>{product.name}</h3>
                <h4>From {product.price_month} per month</h4>
                <h4>{product.price_upfront} upfront</h4>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
