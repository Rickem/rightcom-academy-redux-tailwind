import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { CartItem, removeItem, updateQuantity } from "@/lib/slices/cartSlice";

const Cart = () => {
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.items
  );
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Panier</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-2">
          <span>
            {item.name} - {item.price}€
          </span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: parseInt(e.target.value),
                })
              )
            }
            className="w-16 px-2 py-1 border rounded"
          />
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
