import { Code2, Smartphone, Server, Cloud, Database, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  description: string
  accent: string
  glow: string
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: Code2,
    description: 'Building modern, interactive UIs',
    accent: 'from-fuchsia-500/20 via-primary/10 to-transparent',
    glow: 'bg-fuchsia-500/25',
  },
  {
    name: 'React Native',
    icon: Smartphone,
    description: 'Cross-platform mobile apps',
    accent: 'from-sky-400/20 via-primary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    name: 'Node.js',
    icon: Server,
    description: 'Scalable backend services',
    accent: 'from-emerald-400/20 via-secondary/10 to-transparent',
    glow: 'bg-emerald-400/25',
  },
  {
    name: 'AWS',
    icon: Cloud,
    description: 'Cloud & serverless solutions',
    accent: 'from-amber-300/20 via-secondary/10 to-transparent',
    glow: 'bg-amber-300/25',
  },
  {
    name: 'PostgreSQL',
    icon: Database,
    description: 'Relational database design',
    accent: 'from-sky-400/20 via-secondary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    name: 'AI',
    icon: Sparkles,
    description: 'AI integration & features',
    accent: 'from-amber-300/20 via-primary/10 to-transparent',
    glow: 'bg-amber-300/25',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* PCB circuit board */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-80" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(56,189,248,0.14) 0%, transparent 65%)' }} />
        <svg className="absolute bottom-0 left-0 w-105 h-105 opacity-20" viewBox="0 0 360 360" fill="none">
          {/* Central QFP IC — body */}
          <rect x="128" y="128" width="104" height="104" rx="4" stroke="#67e8f9" strokeWidth="1.4"/>
          <rect x="136" y="136" width="88" height="88" rx="2" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="4 3"/>
          <circle cx="140" cy="140" r="3" fill="#67e8f9" fillOpacity="0.6"/>
          {/* top pins */}
          <rect x="136" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="150" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="164" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="178" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="192" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="206" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="220" y="116" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          {/* bottom pins */}
          <rect x="136" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="150" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="164" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="178" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="192" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="206" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="220" y="232" width="8" height="12" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          {/* left pins */}
          <rect x="116" y="136" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="116" y="150" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="116" y="164" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="116" y="178" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="116" y="192" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="116" y="206" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="116" y="220" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          {/* right pins */}
          <rect x="232" y="136" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="232" y="150" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="232" y="164" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="232" y="178" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="232" y="192" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="232" y="206" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          <rect x="232" y="220" width="12" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.9"/>
          {/* Left SOIC-8 */}
          <rect x="12" y="58" width="64" height="48" rx="3" stroke="#22d3ee" strokeWidth="1.2"/>
          <circle cx="18" cy="64" r="2" fill="#22d3ee" fillOpacity="0.5"/>
          <rect x="4" y="64" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="4" y="75" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="4" y="86" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="4" y="97" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="76" y="64" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="76" y="75" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="76" y="86" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="76" y="97" width="8" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          {/* Top-right IC */}
          <rect x="270" y="12" width="60" height="46" rx="3" stroke="#0ea5e9" strokeWidth="1.2"/>
          <rect x="278" y="4" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="292" y="4" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="306" y="4" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="320" y="4" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="278" y="58" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="292" y="58" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="306" y="58" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="320" y="58" width="8" height="8" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          {/* Bottom-left IC */}
          <rect x="14" y="272" width="76" height="48" rx="3" stroke="#0ea5e9" strokeWidth="1.2"/>
          <rect x="4" y="278" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="4" y="289" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="4" y="300" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="4" y="311" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="90" y="278" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="90" y="289" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="90" y="300" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="90" y="311" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          {/* SMD passives */}
          <rect x="96" y="74" width="14" height="7" rx="1" stroke="#7dd3fc" strokeWidth="0.8"/>
          <line x1="96" y1="78" x2="88" y2="78" stroke="#38bdf8" strokeWidth="0.7"/>
          <line x1="110" y1="78" x2="118" y2="78" stroke="#38bdf8" strokeWidth="0.7"/>
          <rect x="228" y="88" width="7" height="14" rx="1" stroke="#7dd3fc" strokeWidth="0.8"/>
          <line x1="231" y1="88" x2="231" y2="80" stroke="#38bdf8" strokeWidth="0.7"/>
          <line x1="231" y1="102" x2="231" y2="110" stroke="#38bdf8" strokeWidth="0.7"/>
          <rect x="254" y="162" width="14" height="7" rx="1" stroke="#7dd3fc" strokeWidth="0.8"/>
          <line x1="254" y1="166" x2="246" y2="166" stroke="#38bdf8" strokeWidth="0.7"/>
          <line x1="268" y1="166" x2="276" y2="166" stroke="#38bdf8" strokeWidth="0.7"/>
          <rect x="162" y="254" width="7" height="14" rx="1" stroke="#7dd3fc" strokeWidth="0.8"/>
          <line x1="165" y1="254" x2="165" y2="246" stroke="#38bdf8" strokeWidth="0.7"/>
          <line x1="165" y1="268" x2="165" y2="276" stroke="#38bdf8" strokeWidth="0.7"/>
          <rect x="108" y="254" width="14" height="7" rx="1" stroke="#7dd3fc" strokeWidth="0.8"/>
          <line x1="108" y1="258" x2="100" y2="258" stroke="#38bdf8" strokeWidth="0.7"/>
          <line x1="122" y1="258" x2="130" y2="258" stroke="#38bdf8" strokeWidth="0.7"/>
          {/* Right-edge connector */}
          <rect x="346" y="148" width="14" height="12" rx="1.5" stroke="#22d3ee" strokeWidth="1"/>
          <rect x="346" y="164" width="14" height="12" rx="1.5" stroke="#22d3ee" strokeWidth="1"/>
          <rect x="346" y="180" width="14" height="12" rx="1.5" stroke="#22d3ee" strokeWidth="1"/>
          <rect x="346" y="196" width="14" height="12" rx="1.5" stroke="#22d3ee" strokeWidth="1"/>
          <rect x="346" y="212" width="14" height="12" rx="1.5" stroke="#22d3ee" strokeWidth="1"/>
          {/* Vias */}
          <circle cx="100" cy="116" r="4.5" stroke="#22d3ee" strokeWidth="1.1"/><circle cx="100" cy="116" r="1.8" fill="#67e8f9"/>
          <circle cx="116" cy="248" r="4.5" stroke="#22d3ee" strokeWidth="1.1"/><circle cx="116" cy="248" r="1.8" fill="#67e8f9"/>
          <circle cx="248" cy="100" r="4.5" stroke="#22d3ee" strokeWidth="1.1"/><circle cx="248" cy="100" r="1.8" fill="#67e8f9"/>
          <circle cx="248" cy="248" r="4" stroke="#22d3ee" strokeWidth="1"/><circle cx="248" cy="248" r="1.6" fill="#67e8f9"/>
          <circle cx="52" cy="148" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="52" cy="148" r="1.4" fill="#38bdf8"/>
          <circle cx="156" cy="52" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="156" cy="52" r="1.4" fill="#38bdf8"/>
          <circle cx="298" cy="100" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="298" cy="100" r="1.4" fill="#38bdf8"/>
          <circle cx="312" cy="164" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="312" cy="164" r="1.4" fill="#38bdf8"/>
          <circle cx="200" cy="52" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="200" cy="52" r="1.4" fill="#38bdf8"/>
          <circle cx="52" cy="220" r="3" stroke="#0ea5e9" strokeWidth="0.8"/><circle cx="52" cy="220" r="1.2" fill="#38bdf8"/>
          <circle cx="54" cy="252" r="3" stroke="#0ea5e9" strokeWidth="0.8"/><circle cx="54" cy="252" r="1.2" fill="#38bdf8"/>
          {/* Traces — all 45° routed */}
          <path d="M 84 67 H 90 L 100 77 V 116" stroke="#0ea5e9" strokeWidth="0.9" fill="none"/>
          <path d="M 100 116 L 116 128" stroke="#38bdf8" strokeWidth="0.9" fill="none"/>
          <path d="M 84 86 H 94 L 116 108" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 84 97 H 90 L 100 107 V 116" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 52 148 V 220" stroke="#0ea5e9" strokeWidth="0.9" fill="none"/>
          <path d="M 52 220 L 14 272" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 90 282 H 116 V 248" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 116 248 L 128 236" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 90 293 H 104 L 116 261 V 248" stroke="#7dd3fc" strokeWidth="0.7" fill="none"/>
          <path d="M 282 66 V 78 L 272 88 V 100" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 298 100 H 248" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 248 100 L 232 116" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 156 52 V 116" stroke="#0ea5e9" strokeWidth="0.9" fill="none"/>
          <path d="M 200 52 V 62 H 248 V 100" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 118 78 H 124 L 156 46 V 52" stroke="#7dd3fc" strokeWidth="0.7" fill="none"/>
          <path d="M 244 154 H 276 L 312 164" stroke="#0ea5e9" strokeWidth="0.9" fill="none"/>
          <path d="M 312 164 H 346" stroke="#0ea5e9" strokeWidth="0.9" fill="none"/>
          <path d="M 244 168 H 268 L 276 176 H 320 L 346 180" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 244 182 H 262 L 282 202 H 346" stroke="#7dd3fc" strokeWidth="0.8" fill="none"/>
          {/* Differential pair */}
          <path d="M 244 236 L 262 252 H 346" stroke="#0ea5e9" strokeWidth="0.85" fill="none"/>
          <path d="M 244 244 L 260 260 H 346" stroke="#0ea5e9" strokeWidth="0.7" fill="none"/>
          <line x1="270" y1="249" x2="266" y2="255" stroke="#22d3ee" strokeWidth="0.8"/>
          <line x1="284" y1="256" x2="280" y2="262" stroke="#22d3ee" strokeWidth="0.8"/>
          <line x1="298" y1="258" x2="294" y2="264" stroke="#22d3ee" strokeWidth="0.8"/>
          {/* Power bus (thicker) */}
          <path d="M 0 180 H 12 V 128 H 52 V 52 H 156" stroke="#38bdf8" strokeWidth="1.2" fill="none"/>
          {/* Ground pour hint */}
          <rect x="296" y="268" width="60" height="60" rx="2" stroke="#0ea5e9" strokeWidth="0.7" strokeDasharray="3 3"/>
          <line x1="296" y1="284" x2="312" y2="268" stroke="#0ea5e9" strokeWidth="0.5"/>
          <line x1="296" y1="300" x2="328" y2="268" stroke="#0ea5e9" strokeWidth="0.5"/>
          <line x1="296" y1="316" x2="344" y2="268" stroke="#0ea5e9" strokeWidth="0.5"/>
          <line x1="304" y1="328" x2="356" y2="276" stroke="#0ea5e9" strokeWidth="0.5"/>
        </svg>
        <svg className="absolute top-0 right-0 w-65 h-65 opacity-15" viewBox="0 0 200 200" fill="none">
          {/* IC body with pins on all 4 sides */}
          <rect x="78" y="76" width="64" height="56" rx="3" stroke="#22d3ee" strokeWidth="1.1"/>
          <circle cx="84" cy="82" r="2" fill="#22d3ee" fillOpacity="0.5"/>
          <rect x="84" y="70" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="96" y="70" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="108" y="70" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="120" y="70" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="84" y="132" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="96" y="132" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="108" y="132" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="120" y="132" width="7" height="6" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="72" y="82" width="6" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="72" y="94" width="6" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="72" y="106" width="6" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="142" y="82" width="6" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="142" y="94" width="6" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          <rect x="142" y="106" width="6" height="7" rx="1" stroke="#38bdf8" strokeWidth="0.8"/>
          {/* SMD passives */}
          <rect x="36" y="80" width="12" height="6" rx="1" stroke="#7dd3fc" strokeWidth="0.7"/>
          <line x1="36" y1="83" x2="28" y2="83" stroke="#38bdf8" strokeWidth="0.6"/>
          <line x1="48" y1="83" x2="56" y2="83" stroke="#38bdf8" strokeWidth="0.6"/>
          <rect x="96" y="36" width="6" height="12" rx="1" stroke="#7dd3fc" strokeWidth="0.7"/>
          <line x1="99" y1="36" x2="99" y2="28" stroke="#38bdf8" strokeWidth="0.6"/>
          <line x1="99" y1="48" x2="99" y2="56" stroke="#38bdf8" strokeWidth="0.6"/>
          <rect x="152" y="110" width="12" height="6" rx="1" stroke="#7dd3fc" strokeWidth="0.7"/>
          <line x1="152" y1="113" x2="144" y2="113" stroke="#38bdf8" strokeWidth="0.6"/>
          <line x1="164" y1="113" x2="172" y2="113" stroke="#38bdf8" strokeWidth="0.6"/>
          {/* Vias */}
          <circle cx="56" cy="58" r="4" stroke="#22d3ee" strokeWidth="1"/><circle cx="56" cy="58" r="1.5" fill="#67e8f9"/>
          <circle cx="152" cy="58" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="152" cy="58" r="1.3" fill="#38bdf8"/>
          <circle cx="56" cy="148" r="3.5" stroke="#0ea5e9" strokeWidth="0.9"/><circle cx="56" cy="148" r="1.3" fill="#38bdf8"/>
          <circle cx="172" cy="148" r="3" stroke="#0ea5e9" strokeWidth="0.8"/><circle cx="172" cy="148" r="1.2" fill="#38bdf8"/>
          {/* Traces with 45° bends */}
          <path d="M 56 58 V 70 L 72 86" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 48 83 H 40 L 28 71 V 58" stroke="#38bdf8" strokeWidth="0.7" fill="none"/>
          <path d="M 99 56 V 70" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 152 58 H 122 V 70" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 148 89 H 164 L 172 97" stroke="#38bdf8" strokeWidth="0.8" fill="none"/>
          <path d="M 172 113 H 180 V 148" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 172 148 L 148 148" stroke="#38bdf8" strokeWidth="0.7" fill="none"/>
          <path d="M 56 148 L 72 132" stroke="#0ea5e9" strokeWidth="0.8" fill="none"/>
          <path d="M 0 104 H 28 L 56 76" stroke="#38bdf8" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            A Full Stack Developer comfortable working on any end of the stack
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)] text-center"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${skill.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
              <div
                className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${skill.glow}`}
              />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="relative">
                <div className="flex justify-center mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                    <skill.icon size={28} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </h3>
                <p className="text-sm text-text-muted">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
