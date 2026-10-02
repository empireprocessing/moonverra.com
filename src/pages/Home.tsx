import { useNavigate } from "react-router-dom";
import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Flag,
  Moon,
  Leaf,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const trust = [
  { icon: Truck, label: "Free US Shipping", sub: "On every order via USPS" },
  { icon: ShieldCheck, label: "Secure Checkout", sub: "Visa · Mastercard · Discover" },
  { icon: BadgeCheck, label: "30-Day Money-Back", sub: "Simple, honest returns" },
  { icon: Flag, label: "Made in the USA", sub: "GMP-registered facility" },
];

const benefits = [
  {
    icon: Moon,
    title: "Built for the evening",
    body: "Every formula is designed around the hours before sleep — to help a busy mind settle and the body unwind.",
  },
  {
    icon: Leaf,
    title: "Clean, considered ingredients",
    body: "Melatonin, magnesium, L-theanine and gentle botanicals at sensible, clearly labeled dosages. No fillers you can't pronounce.",
  },
  {
    icon: Sparkles,
    title: "A ritual, not a quick fix",
    body: "From a warm evening tea to a bedside spray, Moonverra is a layered routine you can make your own, night after night.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose your formula",
    body: "Pick the gummy, capsule, tea, spray or powder that fits your evening.",
  },
  {
    n: "02",
    title: "Build your ritual",
    body: "Take it 30 minutes before bed as part of a calm, consistent wind-down.",
  },
  {
    n: "03",
    title: "Drift into rest",
    body: "Let the day settle layer by layer and wake feeling like yourself.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdfbf7]">
      {/* HERO — full-bleed photo, no text, single Shop Now button */}
      <section className="relative w-full h-[72vh] min-h-[460px] max-h-[760px] overflow-hidden bg-[#1a173b]">
        <img
          src="/Herophoto.jpeg"
          alt="Moonverra sleep and relaxation supplements in a calm nighttime setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 top-[14%] flex justify-center">
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#fde68a] text-[#1a173b] font-sans font-bold uppercase tracking-widest text-sm px-10 py-4 border-2 border-[#1a173b] shadow-[6px_6px_0_rgba(26,23,59,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#f4ebd8] border-b-2 border-[#1a173b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="w-11 h-11 shrink-0 bg-[#1a173b] text-[#fde68a] flex items-center justify-center">
                <t.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#1a173b]">{t.label}</p>
                <p className="font-sans text-xs text-[#4b476d]">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-sans font-bold uppercase tracking-widest text-xs text-[#d97706] mb-3">
            The Moonverra way
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a173b]">
            Rest, layer by layer.
          </h2>
          <p className="font-sans text-[#4b476d] mt-4">
            Premium nutraceuticals meticulously crafted for a deep, uninterrupted
            night — and calmer evenings along the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-8 bg-white border-2 border-[#1a173b] shadow-[8px_8px_0_rgba(26,23,59,1)]"
            >
              <div className="w-12 h-12 bg-[#ede9fe] border-2 border-[#8d54cf] flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-[#8d54cf]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a173b] mb-2">{b.title}</h3>
              <p className="font-sans text-sm text-[#4b476d] leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-[#f4ebd8] border-y-2 border-[#1a173b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 border-b-4 border-[#1a173b] pb-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a173b]">
              The Sleep Collection
            </h2>
            <button
              onClick={() => navigate("/shop")}
              className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-6 py-3 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-14">
          <p className="font-sans font-bold uppercase tracking-widest text-xs text-[#d97706] mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#1a173b]">
            Three steps to a calmer night
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative p-8 bg-[#1a173b] text-[#fdfbf7]">
              <span className="font-black text-5xl text-[#fde68a]/30 absolute top-4 right-5">
                {s.n}
              </span>
              <h3 className="text-xl font-bold mb-2 relative z-10">{s.title}</h3>
              <p className="font-sans text-sm text-[#c9cdeb] leading-relaxed relative z-10">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECONDARY HERO BAND */}
      <section className="relative w-full h-[42vh] min-h-[300px] overflow-hidden bg-[#1a173b]">
        <img
          src="/Herophoto.jpeg"
          alt="Moonverra nighttime relaxation ritual"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#1a173b]/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg max-w-3xl">
            Your evening deserves a ritual.
          </h2>
          <p className="font-sans text-[#e6e8f6] mt-4 max-w-xl">
            Start small with an evening tea, or build the full routine. Free US
            shipping on every order.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-8 bg-[#fde68a] text-[#1a173b] font-sans font-bold uppercase tracking-widest text-sm px-10 py-4 border-2 border-[#1a173b] shadow-[6px_6px_0_rgba(26,23,59,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Shop the Collection
          </button>
        </div>
      </section>
    </div>
  );
}
