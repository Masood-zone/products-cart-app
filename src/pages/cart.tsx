import { useState } from "react";
import dessertData from "../data/data.json";
import UserCart from "../components/cart/userCart";
import ProductsList from "../components/cart/productsList";

export default function CartApp() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: DessertItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (item: DessertItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== item.name)
    );
  };

  const clearCartItems = () => {
    setCartItems([]);
  };

  const removeFromCart = (item: DessertItem) => {
    setCartItems((prevItems) =>
      prevItems
        .map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Products Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-rose-800">Desserts</h1>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-[70%] px-4">
          {/* Product List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductsList
              dessertData={dessertData}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
            />
          </div>
        </div>
        {/* Cart */}
        <UserCart
          cartItems={cartItems}
          removeFromCart={removeItem}
          clearAll={clearCartItems}
        />
      </div>
    </div>
  );
}
