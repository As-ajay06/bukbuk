import React from "react";

const CurrentlyBuilding: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen text-gray-100 text-center px-4 overflow-hidden">
            {/* Background image (e.g., construction site) */}

            {/* Secondary illustration image */}

            {/* Tertiary image from Nativ Ibiza link */}
            <img
                src="https://nativibiza.com/wp-content/uploads/2022/07/Destacada_NFT.jpg"
                alt="NFT illustration from Nativ Ibiza"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    🚧 Currently Building 🚧
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                    We’re working hard to bring this page to life. Check back soon!
                </p>
                <br />
                <a
                    href="https://www.buymeacoffee.com/yourusername" // ← replace with your link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    {/* Coffee emoji or an icon */}
                    <span role="img" aria-label="coffee">☕</span>
                    Can You Buy Me a Coffee
                </a>
            </div>
        </div>
    );
};
export default CurrentlyBuilding;
