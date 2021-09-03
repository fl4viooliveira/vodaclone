import "./HomeBody.css";
import galaxy from "../../images/home/vfcon110904.jpg";
import bkgImg from "../../images/home/vfcon110851.png";
import YouMightLike from "../data/YouMightLike";
import NowTrending from "../data/NowTrending";

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
        </div>
        <div className="quick-links">
          <ul>
            <li>
              <span></span>
              <a href="#0">Pay monthly phones</a>
            </li>
            <li>
              <span></span>
              <a href="#0">SIM only deals</a>
            </li>
            <li>
              <span></span>
              <a href="#0">Home Broadband</a>
            </li>
            <li>
              <span></span>
              <a href="#0">Top up</a>
            </li>
            <li>
              <span></span>
              <a href="#0">Support</a>
            </li>
            <li>
              <span></span>
              <a href="#0">Upgrades</a>
            </li>
          </ul>
        </div>
      </div>
      <YouMightLike />
      <NowTrending />
    </div>
  );
}
