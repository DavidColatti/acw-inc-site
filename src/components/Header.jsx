import React from "react";
import company_logo from "../img/company-logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img
          src={company_logo}
          className="header__logo"
          alt="Apperals Custom Woodwork Logo"
        />
      </div>

      <ul className="header__nav">
        <li>
          <a className="header__nav--anchor" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="header__nav--anchor" href="/">
            Portfolio
          </a>
        </li>
        <li>
          <a className="header__nav--anchor" href="/">
            About
          </a>
        </li>
        <li>
          <a className="header__nav--anchor" href="/">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
