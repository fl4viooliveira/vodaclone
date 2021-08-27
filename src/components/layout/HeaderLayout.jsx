import "./HeaderLayout.css";
import * as Constants from "./Svg";

export default function HeaderLayout(props) {
  return (
    <div className="container-header">
      <div className="top-menu">
        <nav className="top-left">
          <span>{Constants.personalIcon}</span>
          <a href="#0">Personal</a>
          <span>{Constants.businessIcon}</span>
          <a href="#0">Business</a>
        </nav>
        <nav className="top-right">
          <span>{Constants.findStoreIcon}</span>
          <a href="#0">Find a store</a>
          <span>{Constants.networkIcon}</span>
          <a href="#0">Network Status Checker</a>
        </nav>
      </div>
      <div className="main-menu">
        <div className="logo">{Constants.logo}</div>
        <div className="menu-list">{props.children}</div>
      </div>
    </div>
  );
}
