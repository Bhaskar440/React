import { useState } from "react";
import { MENU_ITEMS } from "./data";
import { useCartStore } from "./cartStore"; // Ensure this path is correct

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  // CORRECT WAY: Only pull the function from the store
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-t-[3rem] -mt-10 p-8">
      {/* Category Tabs... (keep your existing code here) */}
      <div className="flex space-x-4 overflow-x-auto pb-6 no-scrollbar">
         {["Starters", "Pastas", "Pizzas", "Burgers"].map((cat) => (
           <button 
             key={cat} 
             onClick={() => setActiveCategory(cat)}
             className={`px-6 py-2 rounded-full font-bold transition ${
               activeCategory === cat ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700"
             }`}
           >
             {cat}
           </button>
         ))}
      </div>

      {/* Food List Section */}
      <div className="space-y-8">
        {MENU_ITEMS.filter(item => item.category === activeCategory).map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-8">
            {/* Left side: Image and Text */}
            <div className="flex items-center space-x-6">
              <img src={item.img} className="w-32 h-32 rounded-full object-cover shadow-lg" alt={item.name} />
              <div className="max-w-md">
                <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>

            {/* Right side: Price and Button */}
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-bold text-slate-800">${item.price}</span>
              <button 
                onClick={() => addToCart(item)} // This now updates the global state!
                className="bg-orange-500 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition"
              >
                <span className="text-xl">+</span> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}