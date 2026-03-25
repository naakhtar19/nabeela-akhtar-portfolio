import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CaseStudyData } from "../data/caseStudies";
import { motion } from "motion/react";

interface CaseStudyCardProps {
  caseStudy: CaseStudyData;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        stiffness: 50, 
        damping: 15,
        delay: index * 0.05
      }}
      className="h-full group"
    >
      <Link 
        to={`/case-study/${caseStudy.id}`}
        className="block relative overflow-hidden rounded-[2rem] bg-[#FDFBF7] border border-[#432A18]/5 h-full flex flex-col group/card transition-all duration-500 hover:shadow-2xl hover:shadow-[#432A18]/[0.05] hover:border-[#432A18]/10"
      >
        {/* Color Background Area for Image */}
        <div 
          className="relative overflow-hidden flex items-center justify-center p-8 transition-colors duration-500"
          style={{ 
            backgroundColor: caseStudy.bgSecondary,
            aspectRatio: '16/10'
          }}
        >
          <motion.img 
            src={caseStudy.imageUrl} 
            alt={caseStudy.title}
            className="w-full h-full object-cover rounded-2xl shadow-xl shadow-[#432A18]/5 transition-transform duration-700 ease-out group-hover/card:scale-[1.03]"
            whileHover={{ scale: 1.03 }}
          />
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/[0.02] transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <span 
              className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full"
              style={{ color: caseStudy.accentColor, backgroundColor: `${caseStudy.accentColor}15` }}
            >
              {caseStudy.category}
            </span>
            <div className="p-2 rounded-full border border-[#432A18]/10 group-hover/card:bg-[#432A18] group-hover/card:text-[#F4EFE6] transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif font-medium mb-3 leading-tight tracking-tight text-[#2A180E] group-hover/card:translate-x-1 transition-transform duration-300">
            {caseStudy.title}
          </h3>
          
          <p className="text-sm md:text-base text-[#432A18]/60 leading-relaxed font-light line-clamp-2">
            {caseStudy.summary}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
