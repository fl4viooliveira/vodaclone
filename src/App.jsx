import "./App.css";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import PhoneList from "./pages/PhoneList";

export default function App() {
  return (
    <div>
      <Home />
      <PhoneList />
      <Detail />
    </div>
  );
}
