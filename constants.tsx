
import React from 'react';
import type { ReactNode } from 'react';

// --- ICON COMPONENTS ---

export const BuildingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-6a2 2 0 012-2h6a2 2 0 012 2v6M8 11h.01M12 11h.01M16 11h.01M8 14h.01M12 14h.01M16 14h.01" />
  </svg>
);

export const BridgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-20M6 12C6 9.23858 8.68629 7 12 7C15.3137 7 18 9.23858 18 12M6 12v6H4v-6h2zm12 0v6h2v-6h-2zM12 7V4M10 4h4" />
  </svg>
);

export const RoadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0-4V4m6 16l5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 13v-6m0-4V4" />
  </svg>
);

export const IrrigationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l-1 2h2l-1-2zm-4 0l-1 2h2l-1-2zm8 0l-1 2h2l-1-2z" />
    </svg>
);

export const WaterTreatmentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 008.15-15.535l-7.915 7.915a1 1 0 01-1.414 0l-7.915-7.915A10 10 0 0012 22z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
);

export const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const WrenchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const MarineIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M4 16h16M4 12h16M4 8h16M8 4v16m8-16v16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3-3 3 3" />
    </svg>
);


export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


// --- DATA ---
export interface Sector {
  name: string;
  title: string;
  icon: ReactNode;
  services: string[];
}

export const SECTORS: Sector[] = [
  { name: "Urban Forge", title: "Buildings A to Z", icon: <BuildingIcon className="w-8 h-8 text-emerald-500" />, services: ["Feasibility studies", "Structural design", "PMC", "BIM/digital twins"] },
  { name: "CrossLink", title: "Bridges & Steel Structures", icon: <BridgeIcon className="w-8 h-8 text-emerald-500" />, services: ["Feasibility", "Structural design", "PMC", "BIM/digital twins"] },
  { name: "PathFinder", title: "Roads & Transportation", icon: <RoadIcon className="w-8 h-8 text-emerald-500" />, services: ["Road/transport design", "PMC", "Network optimization"] },
  { name: "Flow Forge", title: "Irrigation Systems", icon: <IrrigationIcon className="w-8 h-8 text-emerald-500" />, services: ["Irrigation planning", "DPR", "Project management"] },
  { name: "Clear Forge", title: "Water & Wastewater", icon: <WaterTreatmentIcon className="w-8 h-8 text-emerald-500" />, services: ["Water & wastewater design", "PMC"] },
  { name: "Eco Forge", title: "Green Technology", icon: <LeafIcon className="w-8 h-8 text-emerald-500" />, services: ["Green certification", "Renewable integration", "BIM"] },
  { name: "ReBuildX", title: "Retrofitting & Rehabilitation", icon: <WrenchIcon className="w-8 h-8 text-emerald-500" />, services: ["Structural audits", "Retrofitting solutions", "Endurance testing"] },
  { name: "Volt Forge", title: "Power Sector Infrastructure", icon: <BoltIcon className="w-8 h-8 text-emerald-500" />, services: ["DPRs", "Renewable power integration"] },
  { name: "WaveLink", title: "Marine Engineering & Coastal Works", icon: <MarineIcon className="w-8 h-8 text-emerald-500" />, services: ["Marine structure design", "Feasibility studies"] }
];

export const DIFFERENTIATORS = [
    { title: "Young Founder Advantage", description: "Agility, adaptability, no outdated baggage." },
    { title: "Interlinked Verticals", description: "Instant collaboration across sectors." },
    { title: "Sustainability at the Core", description: "Not added later, built in from the start." },
    { title: "Client Experience", description: "A pleasant process, not just a completed project." },
];

export const MARKET_GAPS = [
    { problem: "Siloed services", icon: <XCircleIcon className="w-8 h-8 text-red-500"/> },
    { problem: "Long decision cycles", icon: <XCircleIcon className="w-8 h-8 text-red-500"/> },
    { problem: "Poor sustainability integration", icon: <XCircleIcon className="w-8 h-8 text-red-500"/> },
    { problem: "Weak digital adoption", icon: <XCircleIcon className="w-8 h-8 text-red-500"/> },
];

export const SUPPORTING_VERTICALS = [
    { name: "Inspectra", description: "Auditing & endurance testing" },
    { name: "Contra Forge", description: "Legal & contracts advisory" },
    { name: "Anchor Forge", description: "Finance & funding strategy" },
    { name: "Client Forge", description: "Business development" },
    { name: "Cyber Forge", description: "IT backbone & systems" }
];

export const IDEAL_CLIENTS = [
    "Large EPC contractors",
    "Government infrastructure authorities",
    "Global infrastructure investors",
    "Urban planning boards",
    "Sustainability-driven developers"
];

export const STAKEHOLDER_PROMISES = [
    "Removes complexity, adds clarity.",
    "Delivers value beyond scope.",
    "Turns the presence of EcoBound Engineers into a relief, not a stress."
];

export const ROADMAP_2040 = [
    { title: "Credibility", description: "Build credibility through results-driven projects." },
    { title: "Alliances", description: "Form alliances with top-tier players." },
    { title: "Expansion", description: "Expand sector-wise presence globally." },
    { title: "Leadership", description: "Lead industry thought-space on integrated sustainable infrastructure." }
];
