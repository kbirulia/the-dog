import React from "react";
import "./Header.style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="main">
        <Link className="logo" to="/">
          <img
            width="70"
            height="70"
            src={logo}
            title="The dog"
            alt="The god"
          />
          <h1 className="logo__title">The dog</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
