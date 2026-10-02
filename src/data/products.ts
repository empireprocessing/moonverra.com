export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string; // main packshot in /public
  gallery: string[];
  price: number; // USD, also used as EUR numeric
  format: string; // e.g. "30 gummies"
  tagline: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  directions: string;
  warnings: string;
  servings: string;
  actives: { name: string; amount: string }[];
  inactives: string[];
  mostPopular?: boolean;
  faq: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "melatonin-gummies",
    name: "Melatonin Gummies",
    image: "/product1.jpeg",
    gallery: ["/product1.jpeg", "/product1-a.jpeg", "/product1-b.jpeg"],
    price: 19.9,
    format: "30 gummies (30-night supply)",
    tagline: "Soft, chewable melatonin for an easy drift into sleep.",
    shortDesc:
      "Lavender-berry melatonin gummies that help you ease into a calm, natural bedtime routine.",
    longDesc:
      "Moonverra Melatonin Gummies deliver a gentle 5 mg of melatonin per gummy in a soothing lavender-berry chew. Melatonin is the hormone your body naturally produces as night falls, signalling that it is time to wind down. Our gummies are crafted for adults who want a simple, pleasant ritual to quiet a busy mind and settle into rest, without grogginess the next morning. Made in the USA in a GMP-registered facility.",
    benefits: [
      "5 mg melatonin per gummy to support a natural sleep onset",
      "Calming lavender-berry flavor — no water needed",
      "Gelatin-free, suitable for a nightly wind-down ritual",
      "Non-habit forming; one-time purchase, no subscription",
    ],
    directions:
      "Take 1 gummy 30 minutes before bedtime. Do not exceed 1 gummy in a 24-hour period.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing. Consult your physician before use if you have a medical condition or take medication. Do not drive or operate machinery after use. Keep out of reach of children.",
    servings: "30 servings per container",
    actives: [
      { name: "Melatonin", amount: "5 mg" },
      { name: "Lavender extract (Lavandula angustifolia)", amount: "25 mg" },
    ],
    inactives: [
      "Glucose syrup",
      "Cane sugar",
      "Pectin",
      "Citric acid",
      "Natural berry & lavender flavor",
      "Purple carrot juice (color)",
    ],
    mostPopular: true,
    faq: [
      {
        q: "When should I take the gummies?",
        a: "About 30 minutes before you plan to sleep, as part of a consistent bedtime routine.",
      },
      {
        q: "Will I feel groggy in the morning?",
        a: "At 5 mg most adults wake rested. Start with one gummy and keep a regular sleep schedule.",
      },
    ],
  },
  {
    id: 2,
    slug: "magnesium-capsules",
    name: "Magnesium Capsules",
    image: "/product2.jpeg",
    gallery: ["/product2.jpeg", "/product2-a.jpeg", "/product2-b.jpeg"],
    price: 39.9,
    format: "120 capsules (60-day supply)",
    tagline: "Highly absorbable magnesium glycinate for calm muscles and mind.",
    shortDesc:
      "Magnesium glycinate capsules to support muscle relaxation, nervous-system calm and deeper rest.",
    longDesc:
      "Moonverra Magnesium Capsules use magnesium bisglycinate — a gentle, highly bioavailable form that is kind to the stomach. Magnesium contributes to normal muscle and nervous-system function, making it a cornerstone of an evening relaxation routine. Our large 120-capsule bottle is a 60-day supply, formulated for adults who want steady, everyday support for calm and restful nights. Made in the USA in a GMP-registered facility.",
    benefits: [
      "200 mg elemental magnesium (as bisglycinate) per serving",
      "Gentle, highly absorbable form — easy on digestion",
      "Supports normal muscle and nervous-system function",
      "60-day supply in every bottle",
    ],
    directions:
      "Take 2 capsules daily, ideally in the evening with a glass of water, or as directed by your healthcare professional.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing without medical advice. Consult your physician before use if you have a medical condition or take medication. Keep out of reach of children.",
    servings: "60 servings per container (2 capsules each)",
    actives: [
      { name: "Magnesium (as magnesium bisglycinate)", amount: "200 mg" },
    ],
    inactives: [
      "Hydroxypropyl methylcellulose (vegetable capsule)",
      "Rice flour",
      "Magnesium stearate (vegetable source)",
    ],
    faq: [
      {
        q: "Which form of magnesium is this?",
        a: "Magnesium bisglycinate, chosen for its gentle digestion profile and high absorption.",
      },
      {
        q: "When is the best time to take it?",
        a: "Most people take it in the evening as part of a wind-down routine, but any consistent time works.",
      },
    ],
  },
  {
    id: 3,
    slug: "evening-herbal-tea",
    name: "Evening Herbal Tea",
    image: "/product3.jpeg",
    gallery: ["/product3.jpeg", "/product3-a.jpeg", "/product3-b.jpeg"],
    price: 9.9,
    format: "15 pyramid tea bags",
    tagline: "A caffeine-free botanical blend to close the day.",
    shortDesc:
      "Chamomile, lavender and lemon balm pyramid tea bags for a warm, calming nightcap.",
    longDesc:
      "Moonverra Evening Herbal Tea is a caffeine-free infusion of chamomile, lavender and lemon balm, finished with a whisper of valerian. Each biodegradable pyramid bag steeps into a golden, floral cup designed to become the signal that your evening has begun. It is the smallest, most approachable way to start the Moonverra ritual. Blended and packed in the USA.",
    benefits: [
      "Caffeine-free botanical blend for evenings",
      "Chamomile, lavender & lemon balm with a touch of valerian",
      "Biodegradable pyramid bags for a full-leaf infusion",
      "A soothing, warm start to any bedtime routine",
    ],
    directions:
      "Steep one tea bag in freshly boiled water for 5–7 minutes. Enjoy 30–45 minutes before bed. Up to 2 cups daily.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing without medical advice. If you are allergic to plants of the daisy family, consult your physician before use. Keep out of reach of children.",
    servings: "15 tea bags per box",
    actives: [
      { name: "Chamomile flower (Matricaria recutita)", amount: "900 mg / bag" },
      { name: "Lemon balm leaf (Melissa officinalis)", amount: "400 mg / bag" },
      { name: "Lavender flower (Lavandula angustifolia)", amount: "300 mg / bag" },
      { name: "Valerian root (Valeriana officinalis)", amount: "150 mg / bag" },
    ],
    inactives: ["Natural honey-apple flavor"],
    faq: [
      {
        q: "Does this tea contain caffeine?",
        a: "No. It is a 100% caffeine-free herbal infusion suitable for the evening.",
      },
      {
        q: "How long should I steep it?",
        a: "5–7 minutes in freshly boiled water releases the fullest flavor and aroma.",
      },
    ],
  },
  {
    id: 4,
    slug: "l-theanine-capsules",
    name: "L-Theanine Capsules",
    image: "/product4.jpeg",
    gallery: ["/product4.jpeg", "/product4-a.jpeg", "/product4-b.jpeg"],
    price: 29.9,
    format: "60 capsules (60-day supply)",
    tagline: "Pure L-theanine for calm, unclouded focus and easy evenings.",
    shortDesc:
      "200 mg L-theanine capsules to promote a relaxed-yet-clear state of mind.",
    longDesc:
      "Moonverra L-Theanine Capsules provide 200 mg of pure L-theanine, the amino acid found in green tea that is prized for promoting relaxation without drowsiness. It supports a calm, settled mind — ideal in the hours before bed or any time you want to take the edge off a busy day. Each bottle is a 60-day supply. Made in the USA in a GMP-registered facility.",
    benefits: [
      "200 mg pure L-theanine per capsule",
      "Promotes relaxation without sedation",
      "Pairs well with an evening or wind-down routine",
      "60-day supply, one capsule per day",
    ],
    directions:
      "Take 1 capsule daily, or in the evening as part of your wind-down, with a glass of water.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing without medical advice. Consult your physician before use if you have a medical condition or take medication. Keep out of reach of children.",
    servings: "60 servings per container",
    actives: [{ name: "L-Theanine", amount: "200 mg" }],
    inactives: [
      "Hydroxypropyl methylcellulose (vegetable capsule)",
      "Microcrystalline cellulose",
      "Rice flour",
    ],
    faq: [
      {
        q: "Will L-theanine make me sleepy?",
        a: "It promotes a calm, relaxed state without the sedation of a sleep aid, so it can be used day or night.",
      },
      {
        q: "Can I take it with the Evening Herbal Tea?",
        a: "Yes, many people enjoy both as part of a layered evening ritual.",
      },
    ],
  },
  {
    id: 5,
    slug: "melatonin-spray",
    name: "Melatonin Spray",
    image: "/product5.jpeg",
    gallery: ["/product5.jpeg", "/product5-a.jpeg", "/product5-b.jpeg"],
    price: 4.9,
    format: "20 ml trial spray (~60 sprays)",
    tagline: "Fast, fuss-free melatonin in a pocket-sized mist.",
    shortDesc:
      "A convenient peppermint melatonin oral spray — the perfect way to try the Moonverra ritual.",
    longDesc:
      "Moonverra Melatonin Spray delivers melatonin as a fine oral mist with a cool peppermint finish — no water, no swallowing, just a quick spray under the tongue. The compact 20 ml bottle is our trial size, ideal for travel, bedside tables and first-timers who want to experience melatonin before committing to a larger format. Made in the USA.",
    benefits: [
      "1 mg melatonin per spray — easy to dose",
      "No water needed; absorbs quickly under the tongue",
      "Pocket-sized for travel and bedside use",
      "Refreshing peppermint finish",
    ],
    directions:
      "Spray once under the tongue 20–30 minutes before bed. Do not exceed 3 sprays (3 mg) in a 24-hour period.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing. Do not drive or operate machinery after use. Consult your physician before use if you take medication. Keep out of reach of children.",
    servings: "Approx. 60 sprays per bottle",
    actives: [{ name: "Melatonin (per spray)", amount: "1 mg" }],
    inactives: [
      "Purified water",
      "Vegetable glycerin",
      "Natural peppermint oil",
      "Potassium sorbate",
    ],
    faq: [
      {
        q: "How many sprays should I use?",
        a: "Start with a single 1 mg spray 20–30 minutes before bed and adjust up to a maximum of 3 sprays.",
      },
      {
        q: "Is this a good way to try melatonin?",
        a: "Yes — the 20 ml trial size is our most affordable way to experience Moonverra.",
      },
    ],
  },
  {
    id: 6,
    slug: "passionflower-capsules",
    name: "Passionflower Capsules",
    image: "/product6.jpeg",
    gallery: ["/product6.jpeg", "/product6-a.jpeg", "/product6-b.jpeg"],
    price: 34.9,
    format: "90 capsules (90-day supply)",
    tagline: "Traditional passionflower to quiet a restless mind.",
    shortDesc:
      "Passionflower extract capsules traditionally used to ease tension and support restful evenings.",
    longDesc:
      "Moonverra Passionflower Capsules concentrate the aerial parts of Passiflora incarnata, a botanical used for generations to help calm a restless, over-active mind. Standardized for consistency, each capsule offers a gentle, non-drowsy way to soften the transition from a busy day into a peaceful night. The 90-capsule bottle is a generous 90-day supply. Made in the USA in a GMP-registered facility.",
    benefits: [
      "500 mg passionflower aerial-parts extract per capsule",
      "Traditionally used to ease everyday tension",
      "Non-drowsy botanical support for calm evenings",
      "90-day supply in every bottle",
    ],
    directions:
      "Take 1 capsule daily in the evening with a glass of water, or as directed by your healthcare professional.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing. Consult your physician before use if you have a medical condition or take medication. Do not combine with sedatives without medical advice. Keep out of reach of children.",
    servings: "90 servings per container",
    actives: [
      {
        name: "Passionflower extract (Passiflora incarnata, aerial parts, 4:1)",
        amount: "500 mg",
      },
    ],
    inactives: [
      "Hydroxypropyl methylcellulose (vegetable capsule)",
      "Rice flour",
      "Magnesium stearate (vegetable source)",
    ],
    faq: [
      {
        q: "Is passionflower sedating?",
        a: "It is traditionally used for calm without heavy sedation, making it suitable for evening use.",
      },
      {
        q: "How long is one bottle?",
        a: "Each bottle contains 90 capsules — a 90-day supply at one capsule per day.",
      },
    ],
  },
  {
    id: 7,
    slug: "lemon-balm-gummies",
    name: "Lemon Balm Gummies",
    image: "/product7.jpeg",
    gallery: ["/product7.jpeg", "/product7-a.jpeg", "/product7-b.jpeg"],
    price: 24.9,
    format: "60 gummies (30-day supply)",
    tagline: "Bright citrus-herb gummies for everyday calm.",
    shortDesc:
      "Lemon balm gummies with a cheerful citrus-herb flavor to help you unwind, day or night.",
    longDesc:
      "Moonverra Lemon Balm Gummies pair 300 mg of lemon balm (Melissa officinalis) extract with a bright, honeyed-citrus flavor. Lemon balm is a member of the mint family long enjoyed for its gently calming character. These gummies make soothing moments effortless — take two in the evening, or whenever the day feels loud. 60 gummies per jar, a 30-day supply. Made in the USA.",
    benefits: [
      "300 mg lemon balm extract per 2-gummy serving",
      "Bright, honeyed-citrus flavor",
      "A calming treat for evenings or stressful afternoons",
      "60 gummies — a 30-day supply",
    ],
    directions:
      "Take 2 gummies daily, ideally in the evening. Do not exceed 2 gummies in a 24-hour period.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing without medical advice. Consult your physician before use if you have a medical condition or take medication. Keep out of reach of children.",
    servings: "30 servings per jar (2 gummies each)",
    actives: [
      {
        name: "Lemon balm leaf extract (Melissa officinalis)",
        amount: "300 mg",
      },
    ],
    inactives: [
      "Glucose syrup",
      "Cane sugar",
      "Pectin",
      "Citric acid",
      "Natural lemon & honey flavor",
      "Turmeric (color)",
    ],
    faq: [
      {
        q: "Can I take these during the day?",
        a: "Yes. Lemon balm is non-drowsy, so the gummies suit both daytime calm and evening wind-downs.",
      },
      {
        q: "How many gummies per day?",
        a: "Two gummies daily is one serving; do not exceed two in 24 hours.",
      },
    ],
  },
  {
    id: 8,
    slug: "glycine-powder",
    name: "Glycine Powder",
    image: "/product8.jpeg",
    gallery: ["/product8.jpeg", "/product8-a.jpeg", "/product8-b.jpeg"],
    price: 49.9,
    format: "300 g tub (100 servings)",
    tagline: "Pure, lightly sweet glycine to support deeper sleep quality.",
    shortDesc:
      "Our largest format: pure glycine powder studied for its role in sleep quality and relaxation.",
    longDesc:
      "Moonverra Glycine Powder is pure, pharmaceutical-grade glycine — a naturally sweet amino acid researched for its supportive role in sleep quality and relaxation. A single 3 g scoop dissolves cleanly into water or evening tea with a subtly sweet taste. This 300 g tub is our largest, best-value format: 100 servings to carry your nightly ritual through season after season. Made in the USA in a GMP-registered facility.",
    benefits: [
      "3 g pure glycine per scoop — naturally, lightly sweet",
      "Dissolves clean in water or evening tea",
      "Our best-value format: 100 servings per tub",
      "Unflavored and vegan-friendly",
    ],
    directions:
      "Mix one 3 g scoop into a glass of water or warm (not boiling) tea 30–60 minutes before bed.",
    warnings:
      "For adult use only. Do not use if pregnant or nursing without medical advice. Consult your physician before use if you have a medical condition or take medication. Keep out of reach of children.",
    servings: "100 servings per tub (3 g each)",
    actives: [{ name: "Glycine", amount: "3,000 mg (3 g)" }],
    inactives: ["None — 100% pure glycine, no additives"],
    faq: [
      {
        q: "Does glycine taste bad?",
        a: "No — glycine is naturally sweet, so it blends pleasantly into water or warm tea.",
      },
      {
        q: "Why is this the most expensive product?",
        a: "It is our largest format: a 300 g tub with 100 servings, offering the best value per serving.",
      },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);
