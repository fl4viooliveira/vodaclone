import YouMightLike from "../components/data/YouMightLike";
import Header from "../components/Header";
import HomeBody from "../components/layout/HomeBody";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <HomeBody>
        <YouMightLike />
      </HomeBody>
    </div>
  );
}
