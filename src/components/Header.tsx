"use client";

import { useState } from "react";
import { Building2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#propiedades", label: "Propiedades" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
            <Building2 className="h-8 w-8 text-primary" />
            <span className="ml-3 text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
              La Casa de la Construcción
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="p-4">
                  <a href="/" className="flex items-center mb-8" onClick={() => setIsMenuOpen(false)}>
                    <Building2 className="h-8 w-8 text-primary" />
                    <span className="ml-3 text-xl font-bold text-gray-800">
                      La Casa de la Construcción
                    </span>
                  </a>
                  <nav className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl font-medium text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};