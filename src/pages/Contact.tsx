import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full border-2 border-[#1a173b] bg-white px-3.5 py-2.5 font-sans text-sm text-[#1a173b] focus:outline-none focus:border-[#d97706]";
  const labelClass =
    "block font-sans font-semibold text-xs uppercase tracking-wide text-[#4b476d] mb-1.5";

  return (
    <div className="bg-[#fdfbf7]">
      <div className="bg-[#1a173b] text-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl md:text-5xl font-black mb-3">Contact Us</h1>
          <p className="font-sans text-sm text-[#c9cdeb] max-w-2xl">
            Questions about a product, an order, or a return? Our team is here to
            help, CST Monday–Friday, 9am–5pm.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-start gap-4 bg-white border-2 border-[#1a173b] p-5 shadow-[6px_6px_0_rgba(26,23,59,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              <div className="w-11 h-11 bg-[#1a173b] text-[#fde68a] flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-[#d97706] mb-1">
                  {c.label}
                </p>
                <p className="font-bold text-[#1a173b] break-all">{c.value}</p>
              </div>
            </a>
          ))}

          <div className="flex items-start gap-4 bg-white border-2 border-[#1a173b] p-5">
            <div className="w-11 h-11 bg-[#1a173b] text-[#fde68a] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[#d97706] mb-1">
                Support Hours
              </p>
              <p className="font-bold text-[#1a173b]">Mon–Fri, 9am–5pm CST</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border-2 border-[#1a173b] p-5">
            <div className="w-11 h-11 bg-[#1a173b] text-[#fde68a] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[#d97706] mb-1">
                Company
              </p>
              <p className="font-bold text-[#1a173b]">{site.company}</p>
              <p className="font-sans text-sm text-[#4b476d] mt-1">
                {site.llcAddress}
              </p>
              <p className="font-sans text-sm text-[#4b476d] mt-2">
                <span className="font-semibold text-[#1a173b]">Returns:</span>{" "}
                {site.returnAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border-2 border-[#1a173b] shadow-[8px_8px_0_rgba(26,23,59,1)] p-7">
          {sent ? (
            <div className="text-center py-12">
              <Send className="w-12 h-12 mx-auto text-[#8d54cf] mb-4" />
              <h2 className="text-2xl font-bold text-[#1a173b] mb-2">
                Message sent
              </h2>
              <p className="font-sans text-sm text-[#4b476d]">
                Thanks for reaching out. We reply within 24 hours on business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#1a173b] mb-2">
                Send us a message
              </h2>
              <div>
                <label className={labelClass}>Name</label>
                <input required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Order number (optional)</label>
                <input className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea required rows={5} className={inputClass} />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-6 py-3.5 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
