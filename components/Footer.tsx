import React from 'react';
import { SectionId } from '../types';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.JOIN} className="bg-brand-dark py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
             <h2 className="text-5xl md:text-6xl font-medium mb-8 leading-tight">
               Ready to Build <br />
               <span className="text-brand-accent">The Future?</span>
             </h2>
             <button className="group px-8 py-4 bg-white text-brand-dark font-bold rounded-full inline-flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-all">
               Join Guild <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
          
          <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 text-gray-200">Next Steps</h3>
            <div className="space-y-4">
              {[
                "Join Discord",
                "Pick your track",
                "Attend orientation",
                "Begin Week 1 modules"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="text-lg text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Stacks AI Guild. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <span>Powered by DeGrants & Bitflow</span>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
             <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};