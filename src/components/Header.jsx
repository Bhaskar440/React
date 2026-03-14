import { useState } from "react"; // Added this
import { useCartStore } from "./cartStore";
import handbag from "../assets/handbag.png";
import CartModal from "./CartModal"; // Import your new Modal

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false); // The "Switch"
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-orange-600 shadow-md">
        <h1 className="text-white font-bold text-xl uppercase tracking-wider">REFINEFOODS</h1>

        <div className="flex items-center gap-3 text-white">
          <span className="font-semibold">
            {totalItems} items / ${totalPrice}
          </span>
          <div 
            className="relative cursor-pointer hover:scale-110 transition-transform"
            onClick={() => setIsCartOpen(true)} // Flipping the switch ON
          >
            <img src={handbag} alt="Cart" className="h-8 w-auto brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Logic: If isCartOpen is true, show the Modal */}
      {isCartOpen && <CartModal close={() => setIsCartOpen(false)} />}
    </>
  );
}