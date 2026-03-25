import { motion } from "motion/react";
import { Link } from "react-router";

export function Logo() {
  return (
    <Link to="/" className="block">
      <motion.div 
        className="relative flex items-center justify-center w-12 h-12 bg-[#432A18] text-[#F4EFE6] rounded-[1.25rem] overflow-hidden group cursor-pointer shadow-lg shadow-[#432A18]/5"
        whileHover={{ 
          scale: 1.05,
          borderRadius: "1.5rem",
          backgroundColor: "#2A180E"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <span className="font-serif text-xl font-semibold tracking-tighter select-none">NA</span>
        <motion.div 
          className="absolute inset-0 bg-[#F4EFE6]/5 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </Link>
  );
}
