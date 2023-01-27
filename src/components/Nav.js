import "../css/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul id="navbar">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/reserve-table">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/order-online">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
