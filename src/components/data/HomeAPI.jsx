import React, { useEffect, useState } from "react";

// export default function HomeAPI() {
//   const [data, setData] = useState([]);
//   fetch("https://fl4viooliveira.github.io/fakeAPI/home")
//     .then((resp) => resp.json())
//     .then((data) => setData(data));

export default function HomeAPI() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch("https://fl4viooliveira.github.io/fakeAPI/home");
    res
      .json()
      .then((res) => setData(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  const test = () => {
    return JSON.stringify(data);
  };

  return (
    <div>
      <ul>
        {/* <li> {JSON.stringify(data)}</li>
        <li> {test()}</li> */}
      </ul>

      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}
