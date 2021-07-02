import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../../actions";
import "../../assets/styles/components/Header.css";
import SteamLogo from '../../assets/images/steam-logo.png';

const Header = () => {
  const menuActive = useSelector((state) => state.menuActive);
  const dispatch = useDispatch();

  const handleSetMenu = (section) => {
    dispatch(setMenu(section));
  };

  return (
    <header className="header">
      <figure className="logo">
      <img
          className="logo-img"
          src={SteamLogo}
          alt="Steam Logo"
        />
      </figure>
      <nav className="nav">
        <ul className="nav-options">
          <li
            onClick={() => handleSetMenu("Deals")}
            className={`nav-options-item ${
              menuActive === "Deals" ? "active" : ""
            }`}
          >
            <Link to="/">Offerts</Link>
          </li>
          <li
            onClick={() => handleSetMenu("Desired")}
            className={`nav-options-item ${
              menuActive === "Desired" ? "active" : ""
            }`}
          >
            <Link to="/wishes">My Wishes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;