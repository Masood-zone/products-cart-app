import { addToCartIcon, decrementIcon, incrementIcon } from "../../assets/svg";

function ProductsList({
  dessertData,
  addToCart,
  removeFromCart,
  cartItems,
}: {
  dessertData: DessertItem[];
  addToCart: (item: DessertItem) => void;
  removeFromCart: (item: DessertItem) => void;
  cartItems: CartItem[];
}) {
  return dessertData.map((dessert: DessertItem) => {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.name === dessert.name
    );
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
      <div key={dessert.name} className="overflow-hidden">
        <img
          src={dessert.image.desktop}
          alt={dessert.name}
          className={`w-full h-52 object-cover rounded-lg ${
            quantity > 0 ? "border-2 border-red" : ""
          }`}
        />
        <div className="p-4 relative">
          <p className="text-rose-400 text-sm mt-8">{dessert.category}</p>
          <h2 className="text-rose-900 font-semibold text-lg mb-2">
            {dessert.name}
          </h2>
          <p className="text-red font-bold">${dessert.price.toFixed(2)}</p>

          {quantity > 0 ? (
            <div className="flex items-center justify-between bg-red w-44 p-5 absolute -top-6 left-0 right-0 mx-auto rounded-full py-2">
              <button
                onClick={() => removeFromCart(dessert)}
                className="border rounded-full border-white w-5 h-5"
              >
                <img
                  src={decrementIcon}
                  alt="remove-item-icon"
                  className="w-3 h-3 mx-auto"
                />
              </button>
              <span className="text-white font-semibold">{quantity}</span>
              <button
                onClick={() => addToCart(dessert)}
                className="border rounded-full border-white w-5 h-5"
              >
                <img
                  src={incrementIcon}
                  alt="add-to-cart-icon"
                  className="w-3 h-3 mx-auto"
                />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(dessert)}
              className="w-[75%] mx-auto absolute -top-3 left-0 right-0 bg-white rounded-full shadow-md border border-rose-500 text-rose-900 font-semibold py-3 px-8 flex items-center justify-center gap-3"
            >
              <img src={addToCartIcon} alt="add-to-cart-icon" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    );
  });
}

export default ProductsList;
