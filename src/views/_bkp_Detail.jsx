import { useState, useEffect } from "react";

export default function Detail(props) {
  let _id = props.match.params.id;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fl4viooliveira.github.io/fakeAPI/products/")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data[_id - 1]);
          setIsLoaded(true);
          setProduct(data[_id - 1]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [_id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return(
      <div>
      <h1>{product.name}</h1></div>
    )

  }
}
