import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const deliveryFee = cart.length > 0 ? 500 : 0;
  const total = subtotal + deliveryFee;

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    payment: "Pay on Delivery",
  });
  const [placing, setPlacing] = useState(false);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }
    setError("");
    setPlacing(true);

    // Simulate an API call
    setTimeout(() => {
      const newOrder = {
        id: "FE-" + Date.now().toString().slice(-6),
        customer: form,
        items: cart,
        subtotal,
        deliveryFee,
        total,
        status: "confirmed",
        date: new Date().toISOString(),
      };

      const saved = JSON.parse(localStorage.getItem("foodexpress-orders") || "[]");
      localStorage.setItem("foodexpress-orders", JSON.stringify([...saved, newOrder]));

      setOrder(newOrder);
      clearCart();
      setPlacing(false);
    }, 1500);
  };

  if (order) {
    return (
      <main className="page success-card checkout-success">
        <span className="success-icon">✅</span>
        <h2>Order Confirmed!</h2>
        <p className="order-id">Order ID: <strong>{order.id}</strong></p>
        <p>
          Thanks {order.customer.fullName}! Your food is being prepared and will
          arrive in about <strong>30–45 minutes</strong>.
        </p>
        <p className="order-total">
          Total: <strong>₦{order.total.toLocaleString()}</strong> — {order.customer.payment}
        </p>
        <Link to="/menu" className="btn-primary">Order More Food</Link>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="page empty-cart">
        <div className="empty-icon">🧾</div>
        <h2>Nothing to check out</h2>
        <p>Your cart is empty. Add some meals first.</p>
        <Link to="/menu" className="btn-primary">Browse Menu</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>Checkout</h1>
      <p>Fill in your delivery details to complete the order.</p>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="fullName" placeholder="Full name" value={form.fullName} onChange={handleChange} required />
          <input name="phone" type="tel" placeholder="Phone number (e.g. 0901 592 4533)" value={form.phone} onChange={handleChange} required />
          <textarea name="address" placeholder="Delivery address (house, street, area)" rows="3" value={form.address} onChange={handleChange} required />
          <div className="payment-options">
            <label><input type="radio" name="payment" value="Pay on Delivery" checked={form.payment === "Pay on Delivery"} onChange={handleChange} /> Pay on Delivery</label>
            <label><input type="radio" name="payment" value="Card (Demo)" checked={form.payment === "Card (Demo)"} onChange={handleChange} /> Card (Demo)</label>
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="checkout" disabled={placing}>
            {placing ? "Placing Order..." : `Place Order — ₦${total.toLocaleString()}`}
          </button>
        </form>
        <aside className="summary-card">
          <h3>Order Summary</h3>
          <ul className="summary-items">
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.image} {item.name} × {item.quantity}</span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <p><span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span></p>
          <p><span>Delivery Fee</span><span>₦{deliveryFee.toLocaleString()}</span></p>
          <p className="total"><span>Total</span><span>₦{total.toLocaleString()}</span></p>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;