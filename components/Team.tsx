import React from 'react';
import { SectionId } from '../types';

const founders = [
  { name: "Nos!", role: "Strategy & Systems" },
  { name: "Bolupeak", role: "Creative Systems" },
  { name: "3Hunna", role: "Engineering Lead" }
];

const stewards = [
  { name: "CryptoDude", role: "BoostX, Derupt, Cryptonaughts" },
  { name: "DaveTrino", role: "Boom Wallet" },
  { name: "Blockface", role: "Headhunter, Syndicate Startups" }
];

export const Team: React.FC = () => {
  return (
    <section id={SectionId.TEAM} className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium text-brand-dark mb-20 text-center">Meet the Stewards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Founders */}
          <div>
            <h3 className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-8 pb-2 border-b border-gray-100">
              Co-founders
            </h3>
            <div className="space-y-10">
              {founders.map((person, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-xl font-bold text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">{person.name}</h4>
                    <p className="text-brand-muted">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stewards */}
          <div>
            <h3 className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-8 pb-2 border-b border-gray-100">
              Stewards
            </h3>
            <div className="space-y-10">
              {stewards.map((person, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-xl font-bold text-brand-dark group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark">{person.name}</h4>
                    <p className="text-brand-muted">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};