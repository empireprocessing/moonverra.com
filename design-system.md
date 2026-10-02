# Moonverra Design System — "Paper Cut Layers" (Vibe 2)

## Design tokens
- Fonts: headings `Fraunces` (serif), body `Inter` (sans). Load via Google Fonts.
- Palette:
  - Night navy (ink / dark backgrounds): `#1a173b`
  - Cream / paper base (light backgrounds): `#fdfbf7`
  - Parchment panel: `#f4ebd8`
  - Amber moon accent: `#fde68a` (soft), `#d97706` (deep amber)
  - Indigo layers: `#312e81`, `#4f46e5`, `#e0e7ff`, `#4b476d`
- Signature moves: layered paper "diorama" hero (navy night sky + glowing amber moon + stacked rounded hill layers), hard offset drop shadows `shadow-[8px_8px_0_rgba(26,23,59,1)]`, 2px solid borders in night navy, buttons that translate on hover and collapse their offset shadow, serif display headings with `drop-shadow` on cream, uppercase Inter labels for nav/eyebrows.
- Buttons (primary): `bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-6 py-3 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`.
- Cards: cream/parchment bg + 2px navy border + hard offset shadow, hover `-translate-y-2`.
- Rounded organic hill shapes via `rounded-[100%_100%_0_0/...]`.

## Canonical reference code (chosen vibe — reproduce this look exactly)

```tsx
<div className="bg-[#Fdfbf7] font-['Fraunces'] text-[#1a173b] min-h-screen relative overflow-hidden flex flex-col">

  {/* Nav Layer */}
  <nav className="w-full bg-[#f4ebd8] border-b-2 border-[#1a173b] shadow-[0_4px_0_rgba(26,23,59,1)] z-40 relative px-8 py-6 flex justify-between items-center">
    <div className="text-3xl font-black tracking-tighter">Moonverra</div>
    <div className="flex gap-8 font-sans font-bold text-sm tracking-wide uppercase">
      <a href="#" className="hover:text-amber-700 transition-colors">Shop</a>
      <a href="#" className="hover:text-amber-700 transition-colors">Rituals</a>
      <a href="#" className="hover:text-amber-700 transition-colors">Cart (0)</a>
    </div>
  </nav>

  {/* Hero Diorama Layering */}
  <div className="relative w-full h-[600px] overflow-hidden bg-[#1a173b] shadow-[inset_0_20px_30px_rgba(0,0,0,0.5)] z-10 flex flex-col justify-end">
    {/* Paper Moon */}
    <div className="absolute top-20 right-32 w-48 h-48 bg-[#fde68a] rounded-full shadow-[0_0_40px_rgba(253,230,138,0.4)] z-10"></div>
    {/* Back Mountain Layer */}
    <div className="absolute bottom-0 left-[-10%] w-[120%] h-[350px] bg-[#312e81] shadow-[0_-15px_30px_rgba(0,0,0,0.4)] z-20 rounded-[100%_100%_0_0/100px_200px_0_0]"></div>
    {/* Middle Wave Layer */}
    <div className="absolute bottom-0 left-[-5%] w-[110%] h-[250px] bg-[#4f46e5] shadow-[0_-10px_20px_rgba(0,0,0,0.5)] z-30 rounded-[100%_100%_0_0/200px_100px_0_0]"></div>
    {/* Front Hill Layer */}
    <div className="relative w-full h-[180px] bg-[#Fdfbf7] shadow-[0_-15px_25px_rgba(0,0,0,0.6)] z-40 rounded-[50%_50%_0_0/50px_50px_0_0] flex items-center justify-center pt-8">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black text-[#1a173b] mb-4 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
          Rest, Layer by Layer.
        </h1>
        <p className="font-sans text-lg max-w-xl mx-auto text-[#4b476d]">
          Premium nutraceuticals meticulously crafted for a deep, uninterrupted night.
        </p>
      </div>
    </div>
  </div>

  {/* Content Section (Paper Cards) */}
  <div className="bg-[#Fdfbf7] flex-1 z-40 relative px-8 py-20">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b-4 border-[#1a173b] pb-4">
        <h2 className="text-4xl font-bold">The Sleep Collection</h2>
        <button className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-6 py-3 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0_rgba(253,230,138,1)] transition-all">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { name: 'Melatonin Gummies', dose: '5mg / 60 count', bg: 'bg-[#e0e7ff]', border: 'border-[#4f46e5]' },
          { name: 'Magnesium Caps', dose: '200mg / 30 count', bg: 'bg-[#f4ebd8]', border: 'border-[#1a173b]' },
          { name: 'L-Theanine Extract', dose: 'Botanical Blend', bg: 'bg-[#fef3c7]', border: 'border-[#d97706]' }
        ].map((item, idx) => (
          <div key={idx} className={`relative p-8 border-2 ${item.border} ${item.bg} shadow-[8px_8px_0_rgba(26,23,59,1)] transition-transform hover:-translate-y-2`}>
            <div className="w-full h-48 bg-white border-2 border-inherit shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1)] mb-6 flex items-center justify-center overflow-hidden">
               <div className="w-24 h-24 bg-inherit border-2 border-inherit rounded-full shadow-[4px_4px_0_rgba(0,0,0,0.1)]"></div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
            <p className="font-sans text-sm text-gray-700 mb-6">{item.dose}</p>
            <div className="flex justify-between items-center border-t-2 border-inherit pt-4">
              <span className="text-xl font-bold">$24.00</span>
              <button className="font-sans font-bold uppercase text-xs tracking-wider bg-white border-2 border-inherit px-4 py-2 shadow-[2px_2px_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Paper Strip */}
      <div className="mt-24 w-full bg-[#1a173b] text-[#fdfbf7] p-8 border-4 border-[#fde68a] shadow-[10px_10px_0_rgba(26,23,59,0.2)] flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div className="w-12 h-12 bg-[#fde68a] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]"></div>
          <div>
            <h4 className="font-bold text-xl">Third-Party Tested</h4>
            <p className="font-sans text-sm text-gray-300">Purity guaranteed in every batch.</p>
          </div>
        </div>
        <div className="font-sans text-xs uppercase tracking-widest text-right">
          <p>Secure Single-Page Checkout</p>
          <p className="text-[#fde68a]">Free Shipping on every order</p>
        </div>
      </div>
    </div>
  </div>
</div>
```
