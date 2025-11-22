import React from 'react';
import { motion } from 'framer-motion';
import { Music, Code, PenTool, Megaphone, TrendingUp, ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const coreTracks = [
  {
    title: "Music & Audio AI",
    subtitle: "For Producers & Sound Engineers",
    icon: <Music className="w-8 h-8" />,
    theme: "dark",
    features: [
      "AI beat creation & sound design",
      "Mixing/mastering enhancements",
      "Workflow automation",
      "AI music distribution tools"
    ]
  },
  {
    title: "Dev & Automation",
    subtitle: "For Builders & Hackers",
    icon: <Code className="w-8 h-8" />,
    theme: "light",
    features: [
      "Agentic app building",
      "Python/JS integrations",
      "Web3 + AI projects",
      "Prompt-based systems"
    ]
  },
  {
    title: "Content Creation AI",
    subtitle: "For Creators & Storytellers",
    icon: <PenTool className="w-8 h-8" />,
    theme: "dark",
    features: [
      "Scriptwriting automation",
      "AI video/short generation",
      "Branding workflows",
      "Social content pipelines"
    ]
  }
];

const addonTracks = [
  {
    title: "Marketing",
    icon: <Megaphone className="w-5 h-5" />,
    features: ["AI audience insights", "Campaign generation", "Funnel mapping"]
  },
  {
    title: "Leadership",
    icon: <TrendingUp className="w-5 h-5" />,
    features: ["AI-assisted decision-making", "Team productivity", "Operational automation"]
  }
];

export const Tracks: React.FC = () => {
  return (
    <section id={SectionId.TRACKS} className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Select Your Path</h2>
          <h3 className="text-4xl md:text-5xl font-medium text-brand-dark mb-6">Core Tracks</h3>
          <p className="text-brand-muted text-lg">
            Deep dive into specialized fields with our expert-led curriculums designed to make you AI-native.
          </p>
        </div>

        {/* Core Tracks Grid - Mixing Dark/Light cards like mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {coreTracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[2.5rem] p-10 flex flex-col justify-between h-full ${
                track.theme === 'dark' 
                  ? 'bg-brand-card text-white' 
                  : 'bg-brand-lavender text-brand-dark'
              }`}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                  track.theme === 'dark' ? 'bg-white/10' : 'bg-white shadow-sm text-brand-primary'
                }`}>
                  {track.icon}
                </div>
                <h4 className="text-3xl font-medium mb-2">{track.title}</h4>
                <p className={`text-sm mb-8 ${track.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {track.subtitle}
                </p>
                <ul className="space-y-4">
                  {track.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm font-medium">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${track.theme === 'dark' ? 'bg-brand-accent' : 'bg-brand-primary'}`} />
                      <span className={track.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${
                 track.theme === 'dark' ? 'text-white hover:text-brand-accent' : 'text-brand-dark hover:text-brand-primary'
              } transition-colors`}>
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-gray-100">
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
             <div>
               <h3 className="text-3xl md:text-4xl font-medium text-brand-dark mb-4">Add-on Tracks</h3>
               <p className="text-brand-muted max-w-md">Optional specialized modules to enhance your main curriculum.</p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addonTracks.map((track, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all duration-300 shrink-0">
                    {track.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-3">{track.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {track.features.map((feat, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};