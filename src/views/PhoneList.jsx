import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PhoneList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fl4viooliveira.github.io/fakeAPI/products/")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setIsLoaded(true);
          setProducts(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {products.map((product) => (
          <li>
            <Link to={`${process.env.PUBLIC_URL}/detail/${product.id}`} style={{color: "#000"}}>{product.name}</Link>
          </li>
        ))}
      </ul>
      
    );
  }
}
