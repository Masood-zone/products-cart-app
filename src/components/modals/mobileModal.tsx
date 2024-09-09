import { orderConfirmedIcon } from "../../assets/svg";

function MobileModal({
  cartItems,
  handleShowModal,
  clearAll,
  total,
}: {
  cartItems: CartItem[];
  handleShowModal: () => void;
  clearAll: () => void;
  total: number;
}) {
  return (
    <div className="sm:hidden block inset-0 bg-black bg-opacity-50 w-full fixed">
      <div className="bg-white p-6 rounded-tl-xl rounded-tr-xl absolute bottom-0 w-full">
        {/* Image */}
        <img src={orderConfirmedIcon} alt="order-confirmed-icon" className="" />
        {/* Header */}
        <h2 className="text-4xl font-bold text-rose-900 mt-4">
          Order Confirmed!
        </h2>
        <p className="text-sm py-2 text-rose-500">
          We hope your enjoy your food!
        </p>
        {/* Cart Items */}
        <div className="flex w-full flex-col  items-start bg-rose-100 rounded-lg p-4">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center my-4 border-b border-gray-200 py-2 px-2 w-full gap-8"
              >
                {/* Item info */}
                <div className="flex items-start justify-start gap-2 w-full">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="rounded-md w-16 h-16"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-sm max-[399px]:text-xs">
                      {item.name}
                    </p>
                    <p>
                      <span className="text-red font-bold text-sm">
                        {item.quantity}X
                      </span>
                      <span className="text-gray-400 text-sm px-2">
                        @${item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-black text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          {/* Total */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-rose-500">Order Total</span>
            <span className="text-lg font-bold text-rose-900">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        {/* New orders button */}
        <button
          onClick={() => {
            handleShowModal();
            clearAll();
          }}
          className="mt-4 btn rounded-full capitalize bg-red hover:bg-red-800 text-white w-full"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default MobileModal;
