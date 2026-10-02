import { useNavigate } from "react-router-dom";
import { Moon, Leaf, FlaskConical, HeartHandshake } from "lucide-react";
import { site } from "../data/site";

const values = [
  {
    icon: Leaf,
    title: "Thoughtful formulas",
    body: "We focus on well-studied ingredients — melatonin, magnesium, L-theanine, glycine and gentle botanicals — at clearly labeled, sensible dosages.",
  },
  {
    icon: FlaskConical,
    title: "Made in the USA",
    body: "Every product is manufactured in a GMP-registered facility and finished to exacting quality and labeling standards.",
  },
  {
    icon: HeartHandshake,
    title: "Honest by default",
    body: "No fake reviews, no inflated promises, no subscriptions. Just clean products, transparent pricing and a 30-day money-back promise.",
  },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fdfbf7]">
      {/* Hero band */}
      <div className="relative bg-[#1a173b] text-[#fdfbf7] overflow-hidden">
        <div className="absolute top-10 right-16 w-40 h-40 bg-[#fde68a] rounded-full shadow-[0_0_60px_rgba(253,230,138,0.4)] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Moon className="w-10 h-10 text-[#fde68a] mb-5" fill="#fde68a" />
          <h1 className="text-3xl md:text-5xl font-black mb-5 max-w-2xl">
            Better nights, built layer by layer.
          </h1>
          <p className="font-sans text-[#c9cdeb] max-w-2xl leading-relaxed">
            Moonverra is a sleep &amp; relaxation brand founded in 2026 on a simple
            idea: winding down should feel like a ritual you look forward to — not
            another thing to fix. We craft premium nutraceuticals that help calm a
            busy mind and ease the body toward rest.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-black text-[#1a173b] mb-5">
          Our story
        </h2>
        <div className="space-y-4 font-sans text-[15px] text-[#2c2f5e] leading-relaxed">
          <p>
            Moonverra began with a frustration shared by its founders: the hours
            before sleep had become the most stressful of the day. The answer, we
            decided, wasn't a single miracle pill — it was a layered evening
            routine, supported by clean, dependable formulas.
          </p>
          <p>
            So we built a small, focused collection: a soothing evening tea to mark
            the end of the day, melatonin gummies and spray to ease the drift into
            sleep, magnesium and glycine for the body, and calming botanicals like
            passionflower and lemon balm for the mind. Each product is designed to
            stand on its own or combine into a ritual that's entirely yours.
          </p>
          <p>
            As a new company, we don't lean on hype. We lean on quality
            ingredients, transparent labeling and straightforward policies — free US
            shipping, a 30-day money-back promise and no subscriptions, ever.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#f4ebd8] border-y-2 border-[#1a173b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border-2 border-[#1a173b] p-7 shadow-[8px_8px_0_rgba(26,23,59,1)]"
              >
                <div className="w-12 h-12 bg-[#ede9fe] border-2 border-[#8d54cf] flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-[#8d54cf]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a173b] mb-2">
                  {v.title}
                </h3>
                <p className="font-sans text-sm text-[#4b476d] leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-[#1a173b] mb-4">
          Begin your evening ritual tonight.
        </h2>
        <p className="font-sans text-[#4b476d] mb-8 max-w-xl mx-auto">
          Explore the full Moonverra collection and find the formula that fits your
          wind-down.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-10 py-4 shadow-[6px_6px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          Shop the Collection
        </button>
        <p className="font-sans text-xs text-[#4b476d] mt-10">
          {site.company} · {site.llcAddress}
        </p>
      </div>
    </div>
  );
}
