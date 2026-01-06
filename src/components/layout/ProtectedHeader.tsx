import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, Bell } from "lucide-react";
import Netflix from "../../assets/icons/netflix.svg";
import { useWatch } from "../../context/watchContext";

const ProtectedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { watchingMovieId } = useWatch();
  if (watchingMovieId) return null;

  const navItems = [
    "Home",
    "TV Shows",
    "Movies",
    "Games",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-linear-to-b from-black/90 to-transparent">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left */}
        <div className="flex items-center gap-4 md:gap-10">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <img
            src={Netflix}
            alt="Netflix"
            className="h-7 w-auto cursor-pointer"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm text-zinc-300">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to="#"
                className="hover:text-white transition"
              >
                {item}
              </NavLink>
            ))}
          </nav>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5 text-zinc-300">
          <button className="hover:text-white transition">
            <Search size={20} />
          </button>

          <span className="hidden sm:block text-sm">Children</span>

          <button className="hover:text-white transition">
            <Bell size={20} />
          </button>

          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-sm font-semibold text-white">
            R
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/95 text-zinc-300 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <img src={Netflix} alt="Netflix" className="h-7 w-auto" />
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to="#"
                  className="block hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default ProtectedHeader;
