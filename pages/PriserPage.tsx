
import React from 'react';
import Pricing from '../components/Pricing';

const PriserPage: React.FC = () => {
  return (
    <section className="bg-[#020617] pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.05),transparent_70%)]"></div>
      <Pricing />
    </section>
  );
};

export default PriserPage;
