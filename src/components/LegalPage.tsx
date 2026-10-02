import { ReactNode } from "react";

export default function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-[#fdfbf7]">
      {/* Night band header */}
      <div className="bg-[#1a173b] text-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl md:text-5xl font-black mb-3">{title}</h1>
          {subtitle && (
            <p className="font-sans text-sm text-[#c9cdeb]">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="legal-body font-sans text-[15px] leading-relaxed text-[#2c2f5e] space-y-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-[#1a173b] pt-4 border-b-2 border-[#1a173b]/15 pb-2">
      {children}
    </h2>
  );
}
