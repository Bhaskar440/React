import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  
  // 1. ADD TO CART: Handles new items and increasing quantity
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  // 2. REMOVE ITEM: Completely removes a product from the list
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),

  // 3. UPDATE QUANTITY: For those + and - buttons in your screenshot
  updateQuantity: (id, amount) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ),
  })),

  // 4. CLEAR CART: Used when the "Order" is successful
  clearCart: () => set({ cart: [] }),
}));