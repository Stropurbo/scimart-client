import OrderCart from '../components/Order/OrderCart';

const OrderPage = () => {
  const orders = [
    {
      id: "ac791d0a-6605-41d0-b5b7-140ea6c214f7",
      user: 1,
      status: "Not Paid",
      total_price: 3167.7,
      created_at: "2025-05-01T07:45:18.972354Z",
      items: [
        {
          id: 1,
          product: { id: 16, name: "Wrist Watch", price: 40.06 },
          price: 40.06,
          quantity: 15,
          total_price: 600.9
        },
        {
          id: 2,
          product: { id: 14, name: "Jacket", price: 320.85 },
          price: 320.85,
          quantity: 8,
          total_price: 2566.8
        }
      ]
    },
   
  ];

  return (
    <div className="container mx-auto py-5 px-5">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <OrderCart orders={orders} />
    </div>
  );
};

export default OrderPage;