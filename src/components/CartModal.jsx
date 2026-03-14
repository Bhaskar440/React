import { useCartStore } from "./cartStore";

export default function CartModal({ close }) {
  const cart = useCartStore((state) => state.cart);
  
  // Calculate Totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="bg-orange-500 p-8 flex flex-col items-center relative">
          <button onClick={close} className="absolute top-4 right-4 text-white text-2xl">✕</button>
          <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
            <span className="text-5xl">🍽️</span> {/* Replace with your icon */}
          </div>
        </div>

        {/* Cart Items List */}
        <div className="p-6 max-h-[400px] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-10">Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-0">
                <div className="flex items-center gap-4">
                  <img src={item.img} className="w-12 h-12 rounded-lg object-cover" />
                  <span className="font-bold text-slate-700">{item.name}</span>
                </div>
                <div className="text-slate-600 font-medium">
                  ${item.price} <span className="text-gray-400 mx-1">x</span> {item.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Total and Order Button */}
        <div className="p-6 bg-gray-50 border-t flex flex-col items-center">
          <div className="text-lg font-semibold text-slate-700 mb-4">
            Total: <span className="text-orange-600">{totalItems} items / ${totalPrice}</span>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-md">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}