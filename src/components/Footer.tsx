import { Facebook, Twitter, Instagram, Linkedin, Tiktok } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <div className="text-lg font-semibold">
                Target Hotel Marketing
              </div>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left" dir="rtl">
              شريكك في النجاح الفندقي
            </p>
            <p className="text-xs text-gray-400 text-center md:text-left">
              Your Partner in Hotel Success
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-center">
              <Link 
                to="/"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                to="/services"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/testimonials"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Testimonials
              </Link>
              <Link 
                to="/contact"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold mb-4 text-lg" dir="rtl">
              تابعنا
            </h3>
            <p className="text-sm text-gray-400 mb-4">Follow Us</p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61553856831033" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/*
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              */}
              <a 
                href="https://www.instagram.com/target_hotel_marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/*
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              */}
              <a 
                href="https://www.tiktok.com/@target.hotel.marketing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Tiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Target Hotel Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
