import React from "react";
import "./styles.scss";
import Logo from "./../../assets/logooo.jpg";
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Sumitra's Logo" />
        </div>
      </div>
    </header>
  );
};
export default Header;
