import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import { VisaIcon, MastercardIcon, DiscoverIcon, CvcIcon } from "../components/PaymentIcons";
import { site } from "../data/site";

const legalLinks: { label: string; path: string }[] = [
  { label: "Terms of Purchase", path: "/terms-of-purchase" },
  { label: "Terms & Conditions", path: "/terms-conditions" },
  { label: "Shipping Policy", path: "/shipping-policy" },
  { label: "Return Policy", path: "/return-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
  { label: "Privacy Policy", path: "/privacy-policy" },
];

export default function Checkout() {
  const navigate = useNavigate();
  const { detailed, subtotal, count, clear } = useCart();
  const { format } = useCurrency();

  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [consent, setConsent] = useState(false);
  const [placed, setPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <CheckCircle2 className="w-16 h-16 mx-auto text-[#8d54cf] mb-6" />
        <h1 className="text-3xl font-black text-[#1a173b] mb-3">
          Thank you — your order is confirmed
        </h1>
        <p className="font-sans text-[#4b476d] mb-8">
          A confirmation and USPS tracking number will be sent to your email. Your
          card will be billed as <strong>{site.descriptor}</strong>.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-8 py-3.5 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-black text-[#1a173b] mb-3">
          Your cart is empty
        </h1>
        <p className="font-sans text-[#4b476d] mb-8">
          Add a product before heading to checkout.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-8 py-3.5 shadow-[4px_4px_0_rgba(253,230,138,1)]"
        >
          Browse the Collection
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border-2 border-[#1a173b] bg-white px-3.5 py-2.5 font-sans text-sm text-[#1a173b] focus:outline-none focus:border-[#d97706]";
  const labelClass =
    "block font-sans font-semibold text-xs uppercase tracking-wide text-[#4b476d] mb-1.5";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-black text-[#1a173b] mb-10">
        Checkout
      </h1>

      <form
        onSubmit={handlePlaceOrder}
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {/* LEFT — fields */}
        <div className="lg:col-span-2 space-y-10">
          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-[#1a173b] mb-4 border-b-2 border-[#1a173b]/15 pb-2">
              Contact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" required className={inputClass} placeholder="you@email.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" required className={inputClass} placeholder="(555) 555-5555" />
              </div>
            </div>
          </section>

          {/* Billing */}
          <section>
            <h2 className="text-xl font-bold text-[#1a173b] mb-4 border-b-2 border-[#1a173b]/15 pb-2">
              Billing Address
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First name</label>
                <input required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last name</label>
                <input required className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Address</label>
                <input required className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Apartment, suite, etc. (optional)</label>
                <input className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City</label>
                <input required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <input required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>ZIP code</label>
                <input required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Country</label>
                <select required className={inputClass}>
                  <option value="US">United States</option>
                </select>
              </div>
            </div>
          </section>

          {/* Delivery */}
          <section>
            <div className="flex items-center justify-between mb-4 border-b-2 border-[#1a173b]/15 pb-2">
              <h2 className="text-xl font-bold text-[#1a173b]">Delivery Address</h2>
            </div>
            <label className="flex items-center gap-2 font-sans text-sm text-[#2c2f5e] mb-4">
              <input
                type="checkbox"
                checked={sameAsBilling}
                onChange={(e) => setSameAsBilling(e.target.checked)}
                className="w-4 h-4 accent-[#1a173b]"
              />
              Same as billing address
            </label>

            {!sameAsBilling && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First name</label>
                  <input required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last name</label>
                  <input required className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Address</label>
                  <input required className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Apartment, suite, etc. (optional)</label>
                  <input className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>ZIP code</label>
                  <input required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <select required className={inputClass}>
                    <option value="US">United States</option>
                  </select>
                </div>
              </div>
            )}
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-xl font-bold text-[#1a173b] mb-4 border-b-2 border-[#1a173b]/15 pb-2">
              Payment
            </h2>
            <p className="font-sans text-sm text-[#2c2f5e] mb-4">
              Billed as <strong>{site.descriptor}</strong>
            </p>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Card number</label>
                <div className="relative">
                  <input
                    required
                    inputMode="numeric"
                    placeholder="1234 5678 9012 3456"
                    className={`${inputClass} pr-36`}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    <VisaIcon width={40} height={25} />
                    <MastercardIcon width={40} height={25} />
                    <DiscoverIcon width={40} height={25} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Expiration (MM/YY)</label>
                  <input required placeholder="MM/YY" className={inputClass} />
                </div>
                <div>
                  <label className={`${labelClass} flex items-center gap-2`}>
                    Security code (CVC) <CvcIcon width={24} height={16} />
                  </label>
                  <input required inputMode="numeric" placeholder="123" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Name on card</label>
                <input required className={inputClass} />
              </div>
            </div>

            <p className="flex items-center gap-2 font-sans text-xs text-[#4b476d] mt-4">
              <Lock className="w-4 h-4 text-[#8d54cf]" />
              Your payment information is encrypted and secure. We never store your
              card details.
            </p>
          </section>
        </div>

        {/* RIGHT — order summary */}
        <div className="lg:col-span-1">
          <div className="bg-[#1a173b] text-[#fdfbf7] p-7 sticky top-24">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>
            <div className="space-y-4 mb-5">
              {detailed.map((d) => (
                <div key={d.product.id} className="flex gap-3">
                  <img
                    src={d.product.image}
                    alt={d.product.name}
                    className="w-14 h-14 object-cover border border-white/20 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-semibold truncate">
                      {d.product.name}
                    </p>
                    <p className="font-sans text-xs text-[#9aa0c9]">
                      Qty {d.qty}
                    </p>
                  </div>
                  <span className="font-sans text-sm font-semibold whitespace-nowrap">
                    {format(d.lineTotal)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 font-sans text-sm border-t border-white/15 pt-4">
              <div className="flex justify-between">
                <span className="text-[#c9cdeb]">Subtotal</span>
                <span className="font-semibold">{format(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#c9cdeb]">Shipping</span>
                <span className="font-semibold text-[#fde68a]">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-white/15 pt-4">
                <span>Total</span>
                <span>{format(subtotal)}</span>
              </div>
            </div>

            {/* Reminder block */}
            <div className="mt-5 bg-white/5 border border-white/10 p-3">
              <p className="font-sans text-xs text-[#e6e8f6] text-center">
                Free shipping · One-time purchase (no subscription) · Ships to the
                United States only.
              </p>
            </div>

            {/* Consent */}
            <label className="flex gap-3 mt-6 font-sans text-xs text-[#e6e8f6] leading-relaxed cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-4 h-4 mt-0.5 shrink-0 accent-[#fde68a]"
              />
              <span>
                I am 18 years or older and agree to the{" "}
                {legalLinks.map((l, i) => (
                  <span key={l.path}>
                    <button
                      type="button"
                      onClick={() => navigate(l.path)}
                      className="underline text-[#fde68a] hover:text-white"
                    >
                      {l.label}
                    </button>
                    {i < legalLinks.length - 2
                      ? ", "
                      : i === legalLinks.length - 2
                      ? ", and "
                      : "."}
                  </span>
                ))}
              </span>
            </label>

            {/* Disclaimer */}
            <p className="font-sans text-[11px] text-[#9aa0c9] leading-relaxed mt-4">
              I agree to pay the total amount provided on the checkout page (free
              shipping via USPS). To cancel your order, please call our customer
              service team CST Mon–Fri (9am–5pm) at {site.phone} or email{" "}
              {site.email}. For guidelines on returns and cancellations please
              visit our Terms &amp; Conditions page for instructions on returning a
              product or canceling an order. Your credit card will be billed with
              the following descriptor: {site.descriptor}. This is how the charge
              will appear on the cardholder's billing statement. Products will be
              shipped in 3–5 business days via USPS.*
            </p>

            <button
              type="submit"
              disabled={!consent}
              className={`w-full mt-6 font-sans font-bold uppercase text-sm px-6 py-3.5 border-2 transition-all ${
                consent
                  ? "bg-[#fde68a] text-[#1a173b] border-[#fde68a] hover:bg-[#f5c86b] cursor-pointer"
                  : "bg-white/10 text-white/40 border-white/10 cursor-not-allowed"
              }`}
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
