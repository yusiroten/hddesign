"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang' },
  { href: '#services', label: 'Layanan' },
  { href: '#gallery', label: 'Galeri' },
  { href: '#contact', label: 'Kontak' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
             <Button asChild>
                <a href="#contact">Hubungi Kami</a>
            </Button>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <Button asChild>
                <a href="#contact" onClick={handleLinkClick}>Hubungi Kami</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
