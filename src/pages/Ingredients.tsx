import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function Ingredients() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fdfbf7]">
      <div className="bg-[#1a173b] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans font-bold uppercase tracking-widest text-xs text-[#fde68a] mb-3">
            Full transparency
          </p>
          <h1 className="text-3xl md:text-5xl font-black">
            Ingredients &amp; Dosages
          </h1>
          <p className="font-sans text-sm text-[#c9cdeb] mt-4 max-w-2xl">
            Every active and inactive ingredient in the Moonverra collection,
            quantified per serving. No proprietary blends, no hidden fillers.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white border-2 border-[#1a173b] shadow-[8px_8px_0_rgba(26,23,59,1)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 border-b-2 border-[#1a173b] bg-[#f4ebd8]">
              <img
                src={p.image}
                alt={p.name}
                className="w-16 h-16 object-cover border-2 border-[#1a173b]"
              />
              <div className="flex-1">
                <button
                  onClick={() => navigate(`/product/${p.slug}`)}
                  className="text-xl font-bold text-[#1a173b] hover:text-[#d97706] text-left"
                >
                  {p.name}
                </button>
                <p className="font-sans text-xs text-[#4b476d] mt-1">
                  {p.format} · {p.servings}
                </p>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-sans font-bold uppercase text-xs tracking-widest text-[#d97706] mb-3">
                  Active ingredients
                </h3>
                <ul className="space-y-2">
                  {p.actives.map((a) => (
                    <li
                      key={a.name}
                      className="flex justify-between gap-4 font-sans text-sm text-[#2c2f5e] border-b border-[#1a173b]/10 pb-2"
                    >
                      <span>{a.name}</span>
                      <span className="font-bold text-[#1a173b] whitespace-nowrap">
                        {a.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-bold uppercase text-xs tracking-widest text-[#d97706] mb-3">
                  Other ingredients
                </h3>
                <p className="font-sans text-sm text-[#2c2f5e] leading-relaxed">
                  {p.inactives.join(", ")}
                </p>
                <h3 className="font-sans font-bold uppercase text-xs tracking-widest text-[#d97706] mt-5 mb-2">
                  Directions
                </h3>
                <p className="font-sans text-sm text-[#2c2f5e] leading-relaxed">
                  {p.directions}
                </p>
              </div>
            </div>
          </div>
        ))}

        <p className="font-sans text-xs text-[#4b476d] leading-relaxed border-t-2 border-[#1a173b]/15 pt-6">
          These statements have not been evaluated by the Food and Drug
          Administration. These products are not intended to diagnose, treat, cure,
          or prevent any disease. Consult your physician before use if you are
          pregnant, nursing, taking medication, or have a medical condition.
          Individual results may vary.
        </p>
      </div>
    </div>
  );
}
