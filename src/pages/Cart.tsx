import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

export default function Cart() {
  const navigate = useNavigate();
  const { detailed, setQty, removeItem, subtotal, count } = useCart();
  const { format } = useCurrency();

  if (count === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 mx-auto bg-[#1a173b] text-[#fde68a] flex items-center justify-center mb-6">
          <ShoppingBag className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-black text-[#1a173b] mb-3">
          Your cart is empty
        </h1>
        <p className="font-sans text-[#4b476d] mb-8">
          Add a formula to begin your evening ritual.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-8 py-3.5 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          Browse the Collection
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-black text-[#1a173b] mb-10">
        Your Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Lines */}
        <div className="lg:col-span-2 space-y-5">
          {detailed.map((d) => (
            <div
              key={d.product.id}
              className="flex gap-4 sm:gap-6 bg-white border-2 border-[#1a173b] p-4"
            >
              <button
                onClick={() => navigate(`/product/${d.product.slug}`)}
                className="shrink-0"
              >
                <img
                  src={d.product.image}
                  alt={d.product.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover border-2 border-[#1a173b]/20"
                />
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3">
                  <div>
                    <button
                      onClick={() => navigate(`/product/${d.product.slug}`)}
                      className="font-bold text-[#1a173b] text-left hover:text-[#d97706]"
                    >
                      {d.product.name}
                    </button>
                    <p className="font-sans text-xs text-[#4b476d] mt-1">
                      {d.product.format}
                    </p>
                  </div>
                  <span className="font-bold text-[#1a173b] whitespace-nowrap">
                    {format(d.lineTotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="inline-flex items-center border-2 border-[#1a173b]">
                    <button
                      onClick={() => setQty(d.product.id, d.qty - 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-[#f4ebd8]"
                      aria-label="Decrease"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-bold">{d.qty}</span>
                    <button
                      onClick={() => setQty(d.product.id, d.qty + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-[#f4ebd8]"
                      aria-label="Increase"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(d.product.id)}
                    className="inline-flex items-center gap-1 font-sans text-xs text-[#4b476d] hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => navigate("/shop")}
            className="font-sans font-bold text-sm text-[#1a173b] hover:text-[#d97706]"
          >
            ← Continue shopping
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#1a173b] text-[#fdfbf7] p-7 sticky top-24">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>
            <div className="space-y-3 font-sans text-sm">
              <div className="flex justify-between">
                <span className="text-[#c9cdeb]">Subtotal</span>
                <span className="font-semibold">{format(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#c9cdeb]">Shipping</span>
                <span className="font-semibold text-[#fde68a]">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-white/15 pt-4 mt-2">
                <span>Total</span>
                <span>{format(subtotal)}</span>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#fde68a] text-[#1a173b] font-sans font-bold uppercase text-sm px-6 py-3.5 border-2 border-[#fde68a] hover:bg-[#f5c86b] transition-colors"
            >
              Checkout <ArrowRight className="w-4 h-4" />
            </button>
            <p className="font-sans text-xs text-[#9aa0c9] mt-4 text-center">
              Free shipping · One-time purchase (no subscription) · Ships to the
              United States only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
