import "./HomeBody.css";
import galaxy from "../../images/home/vfcon110904.jpg";
import Guaranteed from "../data/Guaranteed";
import YouMightLike from "../data/YouMightLike";
import NowTrending from "../data/NowTrending";
// import LifeEasier from "../data/LifeEasier";
// import MoreToLove from "../data/MoreToLove";
// import VeryMe from "../../images/home/vfcon106076.png";
// import DiscoverMore from "../data/DiscoverMore";
import Footer from "./Footer";

export default function HomeBody(props) {
  return (
    <div className="body-container">
      <img className="galaxy" src={galaxy} alt="Galaxy" />
      <Guaranteed />
      <div className="yml-div">
        <YouMightLike />
      </div>
      <div className="nt-div">
        <NowTrending />
      </div>
      {/* <LifeEasier /> */}
      {/* <MoreToLove /> */}
      {/* <div className="very-me">
        <h1>
          VeryMe Rewards <br /> The loyalty programme built around you
        </h1>
        <button>
          <a href="#0">Find out more</a>
        </button>
        <img src={VeryMe} alt="VeryMe" />
      </div> */}
      {/* <DiscoverMore /> */}
      <Footer />
    </div>
  );
}
