import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    navigate(`/menu?q=${e.target.value}`, { replace: true });
  };

  return (
    <header className="navbar">
 <Link
        to="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
     <img
  src="/images/foodexpress-logo.png"
  alt="FoodExpress"
  className="logo-image"
/>
      </Link>

      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-actions">
        <input
          type="text"
          placeholder="Search meals..."
          className="search"
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Search meals"
        />
        <Link to="/cart" className="cart-button" aria-label={`Cart, ${cartCount} items`}>
          🛒 <span className="badge">{cartCount}</span>
        </Link>
        <button
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;