import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto px-4 py-28 text-center">
      <p className="font-black text-7xl text-[#fde68a] mb-2">404</p>
      <h1 className="text-3xl font-black text-[#1a173b] mb-4">
        This page drifted off to sleep.
      </h1>
      <p className="font-sans text-[#4b476d] mb-8">
        The page you're looking for can't be found.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#1a173b] text-[#fdfbf7] font-sans font-bold uppercase text-sm px-8 py-3.5 shadow-[4px_4px_0_rgba(253,230,138,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
      >
        Back Home
      </button>
    </div>
  );
}
