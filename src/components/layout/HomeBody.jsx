import "./HomeBody.css";
import galaxy from "../../images/home/vfcon110904.jpg";
import Guaranteed from "../data/Guaranteed";
import YouMightLike from "../data/YouMightLike";
import NowTrending from "../data/NowTrending";
import LifeEasier from "../data/LifeEasier";

export default function HomeBody(props) {
  return (
    <div className="body-container">
      <img className="galaxy" src={galaxy} alt="Galaxy" />
      <Guaranteed />
      <YouMightLike />
      <NowTrending />
      <LifeEasier />
    </div>
  );
}
