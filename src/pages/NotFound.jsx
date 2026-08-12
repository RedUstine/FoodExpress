import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page empty-cart">
      <div className="empty-icon">🍽️</div>
      <h2>404 — Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </main>
  );
}

export default NotFound;