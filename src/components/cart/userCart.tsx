import { useState } from "react";
import { carbonNeutralIcon, emptyCart, removeItemIcon } from "../../assets/svg";
import MobileModal from "../modals/mobileModal";
import DesktopModal from "../modals/desktopModal";

function UserCart({
  cartItems,
  removeFromCart,
  clearAll,
}: {
  cartItems: CartItem[];
  removeFromCart: (item: DessertItem) => void;
  clearAll: () => void;
}) {
  const [showModal, setShowModal] = useState(false);
  const total = cartItems.reduce((curr, acc) => curr + acc.price, 0);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="w-full lg:w-[30%] px-4 mt-8 lg:mt-0">
      {/* Items Details */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-rose-700 mb-4">
          Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </h2>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <img src={emptyCart} alt="empty-cart-icon" className="mx-auto" />
            <p className="mt-2 text-rose-500 text-sm">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center mb-2 border-b border-gray-200 py-2"
              >
                {/* Item info */}
                <div className="flex flex-col">
                  <span className="font-semibold text-rose-900">
                    {item.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-red">
                      {item.quantity}x
                    </span>
                    <span className="text-gray-400 text-sm">
                      @${item.price.toFixed(2)}
                    </span>
                    <span className="font-medium text-rose-400 text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* Remove from cart button */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="rounded-full border w-5 h-5"
                >
                  <img
                    src={removeItemIcon}
                    alt="remove-item-icon"
                    className="w-3 h-3 mx-auto"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
        {/* Total */}
        {cartItems.length > 0 ? (
          <div className="flex flex-col">
            {/* Total */}
            <div className="flex items-center justify-between w-full mt-4">
              <span className="text-sm text-rose-500">Order Total</span>
              <span className="text-lg font-bold text-rose-900">
                ${total.toFixed(2)}
              </span>
            </div>
            {/* Carbon neutral info */}
            <div className="flex items-center justify-center my-2 bg-gray-100 py-4 rounded-lg gap-2">
              <img
                src={carbonNeutralIcon}
                alt="carbon-neutral-icon"
                className=""
              />
              <p>
                This is a <span className="font-medium">carbon-neutral </span>
                delivery
              </p>
            </div>
            {/* Confirm Order Button */}
            <button
              onClick={handleShowModal}
              className="mt-2 btn rounded-full capitalize bg-red hover:bg-red-800 text-white"
            >
              confirm order
            </button>
          </div>
        ) : null}
      </div>

      {/* Modal here */}
      {showModal && (
        <>
          {/* Desktop Modal */}
          <DesktopModal
            cartItems={cartItems}
            clearAll={clearAll}
            handleShowModal={handleShowModal}
            total={total}
          />
          {/* Mobile Modal */}
          <MobileModal
            cartItems={cartItems}
            clearAll={clearAll}
            handleShowModal={handleShowModal}
            total={total}
          />
        </>
      )}
    </div>
  );
}

export default UserCart;
