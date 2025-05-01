import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import AuthModals from "@/components/AuthModals";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function for smooth scrolling
  const handleScrollToSection = (id) => {
    if (id === "hero") {
      window.scrollTo({
        top: 0, // Ensures it scrolls to the very top
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50, // Adjust based on navbar height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10",
        scrolled ? "bg-black/30 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Add logo or branding if needed */}
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink onClick={() => handleScrollToSection("hero")}>Home</NavLink>
          <NavLink onClick={() => handleScrollToSection("results")}>Results</NavLink>
          <NavLink onClick={() => handleScrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => handleScrollToSection("contact")}>Contact</NavLink>
        </div>

        <AuthModals />
      </div>
    </nav>
  );
};

const NavLink = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium transition-colors hover:text-white text-white/70"
    >
      {children}
    </button>
  );
};

export default Navbar;
