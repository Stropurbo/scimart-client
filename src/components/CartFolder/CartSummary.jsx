import React from 'react';
import AuthApiClient from '../../services/auth-api-client';

const CartSummary = ({totalPrice, itemCount, cartId}) => {

    const tax = parseFloat(totalPrice) * 0.10
    const shipping = itemCount === 0 || parseFloat(totalPrice) > 100 ? 0 : 10;
    const oderTotal = parseFloat(totalPrice) + shipping + tax;

    const deleteCart = () => {
     localStorage.removeItem("cartId") 
    }

    const createOrder = async () => {
      try {
        const res = await AuthApiClient.post('/orders/', { cart_id: cartId});
        if(res.status === 201){
          deleteCart()
          alert("Order Created Successfull")
        }
      } catch (error) {
        console.log("Order create error:", error.response?.data || error.message);
       
      }
    };
    


    return (
        <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal {itemCount} items</span>
            <span> ${totalPrice.toFixed(2)} </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Delivery Fee</span>
            <span> {shipping === 0 ? "Free" : `$${shipping}`} </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Estimated Tax</span>
            <span> ${tax.toFixed(2)} </span>
          </div>

          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between font-medium">
              <span>Order Total</span>
              <span> ${oderTotal.toFixed(2)} </span>
            </div>

          </div>          
        </div>

        <div className="card-actions justify-end mt-4">
          <button 
            className="btn btn-primary w-full"
            onClick={createOrder}
            disabled={itemCount===0 }
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    );
};

export default CartSummary;