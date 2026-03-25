import { Link } from "react-router";
import { Mail, Linkedin, Github } from "lucide-react";
import { Logo } from "./Logo";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 z-50 w-full bg-[#F4EFE6]/80 backdrop-blur-xl border-b border-[#432A18]/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-sm font-medium text-[#432A18]/60 hover:text-[#432A18] transition-colors">
            Work
          </a>
          <a href="#about" className="text-sm font-medium text-[#432A18]/60 hover:text-[#432A18] transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-[#432A18]/60 hover:text-[#432A18] transition-colors">
            Contact
          </a>
          <div className="flex items-center gap-4 ml-4 pl-8 border-l border-[#432A18]/10">
            <motion.a 
              href="mailto:hello@alexmorgan.design" 
              className="p-2 hover:bg-[#432A18]/5 rounded-full transition-colors text-[#432A18]/60 hover:text-[#432A18]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#432A18]/5 rounded-full transition-colors text-[#432A18]/60 hover:text-[#432A18]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
