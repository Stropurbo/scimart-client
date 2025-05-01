import useAuthContext from "../../hooks/useAuthContext";
import OrderTable from "./OrderTable";

const OrderCart = ({ orders }) => {
  const {user} = useAuthContext();

  return (
    <div className="space-y-8">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold">Order #{order.id}</h2>
              <p className="text-gray-600 text-sm">Placed on {new Date(order.created_at).toLocaleString()}</p>
            </div>
            <div className="flex gap-2 items-center">
              <select
                defaultValue={order.status}
                className="px-3 py-1 rounded-full text-white text-sm font-medium bg-blue-500"
              >
                <option value="Not Paid">Not Paid</option>
                <option value="Ready To Ship">Ready To Ship</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Canceled">Canceled</option>
              </select>

              <span
                className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                  order.status === "Not Paid"
                    ? "bg-red-500"
                    : order.status === "Canceled"
                    ? "bg-gray-500"
                    : "bg-green-500"
                }`}
              >
                {order.status}
              </span>

              {order.status !== "Delivered" && order.status !== "Canceled" && (
                <button
                  onClick={() => alert(`Cancel Order ID: ${order.id}`)}
                  className="text-blue-700 hover:underline"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-medium text-lg mb-4">Order Items</h3>
            <OrderTable items={order.items} />
          </div>

          <div className="border-t p-6 flex flex-col items-end">
            <div className="space-y-2 w-full max-w-[200px]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${order.total_price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total:</span>
                <span>${order.total_price.toFixed(2)}</span>
              </div>
            </div>
            {(!user.is_staff && order.status === "Not Paid") && (
              <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                Pay Now
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCart;
