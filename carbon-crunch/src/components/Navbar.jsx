import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingUp(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 right-0 w-auto bg-white shadow-md transition-transform duration-300 z-50 p-2 px-6 rounded-bl-lg",
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-green-500" onClick={() => handleScrollToSection("about-us")}>
          About Us
        </a>
        <a href="#" className="hover:text-green-500" onClick={() => handleScrollToSection("services")}>
          Services
        </a>
        <a href="#" className="hover:text-green-500">Blog</a>
        <a href="#" className="hover:text-green-500">Contact</a>
        <a href="#" className="bg-green-100 text-green-500 px-3 py-1 rounded-md hover:bg-green-200">Login</a>
        <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Book Demo</a>
      </div>
    </nav>
  );
};

export default Navbar;
