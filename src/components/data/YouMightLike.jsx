import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {/* {products && <div>{JSON.stringify(products)}</div>} */}
      {products && (
        <div>
          <h1>{products.you_might_like[1].title}</h1>
          <h2>{products.you_might_like[1].sub_title}</h2>
          <img src={products.you_might_like[1].img} alt="test2" />
        </div>
      )}
    </div>
  );
}
