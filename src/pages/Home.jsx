import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { foods } from "../data/foods";

function Home() {
  const popular = foods.filter((food) => food.rating === 5).slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-image">🍔</div>
        <div className="hero-text">
          <h1>Delicious Food, Delivered Fast</h1>
          <p>Fresh meals from the best kitchens in Abuja, at your door in minutes.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">Order Now</Link>
            <Link to="/menu" className="btn-outline">View Menu</Link>
          </div>
        </div>
      </section>

      <section className="home-menu">
        <h2>Popular Meals</h2>
        <div className="food-grid">
          {popular.map((food) => (
            <FoodCard key={food.id} food={food}  />
          ))}
        </div><br/>
         <div className="food-grid">
          {popular.map((food) => (
            <FoodCard key={food.id} food={food}  />
          ))}
        </div><br/>
         <div className="food-grid">
          {popular.map((food) => (
            <FoodCard key={food.id} food={food}  />
          ))}
        </div><br/>
        <div className="food-grid">
          {popular.map((food) => (
            <FoodCard key={food.id} food={food}  />
          ))}
        </div>
       
       
       
        <Link to="/menu" className="view-all">View Full Menu →</Link>
      </section>
        
        
      
    </>
  );
}

export default Home;