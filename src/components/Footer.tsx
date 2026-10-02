import { useNavigate } from "react-router-dom";
import { Moon, MapPin, Phone, Mail } from "lucide-react";
import { PaymentRow } from "./PaymentIcons";
import { site } from "../data/site";

const mainNav = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Ingredients", path: "/ingredients" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const legalNav = [
  { label: "Terms & Conditions", path: "/terms-conditions" },
  { label: "Terms of Purchase", path: "/terms-of-purchase" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Shipping Policy", path: "/shipping-policy" },
  { label: "Return Policy", path: "/return-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1a173b] text-[#fdfbf7] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + payments */}
          <div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-2xl font-black tracking-tighter mb-4"
            >
              <Moon className="w-6 h-6 text-[#fde68a]" fill="#fde68a" />
              Moonverra
            </button>
            <p className="font-sans text-sm text-[#c9cdeb] leading-relaxed mb-5">
              Premium sleep &amp; relaxation supplements for calm evenings and
              restful nights. Made in the USA.
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-[#fde68a] mb-2">
              We accept
            </p>
            <PaymentRow size={60} />
          </div>

          {/* Shop nav */}
          <div>
            <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#fde68a] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              {mainNav.map((n) => (
                <li key={n.path}>
                  <button
                    onClick={() => navigate(n.path)}
                    className="text-[#c9cdeb] hover:text-white transition-colors"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal nav */}
          <div>
            <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#fde68a] mb-4">
              Legal
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              {legalNav.map((n) => (
                <li key={n.path}>
                  <button
                    onClick={() => navigate(n.path)}
                    className="text-[#c9cdeb] hover:text-white transition-colors text-left"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#fde68a] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#c9cdeb]">
              <li className="font-semibold text-white">{site.company}</li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#fde68a]" />
                <span>{site.llcAddress}</span>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#fde68a]" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#fde68a]" />
                  {site.email}
                </a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="block text-[#fde68a] text-xs uppercase tracking-widest mb-1">
                  Return Address
                </span>
                {site.returnAddress}
              </li>
            </ul>
          </div>
        </div>

        {/* FDA disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-sans text-xs text-[#9aa0c9] leading-relaxed max-w-5xl">
            All trademarks and copyrights are the property of their respective
            owners and are not affiliated with nor do they endorse {site.company}.
            These statements have not been evaluated by the Food and Drug
            Administration (FDA) nor by the Federal Food, Drug, and Cosmetic Act
            (FD&amp;C Act). This product is not intended to diagnose, treat, cure,
            or prevent any disease. Individual results may vary. By using this
            site, you agree to follow the Privacy Policy and all Terms &amp;
            Conditions printed on this site. Void where prohibited by law.
          </p>
          <p className="font-sans text-xs text-[#9aa0c9] mt-6">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
