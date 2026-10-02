import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

const bgCycle = [
  { bg: "bg-[#e0e7ff]", border: "border-[#4f46e5]" },
  { bg: "bg-[#f4ebd8]", border: "border-[#1a173b]" },
  { bg: "bg-[#fef3c7]", border: "border-[#d97706]" },
  { bg: "bg-[#ede9fe]", border: "border-[#8d54cf]" },
];

export default function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { format } = useCurrency();
  const theme = bgCycle[(product.id - 1) % bgCycle.length];

  return (
    <div
      className={`relative flex flex-col p-5 border-2 ${theme.border} ${theme.bg} shadow-[8px_8px_0_rgba(26,23,59,1)] transition-transform hover:-translate-y-2`}
    >
      {product.mostPopular && (
        <span className="absolute -top-3 -right-3 z-10 bg-[#1a173b] text-[#fde68a] font-sans font-bold uppercase text-[10px] tracking-widest px-3 py-1 border-2 border-[#fde68a]">
          Most Popular
        </span>
      )}
      <button
        onClick={() => navigate(`/product/${product.slug}`)}
        className="block w-full bg-white border-2 border-inherit mb-4 overflow-hidden"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} — Moonverra sleep supplement packshot`}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </button>

      <button
        onClick={() => navigate(`/product/${product.slug}`)}
        className="text-left"
      >
        <h3 className="text-xl font-bold mb-1 text-[#1a173b] hover:text-[#d97706] transition-colors">
          {product.name}
        </h3>
      </button>
      <p className="font-sans text-xs text-[#4b476d] mb-4">{product.format}</p>

      <div className="mt-auto flex items-center justify-between border-t-2 border-inherit pt-4">
        <span className="text-xl font-bold text-[#1a173b]">
          {format(product.price)}
        </span>
        <button
          onClick={() => addItem(product.id)}
          className="inline-flex items-center gap-1 font-sans font-bold uppercase text-xs tracking-wider bg-white border-2 border-[#1a173b] text-[#1a173b] px-3 py-2 shadow-[2px_2px_0_rgba(26,23,59,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          <Plus className="w-3.5 h-3.5" /> Add
        </button>
      </div>
    </div>
  );
}
