import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Moon } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useCurrency } from "../context/CurrencyContext";

const nav = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { count } = useCart();
  const { currency, toggle } = useCurrency();
  const [open, setOpen] = useState(false);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4ebd8] border-b-2 border-[#1a173b] shadow-[0_4px_0_rgba(26,23,59,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <button
            onClick={() => go("/")}
            className="flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tighter text-[#1a173b]"
          >
            <Moon className="w-6 h-6 text-[#d97706]" fill="#fde68a" />
            Moonverra
          </button>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-bold text-sm tracking-wide uppercase">
            {nav.map((n) => (
              <button
                key={n.path}
                onClick={() => go(n.path)}
                className={`transition-colors hover:text-[#d97706] ${
                  pathname === n.path ? "text-[#d97706]" : "text-[#1a173b]"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggle}
              className="hidden sm:inline-flex items-center justify-center w-11 h-9 border-2 border-[#1a173b] bg-white font-sans font-bold text-xs text-[#1a173b] hover:bg-[#fef3c7] transition-colors"
              aria-label="Toggle currency"
            >
              {currency}
            </button>

            <button
              onClick={() => go("/cart")}
              className="relative inline-flex items-center gap-2 bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-xs px-4 py-2.5 shadow-[3px_3px_0_rgba(253,230,138,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-[#fde68a] text-[#1a173b] rounded-full text-[11px]">
                {count}
              </span>
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border-2 border-[#1a173b] bg-white text-[#1a173b]"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t-2 border-[#1a173b] bg-[#f4ebd8]">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {nav.map((n) => (
              <button
                key={n.path}
                onClick={() => go(n.path)}
                className="text-left py-3 px-2 font-sans font-bold uppercase text-sm tracking-wide text-[#1a173b] border-b border-[#1a173b]/20 hover:text-[#d97706]"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => {
                toggle();
              }}
              className="text-left py-3 px-2 font-sans font-bold uppercase text-sm tracking-wide text-[#1a173b]"
            >
              Currency: {currency}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
