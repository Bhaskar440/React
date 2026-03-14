export default function OrderSuccess({ onBack }) {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 animate-fadeIn">
      {/* Green Header Bar */}
      <div className="bg-green-600 rounded-t-2xl p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🍽️</div>
          <h2 className="text-3xl font-bold uppercase">Order Received</h2>
        </div>
        <button onClick={onBack} className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-green-600 transition">
          Manage the order
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-white p-8 shadow-lg space-y-8">
        <div className="grid md:grid-cols-2 gap-8 border-b pb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Order Summary</h3>
            <p className="text-gray-600"><strong>Order Number:</strong> #666902</p>
            <p className="text-gray-600"><strong>Order Date:</strong> 14.03.2026 12:47</p>
            <p className="text-gray-600"><strong>Total:</strong> $52.00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Order Details</h3>
            <p className="text-gray-600">1. Grilled Chicken</p>
          </div>
        </div>

        {/* Delivery Section */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Delivery Details</h3>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-slate-700">Address</p>
              <p className="text-gray-500">11954 Mertz Harbors, Massapequa, NY 11309</p>
              <p className="font-bold text-slate-700 mt-4">Estimated Delivery Time</p>
              <p className="text-gray-500">12:55</p>
            </div>
            <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl">
              <span className="text-2xl">🛵</span>
              <p className="text-sm text-slate-700"><strong>Lydia Turcotte</strong> will deliver your order in 30 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}