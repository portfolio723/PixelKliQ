import { Code, Heart } from 'lucide-react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <a href="#home" className="font-headline text-2xl font-bold">PixelKliQ HQ</a>
            <p className="text-muted-foreground mt-2">Digital Solutions for a Modern World.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                  <li key={item.label}>
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.label}
                      </a>
                  </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></a>
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></a>
                <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-6 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} PixelKliQ HQ. All Rights Reserved.</p>
            <p className="flex items-center justify-center gap-1 mt-2">
                Coded with <Heart className="w-4 h-4 text-red-500" /> by a human.
            </p>
        </div>
      </div>
    </footer>
  );
}
