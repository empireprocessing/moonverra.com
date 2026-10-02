import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Currency = "USD" | "EUR";

interface CurrencyContextValue {
  currency: Currency;
  toggle: () => void;
  symbol: string;
  format: (value: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(
  undefined
);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem("moonverra_currency");
    return saved === "EUR" ? "EUR" : "USD";
  });

  useEffect(() => {
    localStorage.setItem("moonverra_currency", currency);
  }, [currency]);

  const toggle = () => setCurrency((c) => (c === "USD" ? "EUR" : "USD"));
  const symbol = currency === "USD" ? "$" : "€";
  const format = (value: number) => `${symbol}${value.toFixed(2)}`;

  return (
    <CurrencyContext.Provider value={{ currency, toggle, symbol, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
