import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MoreToLove.css";

export default function MoreToLove() {
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
    <div className="more-to-love">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <h1 className="mtl-title">More to love</h1>
      {products && (
        <div className="container">
          <div className="item-0">
            <h1>{products.more_to_love[0].title}</h1>
            <h2>{products.more_to_love[0].sub_title}</h2>
            <img
              src={products.more_to_love[0].img}
              alt={products.more_to_love[0].title}
            />
          </div>
          <div className="item-1">
            <h1>{products.more_to_love[1].title}</h1>
            <h2>{products.more_to_love[1].sub_title}</h2>
            <img
              src={products.more_to_love[1].img}
              alt={products.more_to_love[1].title}
            />
          </div>
          <div className="item-2">
            <h1>{products.more_to_love[2].title}</h1>
            <h2>{products.more_to_love[2].sub_title}</h2>
            <img
              src={products.more_to_love[2].img}
              alt={products.more_to_love[2].title}
            />
          </div>
        </div>
      )}
    </div>
  );
}
