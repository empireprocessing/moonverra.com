import { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

type SortKey = "featured" | "low" | "high";

export default function Shop() {
  const [sort, setSort] = useState<SortKey>("featured");

  const sorted = useMemo(() => {
    const copy = [...products];
    if (sort === "low") copy.sort((a, b) => a.price - b.price);
    if (sort === "high") copy.sort((a, b) => b.price - a.price);
    return copy;
  }, [sort]);

  return (
    <div className="bg-[#fdfbf7]">
      <div className="bg-[#1a173b] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="font-sans font-bold uppercase tracking-widest text-xs text-[#fde68a] mb-3">
            Shop
          </p>
          <h1 className="text-3xl md:text-5xl font-black">
            The Sleep &amp; Relaxation Collection
          </h1>
          <p className="font-sans text-sm text-[#c9cdeb] mt-4 max-w-2xl">
            Eight considered formulas for calmer evenings and deeper nights — from
            a pocket spray to our best-value glycine tub. One-time purchase, free
            US shipping on every order.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 border-b-2 border-[#1a173b]/15 pb-4">
          <span className="font-sans text-sm text-[#4b476d]">
            {sorted.length} products
          </span>
          <label className="flex items-center gap-2 font-sans text-sm">
            <span className="text-[#4b476d] hidden sm:inline">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="border-2 border-[#1a173b] bg-white px-3 py-2 font-bold text-[#1a173b] focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
