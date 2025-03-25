
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

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

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="text-white gap-2 rounded-full hover:bg-white/10"
          >
            <LogIn size={16} />
            <span className="hidden sm:inline">Sign In</span>
          </Button>

          <Button
            size="sm"
            className="bg-space-blue hover:bg-space-blue/90 text-white gap-2 rounded-full px-4 transition-all"
          >
            <UserPlus size={16} />
            <span className="hidden sm:inline">Register</span>
          </Button>
        </div>
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
