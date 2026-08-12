import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
             <img
  src="/images/foodexpress-logo.png"
  alt="FoodExpress"
  className="logo-image"
/>
          <p>Delicious food, delivered fast. Fresh meals from the best kitchens in Abuja.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Popular Searches</h4>
          <Link to="/menu?q=jollof">Jollof Rice</Link>
          <Link to="/menu?q=pizza">Pizza</Link>
          <Link to="/menu?q=suya">Suya</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Kubwa, Abuja, Nigeria</p>
          <p>+234 901 592 4533</p>
          <p>support@foodexpress.ng</p>
        </div>
      </div>
      <p className="footer-small">
        © {new Date().getFullYear()} FoodExpress — Built with React by Okogbe Augustine
      </p>
    </footer>
  );
}

export default Footer;