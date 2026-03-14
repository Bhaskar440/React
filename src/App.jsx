import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body"; // Image 1 (Hero section)
import Menu from "./components/Menu"; // Image 2 (Food list)
import OrderSuccess from "./components/OrderSuccess"; // Image 3 (Green screen)
import { useCartStore } from "./components/cartStore";
import Footer from "./components/Footer";
export default function App() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);

  // This function is triggered when the "Order" button in CartModal is clicked
  const handlePlaceOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* The Header stays visible at the top of both views */}
      <Header />
      
      {orderPlaced ? (
        /* VIEW 1: Order Confirmation (Image 3) */
        <OrderSuccess onBack={() => setOrderPlaced(false)} />
      ) : (
        /* VIEW 2: Shopping Mode (Image 1 & 2) */
        <>
          <Body /> 
          <Menu onOrder={handlePlaceOrder} />
        </>
      )}
      <Footer/>
    </div>
  );
}