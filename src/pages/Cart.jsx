import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";





function CartPage() {
  const {
    cart,
    increase,
    decrease,
    removeFromCart,
    clearCart,
    subtotal,
  } = useCart();

  const navigate = useNavigate();

  const deliveryFee = cart.length > 0 ? 500 : 0;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <h1>🛒 Your Cart is Empty</h1>

        <p>
          Looks like you haven't added any meals yet.
        </p>

        <Link to="/menu" className="view-all">
          Browse Menu
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">

      <h1>Your Cart</h1>

      <div className="cart-layout">

        <section className="cart-items">

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-info">
                <h3>{item.name}</h3>

                <p>
                  ₦{item.price.toLocaleString()}
                </p>

                <div className="quantity-controls">

                  <button onClick={() => decrease(item.id)}>
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increase(item.id)}>
                    +
                  </button>

                </div>
              </div>

              <div className="cart-item-right">

                <strong>
                  ₦{(item.price * item.quantity).toLocaleString()}
                </strong>

                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>

              </div>

            </div>
          ))}

        </section>

        <aside className="summary-card">

          <h3>Order Summary</h3>

          <p>
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </p>

          <p>
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </p>

          <p className="total">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
          </p>

          {/* CHECKOUT BUTTON */}
          <button
            className="checkout"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>

          <button
            className="clear"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </aside>

      </div>

    </main>
  );
}

export default CartPage;