import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">FlowDesk</NavLink>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/product">Product</NavLink>
          </li>

          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;