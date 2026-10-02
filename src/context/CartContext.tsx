import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { products, Product } from "../data/products";

export interface CartLine {
  id: number;
  qty: number;
}

interface CartContextValue {
  lines: CartLine[];
  addItem: (id: number, qty?: number) => void;
  removeItem: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: { product: Product; qty: number; lineTotal: number }[];
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "moonverra_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartLine[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const addItem = (id: number, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === id);
      if (existing) {
        return prev.map((l) =>
          l.id === id ? { ...l, qty: l.qty + qty } : l
        );
      }
      return [...prev, { id, qty }];
    });
  };

  const removeItem = (id: number) =>
    setLines((prev) => prev.filter((l) => l.id !== id));

  const setQty = (id: number, qty: number) =>
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l))
    );

  const clear = () => setLines([]);

  const detailed = useMemo(
    () =>
      lines
        .map((l) => {
          const product = products.find((p) => p.id === l.id);
          if (!product) return null;
          return {
            product,
            qty: l.qty,
            lineTotal: Math.round(product.price * l.qty * 100) / 100,
          };
        })
        .filter(Boolean) as {
        product: Product;
        qty: number;
        lineTotal: number;
      }[],
    [lines]
  );

  const count = useMemo(
    () => lines.reduce((n, l) => n + l.qty, 0),
    [lines]
  );

  const subtotal = useMemo(
    () => Math.round(detailed.reduce((s, d) => s + d.lineTotal, 0) * 100) / 100,
    [detailed]
  );

  const value: CartContextValue = {
    lines,
    addItem,
    removeItem,
    setQty,
    clear,
    count,
    subtotal,
    detailed,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
