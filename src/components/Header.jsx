import { useState, useEffect } from "react";
import { Menu, X, BookOpen, User, Crown } from "lucide-react";

export default function Header({ currentPage = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Topics", href: "/topics", key: "topics" },
    { name: "Practice", href: "/practice", key: "practice" },
    { name: "Learning", href: "/learning", key: "learning" },
    { name: "Pricing", href: "/pricing", key: "pricing" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white dark:bg-[#1E1E1E] border-b border-[#E9E9E9] dark:border-[#333333] transition-shadow duration-150 ease-out ${
        isScrolled
          ? "shadow-[0_2px_6px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          : ""
      }`}
      style={{
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div className="px-6 sm:px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Brand area - Left */}
          <div className="flex items-center gap-3 sm:gap-2">
            {/* Logo */}
            <div
              className="w-10 h-10 sm:w-8 sm:h-8 rounded-full flex items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                boxShadow: "0 0 20px rgba(102, 126, 234, 0.25)",
              }}
              aria-label="DSA Master logo"
            >
              <BookOpen className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
            </div>

            {/* Name */}
            <h1 className="text-lg sm:text-base font-bold text-black dark:text-white">
              DSA Master
            </h1>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 ease-out ${
                  currentPage === item.key
                    ? "bg-white dark:bg-[#262626] bg-opacity-70 dark:bg-opacity-100 text-black dark:text-white px-[14px] py-[6px] rounded-full border border-[#E5E5E5] dark:border-[#404040]"
                    : "text-[#6E6E6E] dark:text-[#A0A0A0] hover:text-[#2B2B2B] dark:hover:text-[#E0E0E0] active:text-[#000000] dark:active:text-[#FFFFFF]"
                }`}
                style={{ letterSpacing: "0.25px" }}
                aria-current={currentPage === item.key ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side - User and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Premium Badge */}
            <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
              <Crown className="w-3 h-3" />
              Premium
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#6E6E6E] dark:text-[#A0A0A0] hover:text-[#2B2B2B] dark:hover:text-[#E0E0E0] active:text-[#000000] dark:active:text-[#FFFFFF] transition-colors duration-150 active:scale-[0.95]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* User Profile */}
            <button className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-200">
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1E1E1E] border-t border-[#E9E9E9] dark:border-[#333333] py-4">
          <nav className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-150 ease-out ${
                  currentPage === item.key
                    ? "bg-white dark:bg-[#262626] bg-opacity-70 dark:bg-opacity-100 text-black dark:text-white px-[14px] py-[6px] rounded-full border border-[#E5E5E5] dark:border-[#404040] self-start"
                    : "text-[#6E6E6E] dark:text-[#A0A0A0] hover:text-[#2B2B2B] dark:hover:text-[#E0E0E0] active:text-[#000000] dark:active:text-[#FFFFFF]"
                }`}
                style={{ letterSpacing: "0.25px" }}
                aria-current={currentPage === item.key ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Premium Badge */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold self-start mt-2">
              <Crown className="w-3 h-3" />
              Premium Account
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}