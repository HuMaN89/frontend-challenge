import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <ul className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#ffffff" : "inherit",
              backgroundColor: isActive ? "#1e88e5" : "inherit",
            })}
          >
            Все котики
          </NavLink>
        </li>
        <li className="nav-item" style={{ width: "170px" }}>
          <NavLink
            to="/favorite"
            style={({ isActive }) => ({
              color: isActive ? "#ffffff" : "inherit",
              backgroundColor: isActive ? "#1e88e5" : "inherit",
              width: "170px",
            })}
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
