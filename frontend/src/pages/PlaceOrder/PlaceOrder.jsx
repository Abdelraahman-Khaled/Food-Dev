import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import PayPalIntegration from "../../components/Paypal/PayPalButton";

const PlaceOrder = () => {
  const url = import.meta.env.VITE_API_URL;
  const [sdkReady, setSdkReady] = useState(false)
  // context
  const { getTotalCartAmount } = useContext(StoreContext);

  // useEffect(() => {
  //   // add dynamic script of paypal sdk
  //   const addPayPalScript = async () => {
  //     const { data: clientId } = await axios.get(`${url}/api/config/paypal`)
  //     const script = document.createElement('script')
  //     script.type = 'text/javascript'
  //     script.src = `https://sandbox.paypal.com/sdk/js?client-id=${clientId}`
  //     script.async = true
  //     script.onload = () => {
  //       setSdkReady(true)
  //     }
  //     document.body.appendChild(script)
  //   }
  //   addPayPalScript()
  // }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Delivery Information Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <input
              type="text"
              placeholder="First name"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            {/* Last Name */}
            <input
              type="text"
              placeholder="Last name"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            {/* Email Address */}
            <input
              type="email"
              placeholder="Email address"
              className="col-span-1 sm:col-span-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            {/* Street Address */}
            <input
              type="text"
              placeholder="Street"
              className="col-span-1 sm:col-span-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            {/* City */}
            <input
              type="text"
              placeholder="City"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            {/* State */}
            <input
              type="text"
              placeholder="State"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            {/* Zip Code */}
            <input
              type="text"
              placeholder="Zip code"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            {/* Country */}
            <input
              type="text"
              placeholder="Country"
              className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone"
              className="col-span-1 sm:col-span-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </form>
        </div>

        {/* Cart Totals */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            {/* Delivery Fee */}
            <div className="flex justify-between items-center text-gray-600">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center text-lg font-bold">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>

            {/* Button */}
            <PayPalIntegration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
