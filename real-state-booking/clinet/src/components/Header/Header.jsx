import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <a href="/">
          <img src="./logo.png" alt="logo" width={100} />
        </a>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:harshkumar808348@gmail">Contact</a>
            {/* Add your other menu items here */}
            {/* Conditional rendering for login and signout buttons */}
            {!isAuthenticated ? (
              <button onClick={() => loginWithRedirect()}>Login</button>
            ) : (
              <button onClick={() => logout()}>Sign out</button>
            )}
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
