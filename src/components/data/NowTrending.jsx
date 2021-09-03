import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NowTrending.css";

export default function NowTrending() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://fl4viooliveira.github.io/fakeAPI/home"
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
    <div className="now-trending">
      <h2>Now Trending</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="products">
        {products?.now_trending.map((product) => {
          return (
            <ul key={product.id}>
              <li>
                <p>{product.title}</p>
                <img src={product.img} alt={`${product.title}`} />
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
