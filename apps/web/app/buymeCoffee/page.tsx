import React from "react";

const BuyMeCoffee: React.FC = () => {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800 font-sans p-4">
      <h1 className="text-4xl font-bold mb-3">Buy Me a Coffee ☕</h1>
      <p className="text-lg mb-8 text-gray-600 text-center max-w-md">
        If you like my work and want to support me, consider buying me a coffee.
        Your support keeps me coding late into the night! 💻
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center w-full max-w-sm">
        <a
          href={process.env.NEXT_PUBLIC_BUYMEACOFEE}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
        >
          Buy Me a Coffee
        </a>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ajay | Made with ❤️ and ☕
      </footer>
    </div>
  );
};

export default BuyMeCoffee;
