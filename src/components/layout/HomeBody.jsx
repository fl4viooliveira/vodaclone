import "./HomeBody.css";
import galaxy from "../../images/home/vfcon110904.jpg";

export default function HomeBody() {
  return (
    <div className="body-container">
      <img className="galaxy" src={galaxy} alt="Galaxy" />
    </div>
  );
}
