import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  BadgeCheck,
  ChevronDown,
  Check,
} from "lucide-react";
import { getProduct, products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = slug ? getProduct(slug) : undefined;
  const { addItem } = useCart();
  const { format } = useCurrency();

  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openAcc, setOpenAcc] = useState<string | null>("specs");

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-28 text-center">
        <h1 className="text-3xl font-black text-[#1a173b] mb-4">
          Product not found
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-6 py-3 shadow-[4px_4px_0_rgba(253,230,138,1)]"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const addAndGo = (go: boolean) => {
    addItem(product.id, qty);
    if (go) navigate("/cart");
  };

  return (
    <div className="bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="font-sans text-xs text-[#4b476d] mb-8 flex gap-2">
          <button onClick={() => navigate("/")} className="hover:text-[#d97706]">
            Home
          </button>
          <span>/</span>
          <button onClick={() => navigate("/shop")} className="hover:text-[#d97706]">
            Shop
          </button>
          <span>/</span>
          <span className="text-[#1a173b] font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="bg-white border-2 border-[#1a173b] shadow-[8px_8px_0_rgba(26,23,59,1)] overflow-hidden">
              <img
                src={product.gallery[activeImg]}
                alt={`${product.name} — view ${activeImg + 1}`}
                className="w-full h-[380px] md:h-[520px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {product.gallery.map((g, i) => (
                <button
                  key={g}
                  onClick={() => setActiveImg(i)}
                  className={`bg-white border-2 overflow-hidden transition-all ${
                    activeImg === i
                      ? "border-[#d97706] shadow-[3px_3px_0_rgba(217,151,6,1)]"
                      : "border-[#1a173b]/40"
                  }`}
                >
                  <img
                    src={g}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Buy box */}
          <div>
            {product.mostPopular && (
              <span className="inline-block bg-[#1a173b] text-[#fde68a] font-sans font-bold uppercase text-[10px] tracking-widest px-3 py-1 mb-4">
                Most Popular
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-black text-[#1a173b] mb-3">
              {product.name}
            </h1>
            <p className="font-sans text-[#4b476d] mb-5">{product.tagline}</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-[#1a173b]">
                {format(product.price)}
              </span>
              <span className="font-sans text-sm text-[#4b476d]">
                {product.format}
              </span>
            </div>

            <p className="font-sans text-sm text-[#2c2f5e] leading-relaxed mb-8">
              {product.shortDesc}
            </p>

            {/* Qty + add */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="inline-flex items-center border-2 border-[#1a173b]">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-12 flex items-center justify-center hover:bg-[#f4ebd8]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold text-lg">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-11 h-12 flex items-center justify-center hover:bg-[#f4ebd8]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => addAndGo(false)}
                className="flex-1 min-w-[160px] bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-6 py-3.5 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Add to Cart
              </button>
            </div>
            <button
              onClick={() => addAndGo(true)}
              className="w-full bg-[#fde68a] text-[#1a173b] font-sans font-bold uppercase text-sm px-6 py-3.5 border-2 border-[#1a173b] shadow-[4px_4px_0_rgba(26,23,59,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all mb-8"
            >
              Buy Now
            </button>

            {/* mini trust */}
            <div className="grid grid-cols-3 gap-3 border-t-2 border-[#1a173b]/15 pt-6">
              {[
                { icon: Truck, label: "Free US shipping" },
                { icon: ShieldCheck, label: "Secure checkout" },
                { icon: BadgeCheck, label: "30-day money-back" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <t.icon className="w-5 h-5 text-[#8d54cf]" />
                  <span className="font-sans text-xs text-[#4b476d]">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Long description + benefits */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#1a173b] mb-4">
              About this formula
            </h2>
            <p className="font-sans text-[15px] text-[#2c2f5e] leading-relaxed">
              {product.longDesc}
            </p>
          </div>
          <div className="bg-[#1a173b] text-[#fdfbf7] p-7">
            <h3 className="text-lg font-bold mb-4">Key benefits</h3>
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-2 font-sans text-sm text-[#e6e8f6]">
                  <Check className="w-4 h-4 text-[#fde68a] shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accordions: specs / shipping */}
        <div className="mt-16 max-w-3xl space-y-4">
          {/* Specs */}
          <Accordion
            id="specs"
            title="Supplement facts & directions"
            open={openAcc === "specs"}
            onToggle={() =>
              setOpenAcc(openAcc === "specs" ? null : "specs")
            }
          >
            <div className="space-y-4 font-sans text-sm text-[#2c2f5e]">
              <p className="font-semibold">{product.servings}</p>
              <div>
                <p className="font-bold text-[#1a173b] mb-1">Active ingredients</p>
                <ul className="space-y-1">
                  {product.actives.map((a) => (
                    <li key={a.name} className="flex justify-between border-b border-[#1a173b]/10 py-1">
                      <span>{a.name}</span>
                      <span className="font-semibold">{a.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-bold text-[#1a173b] mb-1">Other ingredients</p>
                <p>{product.inactives.join(", ")}</p>
              </div>
              <div>
                <p className="font-bold text-[#1a173b] mb-1">Directions</p>
                <p>{product.directions}</p>
              </div>
              <div>
                <p className="font-bold text-[#1a173b] mb-1">Warnings</p>
                <p>{product.warnings}</p>
              </div>
            </div>
          </Accordion>

          {/* Shipping */}
          <Accordion
            id="shipping"
            title="Shipping & returns"
            open={openAcc === "shipping"}
            onToggle={() =>
              setOpenAcc(openAcc === "shipping" ? null : "shipping")
            }
          >
            <div className="space-y-2 font-sans text-sm text-[#2c2f5e]">
              <p>
                Free shipping within the United States via USPS. Orders are
                processed within 1–2 business days and typically arrive within 5–7
                business days. A tracking number is emailed once your order ships.
              </p>
              <p>
                Not quite right? You have 30 days from delivery to start a return.
                Contact us for an RMA number and return instructions.
              </p>
            </div>
          </Accordion>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-[#1a173b] mb-6">
            Product questions
          </h2>
          <div className="space-y-3">
            {product.faq.map((f, i) => (
              <div
                key={f.q}
                className="border-2 border-[#1a173b] bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#1a173b]"
                >
                  {f.q}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-5 font-sans text-sm text-[#2c2f5e] leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-[#1a173b] mb-8">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-[#1a173b] bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-[#1a173b]"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
}
