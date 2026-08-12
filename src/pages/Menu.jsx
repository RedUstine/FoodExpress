import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { foods } from "../data/foods";

const categories = ["All", "Local", "Pizza", "Burgers", "Salads", "Pasta", "Drinks"];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const visibleFoods = foods.filter((food) => {
    const matchesCategory = activeCategory === "All" || food.category === activeCategory;
    const matchesSearch = food.name.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="menu-page">
      <h2>Our Menu</h2>
      <div className="category-pills">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? "pill active" : "pill"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {visibleFoods.length === 0 ? (
        <p className="no-results">No meals match your search. 🍽️ Try something else.</p>
      ) : (
        <div className="food-grid">
          {visibleFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Menu;