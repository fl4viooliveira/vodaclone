import React, { useEffect, useState } from "react";
import axios from "axios";
import "./YouMightLike.css";

export default function YouMightLike() {
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
    <div className="main-container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {/* <div>
        {products?.you_might_like.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <h2>{product.sub_title}</h2>
              <img src={product.img} alt="test" />
            </div>
          );
        })}
      </div> */}
      <h1 className="yml-title">You might like</h1>
      {products && (
        <div className="container">
          <div className="item-0">
            <h1>{products.you_might_like[0].title}</h1>
            <h2>{products.you_might_like[0].sub_title}</h2>
            <img src={products.you_might_like[0].img} alt="iphone" />
          </div>
          <div className="item-1">
            <h1>{products.you_might_like[1].title}</h1>
            <h2>{products.you_might_like[1].sub_title}</h2>
            <img src={products.you_might_like[1].img} alt="month-plan" />
          </div>
          <div className="item-2">
            <h1>{products.you_might_like[2].title}</h1>
            <h2>{products.you_might_like[2].sub_title}</h2>
            <img src={products.you_might_like[2].img} alt="switch" />
          </div>
        </div>
      )}
    </div>
  );
}
