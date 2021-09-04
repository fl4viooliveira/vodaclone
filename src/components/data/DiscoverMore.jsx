import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DiscoverMore.css";

export default function DiscoverMore() {
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
    <div className="dm-container">
      <h2 className="nt-title">Discover More</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {products?.discover_more.map((product) => {
        return (
          <ul className="discover-more" key={product.id}>
            <li>
              <div className="contents">
                <h3>{product.title}</h3>
                <p>{product.sub_title_1}</p>
                <p>{product.sub_title_2}</p>
                <p>{product.sub_title_3}</p>
              </div>
              <img src={product.img} alt={`${product.title}`} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}
