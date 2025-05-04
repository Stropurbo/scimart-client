import React, { useEffect, useState } from 'react';
import AuthApiClient from '../../services/auth-api-client';

const Orders = () => {

  const [order, setOrder] = useState([])

  useEffect(() => {
    AuthApiClient.get('/orders/')
    .then((res) => setOrder(res.data.results))
  })
    return (

      <div className="mt-6 card bg-base-100 shadow-sm">

      <div className="card-body">
        <h3 className="card-title text-lg">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {order.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.user?.full_name || "N/A"}</td>
                  <td>
                    <div className={`badge ${
                      order.status === "Completed" ? "badge-success" :
                      order.status === "Processing" ? "badge-warning" :
                      order.status === "Shipped" ? "badge-info" :
                      "badge-neutral"
                    }`}>
                      {order.status}
                    </div>
                  </td>
                  <td>{new Date(order.created_at).toLocaleDateString()}</td>
                  <td>${order.total_price?.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
       


          </table>
        </div>
      </div>
    </div>
    );
};

export default Orders;