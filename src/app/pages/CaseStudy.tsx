import { useParams, Link } from "react-router";
import { useState } from "react";
import { Header } from "../components/Header";
import { caseStudies } from "../data/caseStudies";
import { ArrowLeft, ArrowUpRight, ArrowRight, Target, Users } from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";

const DatsCaseStudy = ({ caseStudy }: { caseStudy: any }) => {
  const accentColor = caseStudy.accentColor || "#F56600";
  const [hoveredLegend, setHoveredLegend] = useState<string | null>(null);
  
  const getNodeClasses = (types: string[]) => {
    const base = "transition-all duration-500 ease-in-out z-10";
    if (!hoveredLegend) return `${base} opacity-100`;
    if (types.includes(hoveredLegend)) return `${base} opacity-100 scale-110 shadow-xl z-30 ring-2 ring-offset-2 ring-black/20`;
    return `${base} opacity-30 grayscale-[50%]`;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    customPaging: (i: number) => (
      <div className="w-2 h-2 mx-1 mt-4 rounded-full bg-black/10 hover:bg-black/30 transition-colors" style={{ backgroundColor: i === 0 ? accentColor : undefined }}></div>
    ),
  };
  
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#432A18]">
      <Header />
      
      <motion.div 
        className="container mx-auto px-6 py-12 max-w-5xl" 
        style={{ paddingTop: '10rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#432A18]/40 hover:text-[#432A18] transition-colors mb-16 group font-medium uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Selection
        </Link>
        
        {/* HERO */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span 
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full"
              style={{ color: accentColor, backgroundColor: `${accentColor}15` }}
            >
              UX / Systems Design
            </span>
            <span className="text-[#432A18]/20 font-serif italic text-sm">Clemson University · 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-10 leading-[1.1] tracking-tight">
            Redesigning the <span style={{ color: accentColor }}>University Purchasing</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-[#432A18]/60 leading-relaxed font-light max-w-3xl">
            A four-phase product design process — grounded in semi-structured stakeholder interviews, importance surveys, and Ulrich & Eppinger's needs methodology — to replace a fragmented, email-based procurement workflow with an integrated digital system.
          </p>
        </div>
        
        {/* METADATA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-y border-[#432A18]/5 py-12">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#432A18]/30 mb-4">Project</div>
            <div className="font-serif text-xl">DATS Request System</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#432A18]/30 mb-4">Role</div>
            <div className="font-serif text-xl">UX Research & Design</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#432A18]/30 mb-4">Timeline</div>
            <div className="font-serif text-xl">Jan – Apr 2024</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#432A18]/30 mb-4">Tools</div>
            <div className="font-serif text-xl">Axure RP, Miro</div>
          </div>
        </div>

        {/* STAT BAR (Bento Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          <div className="bg-[#FDFBF7] p-8 rounded-[2rem] border border-[#432A18]/5 shadow-sm hover:shadow-xl hover:shadow-[#432A18]/5 hover:border-[#432A18]/10 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-serif mb-2" style={{ color: accentColor }}>96.2%</div>
            <div className="text-sm text-[#432A18]/60 leading-relaxed">Perfect usability score rate (PSSUQ)</div>
          </div>
          <div className="bg-[#FDFBF7] p-8 rounded-[2rem] border border-[#432A18]/5 shadow-sm hover:shadow-xl hover:shadow-[#432A18]/5 hover:border-[#432A18]/10 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-serif mb-2" style={{ color: accentColor }}>6.68<span className="text-2xl text-[#432A18]/30">/7</span></div>
            <div className="text-sm text-black/60 leading-relaxed">Average PSSUQ score across all categories</div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-black/10 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-serif mb-2" style={{ color: accentColor }}>53%</div>
            <div className="text-sm text-black/60 leading-relaxed">Reduction in average form-completion time</div>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-black/10 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-serif mb-2" style={{ color: accentColor }}>17<span className="text-2xl text-black/30">/18</span></div>
            <div className="text-sm text-black/60 leading-relaxed">Needs scored ≥ 4/5 in stakeholder survey</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-32 mb-32">
          {/* OVERVIEW */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">01 — Overview</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#2A180E]">The Problem: A Broken Procurement Loop</h3>
            <div className="text-xl text-[#432A18]/70 leading-relaxed font-light space-y-6">
              <p>Clemson University's asset purchasing ran entirely through email. A single purchase could require 5–8 back-and-forth communications before an order was even placed — with no structured form, no status visibility, and no compliance tracking. Once items arrived, staff manually entered every detail into DATS, creating error-prone inventory records.</p>
              <p>The system was accessible only to a handful of staff, leaving faculty, students, and PhD employees completely dependent on personal follow-ups. In stakeholder interviews, over 60% of users reported dissatisfaction with the overall experience. The mission: design a DATS-compatible interface that navigates the full lifecycle of a purchase request — from initiation to delivery — while automating invoice inputs and reducing workload by 80%.</p>
            </div>

            {/* Phases Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { num: "Phase I", title: "Customer & User Needs", desc: "Semi-structured interviews, surveys, needs mapping" },
                { num: "Phase II", title: "Project Specifications", desc: "Competitive benchmarking, metric setting, value definitions" },
                { num: "Phase III", title: "Conceptual Design", desc: "31 sub-concepts across 8 categories, screening matrices" },
                { num: "Phase IV", title: "Design & Testing", desc: "Prototype, HTA analysis, usability testing, PSSUQ", active: true }
              ].map((phase, i) => (
                <div key={i} className={`p-6 rounded-3xl border transition-all duration-500 ${phase.active ? 'bg-[#432A18] text-[#F4EFE6] border-transparent shadow-xl' : 'bg-[#FDFBF7] border-[#432A18]/5 hover:border-[#432A18]/10'}`}>
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${phase.active ? 'text-[#F4EFE6]/50' : 'text-[#432A18]/30'}`}>{phase.num}</div>
                  <h4 className={`font-serif text-lg mb-2 ${phase.active ? 'text-[#F4EFE6]' : 'text-[#2A180E]'}`}>{phase.title}</h4>
                  <p className={`text-sm leading-relaxed ${phase.active ? 'text-[#F4EFE6]/60' : 'text-[#432A18]/60 font-light'}`}>{phase.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROBLEM SPACE */}
          <section className="p-12 md:p-16 rounded-[2.5rem]" style={{ backgroundColor: `${accentColor}08` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-[#432A18]/30">02 — Problem Space</h2>
            <h3 className="text-3xl font-serif mb-6 text-[#2A180E]">Four Core Friction Points</h3>
            <p className="text-lg text-[#432A18]/70 leading-relaxed font-light mb-12">
              Semi-structured interviews across four stakeholder groups revealed consistent, compounding pain points. Each role experienced the system differently, but every group identified the same root failures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { icon: "📧", title: "Email-Dependent Requests", desc: "All requests submitted via unstructured email. Required 5–8 rounds of communication to validate details before ordering." },
                { icon: "🔍", title: "No System-Level Transparency", desc: "Status tracking was person-to-person, not system-to-user. Users had no way to check request status without emailing." },
                { icon: "📋", title: "Fully Manual Data Entry", desc: "Every invoice manually entered into DATS after arrival. Staff maintained private spreadsheets for details DATS couldn't capture." },
                { icon: "🏛️", title: "Ownership & Compliance Gaps", desc: "DATS had no mechanism for state-mandated equipment decommissioning. Computers were given away undocumented." }
              ].map((prob, i) => (
                <div key={i} className="bg-[#FDFBF7] p-8 rounded-3xl shadow-sm border border-[#432A18]/5 hover:shadow-xl hover:shadow-[#432A18]/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-[#432A18]/5 flex items-center justify-center text-xl mb-6">{prob.icon}</div>
                  <h4 className="text-lg font-serif font-medium mb-3 text-[#2A180E]">{prob.title}</h4>
                  <p className="text-[#432A18]/60 text-sm leading-relaxed font-light">{prob.desc}</p>
                </div>
              ))}
            </div>

            {/* STAKEHOLDERS WITH SPEECH BUBBLES */}
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-black/40 flex items-center gap-3">
                <Users className="w-4 h-4" /> Interviewed Stakeholders
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {[
                  { icon: "👩‍🏫", name: "Participant 2", role: "Faculty Member", desc: "Emails the financial section and Martin directly. Navigates multi-department approvals (e.g. CECAS CCIT) with no system guidance." },
                  { icon: "🖥️", name: "Participant 3", role: "Director of CECAS", desc: "Manages DATS for all hardware. Tracks two inventory tiers ($500–5K and $5K+). Responsible for state-mandated equipment decommissioning." },
                  { icon: "🛠️", name: "Participant 1", role: "IT Services Specialist III", desc: "Uses DATS for maintenance and tracking. Maintains a private spreadsheet for details the system can't display. Frustrated by Cherwell response delays." },
                  { icon: "🎓", name: "Participant 4", role: "PhD Employee", desc: "Went back and forth ~5–6 times on a single request. Found the process time-consuming and frustrating. Valued Martin's model recommendations." }
                ].map((p, i) => (
                  <div key={i} className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col">
                    <div className="text-3xl mb-4">{p.icon}</div>
                    <div className="font-serif font-medium text-lg mb-1 text-black/90">{p.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>{p.role}</div>
                    <div className="text-sm text-black/60 leading-relaxed font-light mt-auto">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CURRENT STATE */}
          <section className="border-t border-black/5 pt-24 mt-24">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">02.5 — Current State</h2>
            <h3 className="text-3xl font-serif mb-6 text-black/90">The Old Workflow — Visualized</h3>
            <p className="text-lg text-black/70 leading-relaxed font-light mb-12">
              The existing purchasing lifecycle had two critical "focal points" where manual work and communication delays accumulated.
            </p>

            <div className="bg-white border border-black/5 rounded-3xl p-6 md:p-8 shadow-sm w-full relative overflow-x-auto lg:overflow-visible">
              <div className="min-w-[700px] lg:min-w-0 flex flex-col gap-6 w-full">
                
                {/* Department Row */}
                <div className="relative flex items-center min-h-[90px]">
                  <div className="absolute left-0 -ml-4 md:-ml-6 top-0 bottom-0 w-8 flex items-center justify-center border-r border-black/10">
                    <span className="transform -rotate-90 text-[9px] uppercase tracking-widest text-black/40 whitespace-nowrap origin-center">Department</span>
                  </div>
                  <div className="w-full pl-6 md:pl-10 flex relative">
                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-orange-100/80 border border-orange-200/60 text-orange-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['department'])}`}>User submits<br/>purchasing<br/>request</div>
                    </div>
                    <div className="w-1/5"></div>
                    <div className="w-1/5"></div>
                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-orange-100/80 border border-orange-200/60 text-orange-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['department'])}`}>User Receives<br/>Item</div>
                    </div>
                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-orange-100/80 border border-orange-200/60 text-orange-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['department'])}`}>User Receives<br/>Reimbursement</div>
                    </div>
                  </div>
                </div>

                {/* Shared Services Row */}
                <div className="relative flex items-center min-h-[90px] border-t border-black/10">
                  <div className="absolute left-0 -ml-4 md:-ml-6 top-0 bottom-0 w-8 flex items-center justify-center border-r border-black/10">
                    <span className="transform -rotate-90 text-[9px] uppercase tracking-widest text-black/40 whitespace-nowrap origin-center">Shared Services</span>
                  </div>
                  <div className="w-full pl-6 md:pl-10 flex relative">
                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-red-50 border-2 border-red-300 text-red-800 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['shared_services', 'bottleneck'])}`}>
                        ⚠ Purchasing<br/>request is<br/>reviewed
                        <span className="text-[9px] font-normal opacity-80 pt-1 block leading-tight">(5–8 emails)</span>
                      </div>
                      {/* Vertical Arrow from Dept */}
                      <div className="absolute bottom-full left-1/2 -ml-[1px] w-[2px] h-6 bg-black/20 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 border-t-2 border-l-2 border-black/30 transform rotate-45 -mt-[1px]"></div>
                        <span className="absolute -left-5 top-1/2 -translate-y-1/2 transform -rotate-90 text-[9px] font-bold text-red-600/80 whitespace-nowrap bg-white px-1 z-20">Focal Point</span>
                        <div className="absolute bottom-0 w-1.5 h-1.5 border-b-2 border-r-2 border-black/30 transform rotate-45 mb-0"></div>
                      </div>
                      {/* Horizontal Arrow to Next */}
                      <div className="absolute top-1/2 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[1px] bg-black/20 z-0">
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-black/30 transform rotate-45"></div>
                      </div>
                    </div>
                    
                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-green-50 border border-green-200/60 text-green-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['shared_services'])}`}>Purchase is<br/>submitted</div>
                    </div>

                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-green-50 border border-green-200/60 text-green-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['shared_services'])}`}>Items and<br/>Invoice are<br/>recieved</div>
                      {/* Horizontal Arrow to Next */}
                      <div className="absolute top-1/2 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[1px] bg-black/20 z-0">
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-black/30 transform rotate-45"></div>
                      </div>
                    </div>

                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-red-50 border-2 border-red-300 text-red-800 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['shared_services', 'bottleneck'])}`}>
                        ⚠ Invoice is<br/>entered into<br/>the system
                        <span className="text-[9px] font-normal opacity-80 pt-1 block leading-tight">(Manual DATS)</span>
                      </div>
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-red-600/80 whitespace-nowrap">Focal Point</span>
                      {/* Horizontal Arrow to Next */}
                      <div className="absolute top-1/2 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[1px] bg-black/20 z-0">
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-black/30 transform rotate-45"></div>
                      </div>
                      {/* Vertical Arrow to Dept */}
                      <div className="absolute bottom-full left-1/2 -ml-[1px] w-[1px] h-6 bg-black/20 z-0">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-t-2 border-l-2 border-black/30 transform rotate-45 mt-0"></div>
                      </div>
                    </div>

                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-green-50 border border-green-200/60 text-green-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['shared_services'])}`}>System takes<br/>log of<br/>purchase and<br/>files<br/>documentation</div>
                      {/* Vertical Arrow to Dept */}
                      <div className="absolute bottom-full left-1/2 -ml-[1px] w-[1px] h-6 bg-black/20 z-0">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-t-2 border-l-2 border-black/30 transform rotate-45 mt-0"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manufacturer Row */}
                <div className="relative flex items-center min-h-[90px] border-t border-black/10">
                  <div className="absolute left-0 -ml-4 md:-ml-6 top-0 bottom-0 w-8 flex items-center justify-center border-r border-black/10">
                    <span className="transform -rotate-90 text-[9px] uppercase tracking-widest text-black/40 whitespace-nowrap origin-center">Manufacturer</span>
                  </div>
                  <div className="w-full pl-6 md:pl-10 flex relative">
                    <div className="w-1/5"></div>
                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-blue-100/80 border border-blue-200/60 text-blue-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['manufacturer'])}`}>Purchase is<br/>recieved</div>
                      {/* Vertical Arrow from Shared Services */}
                      <div className="absolute bottom-full left-1/2 -ml-[1px] w-[1px] h-6 bg-black/20 z-0">
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b-2 border-r-2 border-black/30 transform rotate-45 mb-0"></div>
                      </div>
                      {/* Horizontal Arrow to Next */}
                      <div className="absolute top-1/2 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[1px] bg-black/20 z-0">
                         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-black/30 transform rotate-45"></div>
                      </div>
                    </div>

                    <div className="w-1/5 flex justify-center relative">
                      <div className={`w-[120px] bg-blue-100/80 border border-blue-200/60 text-blue-900 rounded-lg p-2.5 text-center text-[11px] leading-snug font-medium shadow-sm ${getNodeClasses(['manufacturer'])}`}>Items are<br/>sent</div>
                      {/* Vertical Arrow to Shared Services */}
                      <div className="absolute bottom-full left-1/2 -ml-[1px] w-[1px] h-6 bg-black/20 z-0">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-t-2 border-l-2 border-black/30 transform rotate-45 mt-0"></div>
                      </div>
                    </div>
                    
                    <div className="w-1/5"></div>
                    <div className="w-1/5"></div>
                  </div>
                </div>

              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-white shadow-sm rounded-full py-1.5 px-3 md:px-4 mx-auto w-fit border border-black/10">
                <div 
                  className={`flex items-center gap-1.5 cursor-pointer px-2 py-1 -my-1 rounded-md transition-all duration-300 ${hoveredLegend === 'department' ? 'bg-black/5 scale-105' : 'hover:bg-black/5'}`}
                  onMouseEnter={() => setHoveredLegend('department')}
                  onMouseLeave={() => setHoveredLegend(null)}
                >
                  <div className="w-2.5 h-2.5 rounded-sm bg-orange-100 border border-orange-200/60 shadow-sm shrink-0"></div>
                  <span className="text-[8px] text-black/80 font-bold uppercase tracking-wider whitespace-nowrap">Department</span>
                </div>
                <div 
                  className={`flex items-center gap-1.5 cursor-pointer px-2 py-1 -my-1 rounded-md transition-all duration-300 ${hoveredLegend === 'shared_services' ? 'bg-black/5 scale-105' : 'hover:bg-black/5'}`}
                  onMouseEnter={() => setHoveredLegend('shared_services')}
                  onMouseLeave={() => setHoveredLegend(null)}
                >
                  <div className="w-2.5 h-2.5 rounded-sm bg-green-50 border border-green-200/60 shadow-sm shrink-0"></div>
                  <span className="text-[8px] text-black/80 font-bold uppercase tracking-wider whitespace-nowrap">Shared Services</span>
                </div>
                <div 
                  className={`flex items-center gap-1.5 cursor-pointer px-2 py-1 -my-1 rounded-md transition-all duration-300 ${hoveredLegend === 'manufacturer' ? 'bg-black/5 scale-105' : 'hover:bg-black/5'}`}
                  onMouseEnter={() => setHoveredLegend('manufacturer')}
                  onMouseLeave={() => setHoveredLegend(null)}
                >
                  <div className="w-2.5 h-2.5 rounded-sm bg-blue-100/80 border border-blue-200/60 shadow-sm shrink-0"></div>
                  <span className="text-[8px] text-black/80 font-bold uppercase tracking-wider whitespace-nowrap">Manufacturer</span>
                </div>
                <div 
                  className={`flex items-center gap-1.5 cursor-pointer px-2 py-1 -my-1 rounded-md transition-all duration-300 ${hoveredLegend === 'bottleneck' ? 'bg-red-50 scale-105' : 'hover:bg-red-50'}`}
                  onMouseEnter={() => setHoveredLegend('bottleneck')}
                  onMouseLeave={() => setHoveredLegend(null)}
                >
                  <div className="w-2.5 h-2.5 rounded-sm bg-red-50 border border-red-300 shadow-sm flex items-center justify-center text-[6px] text-red-800 shrink-0">⚠</div>
                  <span className="text-[8px] text-red-700 font-bold uppercase tracking-wider whitespace-nowrap">Bottlenecks</span>
                </div>
              </div>
              <p className="text-center text-[10px] text-black/40 italic mt-6 font-medium">DATS overarching process flow</p>
            </div>
          </section>

          {/* RESEARCH & NEEDS */}
          <section className="border-t border-black/5 pt-24 mt-24">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">03 — Research</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-black/90">Listening Before Designing</h3>
            <div className="space-y-6 mb-16 max-w-4xl">
              <p className="text-xl text-black/70 leading-relaxed font-light">
                Semi-structured interviews were the deliberate choice here — because the system was poorly understood even by many of its own users. Faculty and students often thought DATS handled everything; staff restricted answers to DATS's narrow existing scope. A rigid script would have missed both. Adaptive probing uncovered the real picture.
              </p>
              <p className="text-xl text-black/70 leading-relaxed font-light">After interviews, an importance survey ranked 18 identified needs on a 1–5 scale using Ulrich & Eppinger's technique.              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div className="relative">
                <style>
                  {`
                    .slick-slider { position: relative; display: block; box-sizing: border-box; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; -khtml-user-select: none; -ms-touch-action: pan-y; touch-action: pan-y; -webkit-tap-highlight-color: transparent; }
                    .slick-list { position: relative; display: block; overflow: hidden; margin: 0; padding: 0; }
                    .slick-list:focus { outline: none; }
                    .slick-list.dragging { cursor: pointer; cursor: hand; }
                    .slick-slider .slick-track, .slick-slider .slick-list { -webkit-transform: translate3d(0, 0, 0); -moz-transform: translate3d(0, 0, 0); -ms-transform: translate3d(0, 0, 0); -o-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
                    .slick-track { position: relative; top: 0; left: 0; display: block; margin-left: auto; margin-right: auto; }
                    .slick-track:before, .slick-track:after { display: table; content: ''; }
                    .slick-track:after { clear: both; }
                    .slick-loading .slick-track { visibility: hidden; }
                    .slick-slide { display: none; float: left; height: 100%; min-height: 1px; }
                    [dir='rtl'] .slick-slide { float: right; }
                    .slick-slide img { display: block; }
                    .slick-slide.slick-loading img { display: none; }
                    .slick-slide.dragging img { pointer-events: none; }
                    .slick-initialized .slick-slide { display: block; }
                    .slick-loading .slick-slide { visibility: hidden; }
                    .slick-vertical .slick-slide { display: block; height: auto; border: 1px solid transparent; }
                    .slick-arrow.slick-hidden { display: none; }
                    
                    .slick-dots { position: absolute; bottom: -30px; display: flex !important; justify-content: center; width: 100%; padding: 0; margin: 0; list-style: none; }
                    .slick-dots li { position: relative; display: inline-block; margin: 0 4px; padding: 0; cursor: pointer; width: auto; height: auto; }
                    .slick-dots li.slick-active div { background-color: ${accentColor} !important; transform: scale(1.2); }
                  `}
                </style>
                <Slider {...sliderSettings}>
                  {[
                    { quote: "There is a lot of complication about who needs what approval to see if it can even be purchased.", author: "Participant 2, Faculty Member · Freeman Hall" },
                    { quote: "We have a number of computers in our inventory that are no longer with us, and we have probably no idea where they went. It slips through the cracks.", author: "Participant 3, Director of CECAS" },
                    { quote: "I have my own spreadsheet with more details — warranty, device name, type of equipment. The current interface can't display things in a very organized way.", author: "Participant 1, IT Services Specialist III" }
                  ].map((q, i) => (
                    <div key={i} className="pb-8 pt-2 px-1">
                      <div className="relative group bg-white p-6 rounded-2xl border border-black/5 hover:border-black/10 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-all duration-500 overflow-hidden cursor-grab active:cursor-grabbing">
                        <div className="flex gap-4">
                          {/* Quote accent bar */}
                          <div 
                            className="w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: `${accentColor}30` }}
                          />
                          <div className="flex-1 min-w-0">
                            <blockquote className="text-lg leading-relaxed font-light text-black/80 italic mb-4">
                              {`"${q.quote}"`}
                            </blockquote>
                            <cite className="text-[10px] font-bold uppercase tracking-[0.12em] not-italic text-black/50 block">
                              {q.author}
                            </cite>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* MIRO BOARD AFFINITY MAPPING DIAGRAM */}
            <div className="w-full relative group">
              <div 
                className="w-full max-w-4xl mx-auto bg-[#f4f5f5] rounded-[1.5rem] border border-black/10 overflow-hidden shadow-inner p-3 md:p-5 relative min-h-[200px]"
                style={{
                  backgroundImage: 'linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  backgroundPosition: 'center top'
                }}
              >
                {/* Header Pill */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="bg-[#2d2f33] text-white text-sm md:text-base font-bold py-2 px-6 md:px-8 rounded-full shadow-md text-center tracking-wide">
                    Hierarchical List of Needs
                  </div>
                </div>

                {/* Masonry Grid for Groups */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                  {[
                    {
                      title: "The system assists in finding specific equipment.",
                      color: "bg-[#fad2e1]",
                      notes: [
                        "The system provides some recommendations based on the need of customers within the same criteria.",
                        "The system provides detailed descriptive information about the equipment.",
                        "The system provides quotes and information on pricing and cost."
                      ]
                    },
                    {
                      title: "The system abides by Clemson University standard policy.",
                      color: "bg-[#aed9f8]",
                      notes: [
                        "The system provides easy access to relevant policies for any orders.",
                        "The system provides instructions and information of relevant policies.",
                        "The system follows unified set of rules across departments.",
                        "The system is backed by enforceable policies."
                      ]
                    },
                    {
                      title: "The system tells users what to submit for a request.",
                      color: "bg-[#d2b4de]",
                      notes: [
                        "The system allows the user to request the cost to be split between accounts.",
                        "The system provides a unified request form to place requests.",
                        "The system provides information on the approvals needed on each purchase.",
                        "The system provides a list of all the needed information."
                      ]
                    },
                    {
                      title: "The system works cross-department.",
                      color: "bg-[#a3e4d7]",
                      notes: [
                        "The system allows multi-level and multi-department inputs for orders.",
                        "The system facilitates communication among users and administrators."
                      ]
                    },
                    {
                      title: "The system streamlines data entry once equipment has arrived.",
                      color: "bg-[#f5b041]",
                      notes: [
                        "The system is capable of automatically parsing and interpreting email content to extract order related information."
                      ]
                    },
                    {
                      title: "The system is resilient and quick.",
                      color: "bg-[#a9cce3]",
                      notes: [
                        "The system provides an efficient data handling feature that encompasses storage and retrieval process.",
                        "The system handles multiple requests.",
                        "The system is able to handle bulk operations."
                      ]
                    },
                    {
                      title: "The system facilitates tracking and inventory of products.",
                      color: "bg-[#82e0aa]",
                      notes: [
                        "The system provides periodic updates about the status of the purchase request.",
                        "The system provides information on the location of registered equipment.",
                        "The system provides a unified record of inventory.",
                        "The system coordinates the delivery and moving of large items.",
                        "The system provides information about the progress.",
                        "The system provides documentation of equipment and devices that have been assigned.",
                        "The system facilitates tracking.",
                        "The system facilitates transfer of ownership for surplus equipment.",
                        "The system provides functionality to transfer ownership or assignment of equipment.",
                        "The system provides exclusive information on each equipment."
                      ]
                    },
                    {
                      title: "The system is convenient to use.",
                      color: "bg-[#f5b7b1]",
                      notes: [
                        "The system provides ease in information storing and retrieval.",
                        "The system allows status display for various equipment.",
                        "The system has an organized display.",
                        "The system is straightforward, fast, convenient, and easy to understand.",
                        "The system is fast and with as few steps as possible."
                      ]
                    },
                    {
                      title: "The system trains users in how to use it.",
                      color: "bg-[#fcf3cf]",
                      notes: [
                        "The system contains a training module / forum"
                      ]
                    },
                    {
                      title: "The system is trustworthy and reliable.",
                      color: "bg-[#f4d03f]",
                      notes: [
                        "The system is trustworthy and reliable."
                      ]
                    }
                  ].map((group, groupIdx) => (
                    <div key={groupIdx} className="break-inside-avoid bg-white/60 p-1.5 md:p-2 border border-black/5 shadow-sm mb-3 inline-block w-full">
                      <div className="bg-[#e4e5e6] border border-[#c4c4c4] w-full text-center py-1 px-1.5 mb-2 text-[7px] md:text-[8px] font-bold text-gray-800 shadow-sm leading-tight relative">
                        {group.title}
                      </div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {group.notes.map((note, noteIdx) => (
                          <div 
                            key={noteIdx} 
                            className={`w-12 h-12 md:w-[55px] md:h-[55px] p-0.5 md:p-1 text-[4px] md:text-[4.5px] font-medium leading-tight text-black/80 flex items-center justify-center text-center shadow-[1px_1px_2px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 hover:shadow-md hover:z-10 relative overflow-hidden ${group.color}`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
                            <span className="relative z-10">{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-xs text-black/40 italic mt-4 font-medium">Affinity Mapping & Need Synthesis</p>
            </div>

            <p className="text-center text-sm text-black/60 mt-16 mb-6 max-w-2xl mx-auto leading-relaxed">Derived directly from the affinity map above, these 10 categories cluster raw user quotes into prioritized system requirements. 17 of the 18 needs averaged 4/5 from the importance survey results.</p>

            <div className="w-full max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-5 md:p-6 rounded-3xl border border-black/5 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-1.5 text-black/90">10 Need Categories - Importance Survey Results</h4>
                <p className="text-[11px] text-black/50 mb-4 leading-relaxed">
                  Latent needs marked as ✦
                </p>
                <div className="space-y-0">
                  {[
                    { score: 5, text: "Policy & Standards — Abides by Clemson University standard policy" },
                    { score: 4, text: "Tracking & Inventory — Facilitates tracking of products and equipment" },
                    { score: 4, text: "Request Guidance — Tells users exactly what to submit for a request" },
                    { score: 4, text: "Equipment Discovery — Assists in finding specific equipment to purchase" },
                    { score: 4, text: "Data Entry Automation — Streamlines invoice data entry once equipment arrives" },
                    { score: 4, text: "Cross-Department Use — Multi-level and multi-department inputs for orders" },
                    { score: 4, text: "Communication ✦ — Facilitates entity-to-entity recommendations (latent)", highlight: true },
                    { score: 4, text: "Lending ✦ — Facilitates lending of current Clemson-owned inventory (latent)", highlight: true },
                    { score: 4, text: "Usability — Quick, resilient, and convenient to use" },
                    { score: 4, text: "Billing Flexibility — Allows billing split between multiple accounts" }
                  ].map((need, i) => (
                    <div key={i} className="flex items-center gap-3 py-1.5 border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors rounded-lg px-2 -mx-2">
                      <div className={`w-6 h-6 shrink-0 rounded-md flex items-center justify-center font-bold text-[10px] ${need.score === 5 || need.highlight ? 'bg-[#121212] text-white shadow-sm' : 'bg-black/5 text-black/60 border border-black/5'}`}>
                        {need.score}
                      </div>
                      <div className={`text-[11px] leading-tight ${need.highlight ? 'font-medium text-black/90' : 'font-light text-black/70'}`}>
                        {need.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[1.5rem] border border-black/5 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h4 className="font-bold text-black/90 mb-4 text-[20px]">Why Semi-Structured Interviews?</h4>
                  <p className="text-[13px] text-black/60 leading-relaxed font-light">
                    A key challenge: many stakeholders had limited or zero exposure to DATS and could barely recall the process. A rigid survey would have returned incomplete data. Semi-structured interviews allowed the team to probe, redirect, and extend into adjacent systems — extracting insights that a checklist would have buried.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black/90 mb-4 text-[20px]">Latent Needs Discovery</h4>
                  <p className="text-[13px] text-black/60 leading-relaxed font-light">
                    Any need marked as "unexpected or new" by 3+ survey respondents was labeled a latent need. Two emerged: facilitating inter-entity communication for advice, and enabling lending of Clemson-owned inventory. Neither was part of the original scope — both made it into the final design.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* QUOTE TO DESIGN IMPLICATION BRIDGE */}
          <section className="mt-24">
            <div className="max-w-3xl mb-16">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-orange-500">From Research to Design</h3>
              <h4 className="text-3xl font-serif text-black/90 mb-6">What They Said — What We Built</h4>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Every design decision in this system traces back to a specific user voice. By distilling our affinity mapping into 10 core need categories, we established a structured foundation to address stakeholder frustrations. These callouts show the direct line from raw interview quote to actionable design implication — demonstrating how research shaped each feature, not just informed it.
              </p>
            </div>
            <div className="flex flex-col gap-4 max-w-4xl mx-auto">
              {[
                {
                  quote: "I have my own spreadsheet with more details — warranty, device name, type of equipment. The current interface can't display things in a very organized way.",
                  author: "Participant 1",
                  role: "IT Services Specialist III",
                  initials: "P1",
                  implicationTitle: "Centralized Inventory Hub",
                  implicationDesc: "Consolidates warranty data, device types, and real-time tracking into a single unified dashboard, eliminating the need for offline spreadsheets.",
                  need: "Tracking & Inventory"
                },
                {
                  quote: "There is a lot of complication about who needs what approval to see if it can even be purchased.",
                  author: "Participant 2",
                  role: "Faculty Member",
                  initials: "P2",
                  implicationTitle: "Dynamic Approval Routing",
                  implicationDesc: "The request form now dynamically adjusts required fields and instantly surfaces approval workflows based on item category and cost.",
                  need: "Request Guidance"
                },
                {
                  quote: "We have a number of computers in our inventory that are no longer with us, and we have probably no idea where they went. It slips through the cracks.",
                  author: "Participant 3",
                  role: "Director of CECAS",
                  initials: "P3",
                  implicationTitle: "Automated Lifecycle Tracking",
                  implicationDesc: "A system-wide audit log ensures devices are explicitly marked when transferred, retired, or lent out, establishing a clear chain of custody.",
                  need: "Tracking & Inventory"
                }
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-[#333] rounded-xl overflow-hidden bg-[#242424] shadow-sm transition-all duration-500">
                  {/* Left Side: What they said */}
                  <div className="col-span-1 md:col-span-2 p-3 md:p-4 border-b md:border-b-0 md:border-r border-[#333] flex flex-col justify-between">
                    <div>
                      {idx === 0 && <h4 className="text-[7px] font-bold uppercase tracking-[0.2em] mb-3 text-white/40">What they said</h4>}
                      <div className="pl-3 border-l-[2px] border-[#D96B27] mb-3">
                        <p className="text-[12px] font-serif italic text-white/90 leading-relaxed">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <div className="w-6 h-6 rounded-full bg-[#D96B27]/10 text-[#D96B27] flex items-center justify-center font-bold text-[9px] shrink-0">
                        {item.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-[10px] text-white/90">{item.author}</div>
                        <div className="text-[8px] text-white/50">{item.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side: Design Implication */}
                  <div className="col-span-1 md:col-span-3 p-3 md:p-4 flex flex-col justify-center bg-[#242424] relative overflow-hidden">
                    {idx === 0 && <h4 className="text-[7px] font-bold uppercase tracking-[0.2em] mb-3 text-white/40 relative z-10">Design Implication</h4>}
                    <h5 className="text-[13px] font-medium text-white/90 mb-1.5 relative z-10">{item.implicationTitle}</h5>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light mb-4 relative z-10">
                      {item.implicationDesc}
                    </p>
                    <div className="mt-auto flex items-center gap-2 relative z-10">
                      <span className="px-2 py-0.5 rounded-full bg-[#D96B27]/10 text-[#D96B27] text-[7px] font-bold uppercase tracking-widest border border-[#D96B27]/20 flex items-center gap-1 w-fit">
                        <span className="w-1 h-1 rounded-full bg-[#D96B27]"></span>
                        NEED · {item.need.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL DESIGN */}
          <section className="p-12 md:p-16 rounded-[2.5rem] mt-24" style={{ backgroundColor: `${accentColor}08` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">04 — Final Design</h2>
            <h3 className="text-3xl font-serif mb-6 text-black/90">Four Core Screens — One Unified System</h3>
            <p className="text-lg text-black/70 leading-relaxed font-light mb-16">
              The prototype was built in Axure RP using Clemson University's orange, white, and grey palette. It replaces 5–8 emails with a single structured submission.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Home — Smart Recommendations", desc: "Search bar with real-time product recommendations based on purchase history. Scrollable repeater cards surface relevant items." },
                { title: "Purchase Request Form", desc: "Unified form with account splitting, ownership transfer toggle, estimated delivery date, and live price total." },
                { title: "Order Summary Dashboard", desc: "Centralized hub showing order ID, date, department, product name, quantity, status, and invoice. Admins can approve or deny." },
                { title: "Order Tracking", desc: "Prominently displayed tracking link alongside shipment status, estimated delivery time, and live updates." }
              ].map((screen, i) => (
                <div key={i} className="group bg-white rounded-3xl border border-black/5 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* PROTOTYPE WIREFRAME PLACEHOLDER */}
                  <div className="w-full aspect-video bg-[#121212] relative overflow-hidden flex items-center justify-center p-8 group-hover:bg-[#1a1a1a] transition-colors cursor-pointer">
                     <div className="absolute inset-0 flex items-center justify-center">
                       <p className="text-white/20 font-serif text-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity">Upload Wireframe</p>
                     </div>
                     {/* Abstract wireframe UI lines purely for decorative placeholder until image is uploaded */}
                     <div className="w-full max-w-[80%] aspect-video bg-white/5 rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col gap-3 group-hover:blur-[2px] transition-all duration-500">
                       <div className="flex gap-2 mb-2">
                         <div className="w-2 h-2 rounded-full bg-white/20"></div>
                         <div className="w-2 h-2 rounded-full bg-white/20"></div>
                         <div className="w-2 h-2 rounded-full bg-white/20"></div>
                       </div>
                       <div className="w-1/2 h-2 rounded-full bg-white/20"></div>
                       <div className="w-full h-2 rounded-full bg-white/10"></div>
                       <div className="w-3/4 h-2 rounded-full bg-white/10"></div>
                       <div className="mt-auto grid grid-cols-2 gap-2">
                         <div className="h-6 rounded bg-white/5"></div>
                         <div className="h-6 rounded bg-white/5"></div>
                       </div>
                     </div>
                  </div>
                  
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: accentColor }}>Screen 0{i+1}</div>
                    <h4 className="text-lg font-serif font-medium mb-3 text-black/90">{screen.title}</h4>
                    <p className="text-black/60 text-sm leading-relaxed font-light">{screen.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RESULTS */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">05 — Outcomes</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-black/90">Results That Exceeded Benchmarks</h3>
            <p className="text-xl text-black/70 leading-relaxed font-light mb-12">
              Four participants completed task-based usability testing. Results were measured against ideal and marginal specification values derived from competitive benchmarking.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-10 rounded-[2rem] border border-black/5 shadow-sm bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
                <div className="text-5xl font-serif mb-4 text-black">4.28<span className="text-2xl text-black/30">/5</span></div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-black/40 mb-3">Concept Score vs. Tradogram</h4>
                <p className="text-base text-black/60 leading-relaxed font-light">The final concept scored 4.28/5 in weighted concept scoring, outperforming the market reference on all criteria.</p>
              </div>
              <div className="p-10 rounded-[2rem] border border-black/5 shadow-sm bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
                <div className="text-5xl font-serif mb-4 text-black">$9.7K</div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-black/40 mb-3">Estimated Implementation</h4>
                <p className="text-base text-black/60 leading-relaxed font-light">Full backend integration and UI updates estimated with a concrete handoff-ready implementation plan.</p>
              </div>
            </div>
          </section>
          
          {/* LEARNINGS */}
          <section className="border-t border-black/5 pt-24 mt-24">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">06 — Reflections</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-12 text-black/90">What This Project Taught Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Interviews Unlock What Surveys Miss", desc: "Many stakeholders had so little DATS exposure they couldn't complete a questionnaire. Adaptive probing uncovered two latent needs." },
                { title: "Define 'System' Before Asking", desc: "Faculty thought DATS handled everything; admins thought we were only asking about existing features. Clarifying definitions was essential." },
                { title: "Surveys Turn Intuition to Direction", desc: "Using Ulrich & Eppinger's technique transformed qualitative themes into a ranked, defensible priority list for design tradeoffs." }
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-full h-1.5 bg-black/5 rounded-full mb-6 overflow-hidden">
                    <div className="h-full rounded-full w-1/3" style={{ backgroundColor: accentColor }}></div>
                  </div>
                  <h4 className="font-serif text-xl font-medium mb-4 text-black/90">{item.title}</h4>
                  <p className="text-black/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        {/* CTA */}
        <div className="border-t border-black/5 pt-20 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-serif mb-12 text-black/90">Interested in <br />this project?</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a 
                href="mailto:hello@nabeela.design"
                className="px-10 py-5 text-white rounded-2xl hover:scale-[1.02] transition-all font-medium flex items-center gap-2 shadow-xl shadow-black/10"
                style={{ backgroundColor: accentColor }}
              >
                Start a conversation
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link 
                to="/"
                className="text-lg font-serif border-b-2 pb-1 hover:border-black transition-all text-black/80"
                style={{ borderColor: `${accentColor}30` }}
              >
                Explore other work
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <footer className="py-12 border-t border-black/5 text-center text-xs text-black/30 font-medium uppercase tracking-widest">
        <div className="container mx-auto px-6">
          <p>© 2026 NA Studio</p>
        </div>
      </footer>
    </div>
  );
};

const GenericCaseStudy = ({ caseStudy }: { caseStudy: any }) => {
  return (
    <div className="min-h-screen bg-[#fdfdfc] text-[#121212]">
      <Header />
      
      <motion.div 
        className="container mx-auto px-6 py-12 max-w-5xl" 
        style={{ paddingTop: '10rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors mb-16 group font-medium uppercase tracking-widest text-xs"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Selection
        </Link>
        
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span 
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full"
              style={{ color: caseStudy.accentColor, backgroundColor: `${caseStudy.accentColor}15` }}
            >
              {caseStudy.category}
            </span>
            <span className="text-black/20 font-serif italic text-sm">2024 Design</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-10 leading-[1.1] tracking-tight">
            {caseStudy.title}
          </h1>
          <p className="text-2xl md:text-3xl text-black/60 leading-relaxed font-light max-w-3xl">
            {caseStudy.summary}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-y border-black/5 py-12">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4">Role</div>
            <div className="font-serif text-xl">{caseStudy.role}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4">Timeline</div>
            <div className="font-serif text-xl">{caseStudy.timeline}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 mb-4">Tools</div>
            <div className="font-serif text-xl">{caseStudy.tools?.join(", ")}</div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-32 mb-32">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">01 — The Brief</h2>
            <p className="text-xl text-black/70 leading-relaxed font-light">
              {caseStudy.overview}
            </p>
          </section>

          <section className="p-12 md:p-16 rounded-[2.5rem]" style={{ backgroundColor: `${caseStudy.accentColor}08` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">02 — The Challenge</h2>
            <p className="text-2xl font-serif text-black italic leading-relaxed mb-12">
              "{caseStudy.problem}"
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">03 — The Solution</h2>
            <p className="text-xl text-black/70 leading-relaxed font-light">
              {caseStudy.solution}
            </p>
          </section>

          <section className="border-l-4 pl-12" style={{ borderColor: `${caseStudy.accentColor}30` }}>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-black/30">04 — Impact</h2>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-black/80">
              {caseStudy.impact}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export function CaseStudy() {
  const { id } = useParams();
  const caseStudy = caseStudies.find(cs => cs.id === id);
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#fdfdfc] text-[#121212]">
        <Header />
        <div className="container mx-auto px-6 py-20 max-w-6xl text-center pt-[8rem]">
          <h1 className="text-4xl font-serif font-medium mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-black/40 hover:text-black transition-colors font-medium">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  if (caseStudy.id === "clemson-purchasing-dashboard") {
    return <DatsCaseStudy caseStudy={caseStudy} />;
  }

  return <GenericCaseStudy caseStudy={caseStudy} />;
}
