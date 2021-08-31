import HomeAPI from "../components/data/HomeAPI";
import Header from "../components/Header";
import HomeBody from "../components/layout/HomeBody";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <HomeBody>
        <HomeAPI />
      </HomeBody>
    </div>
  );
}
