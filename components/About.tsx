import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, Zap, Code2 } from 'lucide-react';
import { SectionId } from '../types';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "2-Week Intensive",
    desc: "Rapid, high-impact learning cycle designed for immediate application."
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "AI-First Training",
    desc: "Built from the ground up for the AI era. No legacy clutter."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Driven",
    desc: "Learn alongside creators, developers, and founders."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Build Real Projects",
    desc: "Leave with a portfolio piece powered by actual AI workflows."
  }
];

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-32 bg-brand-bg relative">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium text-brand-dark tracking-tight leading-tight"
            >
              What is the <br/>
              AI Guild Bootcamp?
            </motion.h2>
          </div>
          <div className="lg:w-1/2">
             <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-muted leading-relaxed"
             >
               The AI Guild Bootcamp is a practical, hands-on, community-driven program for creators, developers, and founders. 
               We help your capital—your skills—grow while staying relevant in the age of AI.
             </motion.p>
             <motion.button
                whileHover={{ x: 5 }}
                className="mt-8 px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full font-medium text-sm hover:bg-brand-primary/20 transition-colors"
             >
               Explore Mission
             </motion.button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
             <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl ${idx === 0 || idx === 3 ? 'bg-brand-lavender' : 'bg-white border border-gray-100 shadow-sm'}`}
             >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${idx === 0 || idx === 3 ? 'bg-brand-primary/10 text-brand-primary' : 'bg-gray-50 text-brand-dark'}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-brand-muted leading-relaxed">{feature.desc}</p>
             </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-6 p-12 bg-brand-card rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
        >
          {/* Abstract background blob for card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary blur-[100px] opacity-30 rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-medium mb-2">14 Days to Launch</h3>
            <p className="text-gray-400">Redefine your workflow. Build real products.</p>
          </div>
          
          <div className="relative z-10 flex gap-12">
            <div>
              <div className="text-3xl font-bold text-brand-accent">3</div>
              <div className="text-sm text-gray-400">Core Tracks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent">24/7</div>
              <div className="text-sm text-gray-400">Community Support</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};