import React from 'react';
import { ShieldCheck, TerminalSquare, Laptop, Disc, BookOpen, CheckCircle2 } from 'lucide-react';
import { SectionId } from '../types';

export const Curriculum: React.FC = () => {
  return (
    <section id={SectionId.CURRICULUM} className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white rounded-full opacity-60 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-medium text-brand-dark mb-6">The Foundation</h2>
           <p className="text-brand-muted text-lg max-w-2xl mx-auto">Every participant masters these core competencies before splitting into tracks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Ethics */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">AI Ethics</h3>
              </div>
              <ul className="space-y-4">
                  {["Safety & Bias Mitigation", "Data Privacy & Security", "Transparency Protocols"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Prompt Engineering */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-100 text-purple-700 rounded-xl">
                   <TerminalSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Prompt Engineering</h3>
              </div>
              <ul className="space-y-4">
                  {["Role Prompting Techniques", "Few-Shot & Chain-of-Thought", "Debugging & Optimization"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
        </div>

        {/* Requirements */}
        <div className="bg-brand-card rounded-[3rem] p-10 md:p-16 text-white">
          <h3 className="text-3xl font-medium mb-12 text-center">Requirements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
               <h4 className="text-brand-accent font-bold flex items-center gap-2">
                 <Laptop size={20} /> General
               </h4>
               <ul className="text-sm text-gray-400 space-y-2">
                 <li>Laptop & Stable Internet</li>
                 <li>Discord Membership</li>
                 <li>Weekly Commitment</li>
               </ul>
            </div>
             <div className="space-y-4">
               <h4 className="text-brand-highlight font-bold flex items-center gap-2">
                 <Disc size={20} /> Music Track
               </h4>
               <p className="text-sm text-gray-400">Optional DAW installed (Ableton, FL Studio, Logic, etc.)</p>
            </div>
             <div className="space-y-4">
               <h4 className="text-green-400 font-bold flex items-center gap-2">
                 <TerminalSquare size={20} /> Dev Track
               </h4>
               <p className="text-sm text-gray-400">Basic Python or JavaScript knowledge.</p>
            </div>
             <div className="space-y-4">
               <h4 className="text-pink-400 font-bold flex items-center gap-2">
                 <BookOpen size={20} /> Content Track
               </h4>
               <p className="text-sm text-gray-400">Smartphone or Laptop capable of video editing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};