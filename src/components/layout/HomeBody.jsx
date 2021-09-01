import "./HomeBody.css";
import galaxy from "../../images/home/vfcon110904.jpg";
import bkgImg from "../../images/home/vfcon110851.png";

export default function HomeBody(props) {
  return (
    <div className="body-container">
      <img className="galaxy" src={galaxy} alt="Galaxy" />
      <div className="hello">
        <div className="hello-text">
          <h1>Save £504 guaranteed</h1>
          <h2>
            When you trade in your Samsung Galaxy S10 5G on Note 10 range using
            our Trade-in Tool
          </h2>
          <img src={bkgImg} alt="bkg" className="bkg-img" />
          <button>
            <a href="#0">Buy now</a>
          </button>
          <div className="quick-links"></div>
        </div>
      </div>

      {/* {props.children} */}
    </div>
  );
}
