"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-2"
          : "bg-white/80 py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="OrionChain Logo"
            width={60}
            height={60}
            className="transition-transform duration-300 hover:scale-105"
          />
          <span className="ml-2 text-2xl font-bold text-purple-600 hidden md:block">
            OrionChain
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-medium text-purple-700 hover:text-purple-950 transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 px-6 py-2 font-medium rounded-full"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6 text-purple-700" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white/95 backdrop-blur-md">
            <div className="flex flex-col h-full pt-6">
              <div className="mb-8 flex items-center">
                <Image
                  src="/logo.png"
                  alt="OrionChain Logo"
                  width={50}
                  height={50}
                />
                <span className="ml-2 text-xl font-bold text-purple-600">
                  OrionChain
                </span>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl font-medium text-purple-700 hover:text-purple-950 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto mb-8">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 py-6 rounded-full"
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
