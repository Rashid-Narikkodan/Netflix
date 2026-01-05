import { NavLink } from "react-router-dom";
import Netflix from "../../assets/icons/netflix.svg";

const ProtectedHeader = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-linear-to-b from-black/80 to-transparent">
      <div className="mx-auto flex h-16 max-w-450 items-center justify-between px-10">
        
        {/* Left Section */}
        <div className="flex items-center gap-10">
          <img
            src={Netflix}
            alt="Netflix"
            className="h-7 w-auto cursor-pointer"
          />

          <nav className="hidden md:flex items-center gap-5 text-sm text-zinc-300">
            {[
              "Home",
              "TV Shows",
              "Movies",
              "Games",
              "New & Popular",
              "My List",
              "Browse by Languages",
            ].map((item) => (
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

        {/* Right Section */}
        <div className="flex items-center gap-5 text-zinc-300">
          <button className="hover:text-white transition">
            🔍
          </button>

          <span className="hidden sm:block text-sm">Children</span>

          <button className="hover:text-white transition">
            🔔
          </button>

          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-sm font-semibold text-white">
            R
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProtectedHeader;
