import { useCart } from "../context/CartContext";

function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="food-card">
      <div className="card-top">
        <span className="time-badge">{food.time}</span>

        <span className="rating">
          {"★".repeat(food.rating)}
        </span>
      </div>

      {/* FOOD IMAGE */}
      <div className="food-image">
        <img
          src={food.image}
          alt={food.name}
        />
      </div>

      <h3>{food.name}</h3>

      <p className="price">
        ₦{food.price.toLocaleString()}
      </p>

      <button onClick={() => addToCart(food)}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;