'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

const NavLink = ({
  href,
  label,
  activeSection,
  isMobile = false,
}: {
  href: string;
  label: string;
  activeSection: string;
  isMobile?: boolean;
}) => {
  const linkContent = (
    <span
      className={cn(
        'text-base font-medium transition-colors hover:text-primary',
        activeSection === href.substring(1)
          ? 'text-primary'
          : 'text-muted-foreground',
        isMobile && 'text-lg'
      )}
    >
      {label}
    </span>
  );

  if (isMobile) {
    return (
      <SheetClose asChild>
        <Link href={href} passHref>
          {linkContent}
        </Link>
      </SheetClose>
    );
  }

  return (
    <Link href={href} passHref>
      {linkContent}
    </Link>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      let currentSection = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    <nav className={cn(
      "flex items-center gap-6",
      isMobile && "flex-col items-start gap-4"
    )}>
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          label={item.label}
          activeSection={activeSection}
          isMobile={isMobile}
        />
      ))}
    </nav>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold font-headline">PixelKliQ</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Button asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
               <SheetHeader className="p-6 pb-0">
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                </SheetHeader>
              <div className="p-6 h-full flex flex-col">
                <Link href="#home" className="flex items-center gap-2 mb-8">
                  <Zap className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold font-headline">PixelKliQ</span>
                </Link>
                <NavLinks isMobile />
                <Button asChild className="mt-auto">
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
