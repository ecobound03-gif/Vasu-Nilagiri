
import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  SECTORS,
  DIFFERENTIATORS,
  MARKET_GAPS,
  SUPPORTING_VERTICALS,
  IDEAL_CLIENTS,
  STAKEHOLDER_PROMISES,
  ROADMAP_2040,
  CheckCircleIcon,
  LeafIcon,
} from './constants';
import type { Sector } from './constants';


// --- Reusable Components (defined outside main App component) ---

interface SectionProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6 md:px-8">
      {children}
    </div>
  </section>
);

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    {subtitle && <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{children}</h2>
  </div>
);

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#ecosystem', label: 'Ecosystem' },
        { href: '#vision', label: 'Vision' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#hero" className="flex items-center space-x-2">
                        <LeafIcon className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-emerald-600' : 'text-white'}`} />
                        <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                            EcoBound Engineers
                        </span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/80 hover:text-white'}`}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                     <button className="md:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-6 md:px-8 py-8 text-center">
             <div className="mb-4">
                <a href="mailto:nilagirisrinivas05@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                    nilagirisrinivas05@gmail.com
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} EcoBound Engineers. All rights reserved.</p>
            <p className="text-sm text-slate-400 mt-1">Turning Challenges into Sustainable Success</p>
        </div>
    </footer>
);

const SectorCard: React.FC<{ sector: Sector }> = ({ sector }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
        <div className="bg-emerald-100 p-4 rounded-full mb-4">
            {sector.icon}
        </div>
        <h3 className="font-bold text-lg text-slate-800 mb-2">{sector.name}</h3>
        <p className="text-slate-600 text-sm">{sector.title}</p>
    </div>
);

// --- Page Sections ---

const HeroSection: React.FC = () => (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white bg-slate-900">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1623270929235-2d5b03b3c457?q=80&w=1920&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Turning Challenges into <br /> <span className="text-emerald-400">Sustainable Success</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                By 2040, EcoBound Engineers will be the go-to consulting powerhouse for the world’s top infrastructure players.
            </p>
        </div>
    </section>
);

const FounderSection: React.FC = () => (
    <Section id="about" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md mx-auto">
                <img src="https://picsum.photos/seed/founder/500/500" alt="Srinivas Nilagiri" className="rounded-lg shadow-2xl" />
            </div>
            <div>
                <p className="text-emerald-500 font-semibold text-sm uppercase tracking-wider mb-2">The Founder's Spark</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Srinivas Nilagiri – Young Mind, Bold Vision</h2>
                <p className="text-slate-600 mb-4">
                    Srinivas Nilagiri didn’t arrive with decades of dusty manuals — he came in young, with fresh eyes and a determination to rewrite how infrastructure consulting works.
                </p>
                <p className="text-slate-600">
                    This youth-driven approach means we aren’t defending the past — we’re building the future, focusing on being faster, more connected, and turning problems into opportunities.
                </p>
            </div>
        </div>
    </Section>
);

const EcosystemSection: React.FC = () => (
    <Section id="ecosystem" className="bg-slate-50">
        <SectionTitle subtitle="How We Operate">Our Integrated Ecosystem</SectionTitle>
        
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-700 text-center mb-8 after:content-[''] after:block after:w-16 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-2">Core Sectors</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                {SECTORS.map((sector) => (
                    <SectorCard key={sector.name} sector={sector} />
                ))}
            </div>
        </div>

        <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-700 text-center mb-8 after:content-[''] after:block after:w-16 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-2">Integrated Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SECTORS.map(sector => (
                    <div key={sector.name} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg text-slate-800 mb-3">{sector.name}</h3>
                        <ul className="space-y-2">
                            {sector.services.map(service => (
                                <li key={service} className="flex items-start">
                                    <CheckCircleIcon className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-1" />
                                    <span className="text-slate-600">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        
        <div>
            <h3 className="text-2xl font-bold text-slate-700 text-center mb-8 after:content-[''] after:block after:w-16 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-2">Supporting Verticals</h3>
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 text-center">
                 {SUPPORTING_VERTICALS.map(vertical => (
                    <div key={vertical.name} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold text-slate-700">{vertical.name}</h3>
                        <p className="text-xs text-slate-500 mt-1">{vertical.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const DifferentiatorsSection: React.FC = () => (
    <Section id="differentiators" className="bg-slate-900 text-white">
        <SectionTitle subtitle="What Makes Us Different">Our Competitive Edge</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIATORS.map(item => (
                <div key={item.title} className="text-center p-4">
                    <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4"/>
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const MarketGapSection: React.FC = () => (
    <Section id="market-gap" className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <SectionTitle subtitle="The Market Gap">How We Deliver Value</SectionTitle>
                 <p className="text-slate-600 mb-6 max-w-lg mx-auto text-center md:text-left">
                     Global infrastructure consulting often suffers from siloed services, long decision cycles, poor sustainability integration, and weak digital adoption. EcoBound Engineers closes all four gaps in one integrated model.
                 </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="font-bold text-slate-800 text-lg mb-4">Industry Challenges We Solve:</h3>
                <ul className="space-y-3">
                    {MARKET_GAPS.map(gap => (
                        <li key={gap.problem} className="flex items-center">
                            {gap.icon}
                            <span className="ml-3 text-slate-700">{gap.problem}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
);

const ClientsSection: React.FC = () => (
    <Section id="clients" className="bg-white">
        <SectionTitle>Our Ideal Clients</SectionTitle>
        <div className="flex flex-wrap justify-center gap-4">
            {IDEAL_CLIENTS.map(client => (
                <span key={client} className="bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium">
                    {client}
                </span>
            ))}
        </div>
    </Section>
);

const PromiseSection: React.FC = () => (
    <Section id="promise" className="bg-slate-50">
        <SectionTitle subtitle="Our Promise to Stakeholders">The EcoBound Experience</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            {STAKEHOLDER_PROMISES.map((promise, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                    <CheckCircleIcon className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-xl text-slate-700">{promise}</h3>
                </div>
            ))}
        </div>
    </Section>
);


const RoadmapSection: React.FC = () => (
    <Section id="vision" className="bg-white">
        <SectionTitle subtitle="The Road to 2040">Our Path is Clear</SectionTitle>
        <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 transform -translate-x-1/2"></div>
            {ROADMAP_2040.map((item, index) => (
                <div key={item.title} className={`relative mb-8 flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-1/2">
                        <div className={`p-4 rounded-lg shadow-lg bg-slate-50 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                            <h3 className="font-bold text-lg text-emerald-600">{item.title}</h3>
                            <p className="text-slate-600">{item.description}</p>
                        </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white z-10"></div>
                </div>
            ))}
        </div>
    </Section>
);

const ContactSection: React.FC = () => (
    <Section id="contact" className="bg-emerald-600 text-white text-center">
        <SectionTitle>Let's Build the Future Together</SectionTitle>
        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our vision? We're ready to connect.
        </p>
        <a 
            href="mailto:nilagirisrinivas05@gmail.com" 
            className="inline-block bg-white text-emerald-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
            Contact Srinivas Nilagiri
        </a>
         <p className="mt-4 text-emerald-200">nilagirisrinivas05@gmail.com</p>
    </Section>
);


// --- Main App Component ---

export default function App() {
  return (
    <div className="bg-white text-slate-700">
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <EcosystemSection />
        <DifferentiatorsSection />
        <MarketGapSection />
        <RoadmapSection />
        <ClientsSection />
        <PromiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
