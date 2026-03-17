import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
    id: number;
    name: string;
    price: number;
};

export type CartItem = Product & {
  quantity: number
}

type CartState = {
  items: CartItem[]

  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void

  totalItems: number
  totalPrice: number
};

const calculateTotals = (items: CartItem[]) => ({
  totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
});

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addToCart: (product) => {
        const items = get().items
        const existing = items.find(i => i.id === product.id)

        let newItems: CartItem[]

        if (existing) {
          newItems = items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i )
        } else {
          newItems = [...items, { ...product, quantity: 1 }]
        }

        set({
          items: newItems,
          ...calculateTotals(newItems)
        })
      },

      removeFromCart: (productId) => {
        const newItems = get().items.filter(i => i.id !== productId)

        set({
          items: newItems,
          ...calculateTotals(newItems)
        })
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0
        })
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);
