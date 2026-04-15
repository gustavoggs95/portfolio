import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import coforgeLogo from '../assets/coforge-logo.png'
import globantLogo from '../assets/globant-logo.png'
import ibmLogo from '../assets/ibm-logo.png'

interface ExperienceItem {
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string[]
  logo?: string
  accent: string
  glow: string
}

const experiences: ExperienceItem[] = [
  {
    type: 'work',
    title: 'Mobile Application Developer',
    company: 'IBM',
    location: 'São Paulo, Brazil',
    period: 'Dec 2018 - Jan 2021',
    description: [
      'Developed and maintained Android and iOS applications using React Native',
      'Designed user interfaces following CSS/HTML practices',
      'Integrated data from back-end services and databases using REST API',
      'Worked closely with Project Owners on requirements',
    ],
    logo: ibmLogo,
    accent: 'from-sky-400/20 via-primary/10 to-transparent',
    glow: 'bg-sky-400/25',
  },
  {
    type: 'work',
    title: 'Web Developer',
    company: 'IBM',
    location: 'São Paulo, Brazil',
    period: 'Sep 2017 - Dec 2018',
    description: [
      'Full Stack Web Development with NodeJS, AngularJS, HTML and CSS',
      'Followed Scrum Methodology for project delivery',
      'Integrated data from back-end services using REST API',
      'Wrote automated test scripts',
    ],
    logo: ibmLogo,
    accent: 'from-fuchsia-500/20 via-primary/10 to-transparent',
    glow: 'bg-fuchsia-500/25',
  },
  {
    type: 'work',
    title: 'Fullstack Developer',
    company: 'Globant',
    location: 'São Paulo, Brazil',
    period: 'Jan 2021 - Mar 2026',
    description: [
      'Maintain and develop new features for Web/Mobile applications using React, React Native and Node.js',
      'Design user interfaces using CSS/HTML best practices',
      'Develop and integrate AWS serverless solutions',
      'Integrate data from back-end services and databases using GraphQL',
      'Collaborate with Project Owners to understand and discuss requirements',
    ],
    logo: globantLogo,
    accent: 'from-emerald-400/20 via-secondary/10 to-transparent',
    glow: 'bg-emerald-400/25',
  },
  {
    type: 'work',
    title: 'Senior Back End Developer',
    company: 'Coforge',
    location: 'São Paulo - Brazil',
    period: 'Mar 2026 - Present',
    description: [
      'Develop and evolve back-end solutions in Node.js for product initiatives',
      'Build robust, secure, and scalable endpoints and APIs',
      'Integrate and operate services with Cloudflare',
      'Implement AI-based features to optimize workflows and data processing',
      'Deliver product value through reliable and scalable back-end architecture',
    ],
    logo: coforgeLogo,
    accent: 'from-cyan-400/20 via-secondary/10 to-transparent',
    glow: 'bg-cyan-400/25',
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Tech icon field + color zones */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-dark via-dark-light/60 to-dark" />

        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* ── Icon symbols ── */}
            <symbol id="ico-react" viewBox="0 0 24 24">
              <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)"/>
              <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
            </symbol>

            <symbol id="ico-db" viewBox="0 0 24 24">
              <ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="3" y1="5" x2="3" y2="19" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="21" y1="5" x2="21" y2="19" stroke="currentColor" strokeWidth="1.2"/>
              <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <ellipse cx="12" cy="19" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </symbol>

            <symbol id="ico-gql" viewBox="0 0 24 24">
              <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="12" cy="2"  r="1.5" fill="currentColor"/>
              <circle cx="21" cy="7"  r="1.5" fill="currentColor"/>
              <circle cx="21" cy="17" r="1.5" fill="currentColor"/>
              <circle cx="12" cy="22" r="1.5" fill="currentColor"/>
              <circle cx="3"  cy="17" r="1.5" fill="currentColor"/>
              <circle cx="3"  cy="7"  r="1.5" fill="currentColor"/>
            </symbol>

            <symbol id="ico-node" viewBox="0 0 24 24">
              <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="12" y1="2"  x2="12" y2="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              <line x1="3"  y1="7"  x2="21" y2="17" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              <line x1="21" y1="7"  x2="3"  y2="17" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
            </symbol>

            <symbol id="ico-cloud" viewBox="0 0 24 24">
              <path d="M6.5,19 C4,19 2,17 2,14.5 C2,12 4,10 6.5,9.5 C6.5,6.5 9,4 12,4 C15,4 17,6 17.5,8.5 C19.5,8.5 22,10 22,12.5 C22,15.5 20,19 16,19 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </symbol>

            <symbol id="ico-git" viewBox="0 0 24 24">
              <circle cx="6"  cy="6"  r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="6"  cy="18" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="18" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="6" y1="8.5" x2="6" y2="15.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M6,8.5 Q6,10 18,10" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </symbol>

            <symbol id="ico-mobile" viewBox="0 0 24 24">
              <rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="10" y1="18.5" x2="14" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="9"  y1="5.5"  x2="15" y2="5.5"  stroke="currentColor" strokeWidth="0.9"/>
            </symbol>

            <symbol id="ico-terminal" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <polyline points="6,9 10,12 6,15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </symbol>

            <symbol id="ico-layers" viewBox="0 0 24 24">
              <polygon points="12,2 22,7 12,12 2,7"   fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <polyline points="2,12 12,17 22,12"     fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <polyline points="2,17 12,22 22,17"     fill="none" stroke="currentColor" strokeWidth="1.2"/>
            </symbol>

            <symbol id="ico-api" viewBox="0 0 24 24">
              <circle cx="5"  cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="19" cy="5"  r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="19" cy="19" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="7.5" y1="11"   x2="16.5" y2="6.5"  stroke="currentColor" strokeWidth="1"/>
              <line x1="7.5" y1="13"   x2="16.5" y2="17.5" stroke="currentColor" strokeWidth="1"/>
            </symbol>

            {/* ── Color hotspot gradients ── */}
            <radialGradient id="eg1" cx="12%" cy="18%" r="38%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.40"/>
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="eg2" cx="88%" cy="62%" r="42%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.38"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="eg3" cx="50%" cy="100%" r="45%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.32"/>
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="eg4" cx="72%" cy="8%" r="34%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.30"/>
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="eg5" cx="4%" cy="78%" r="32%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="eg6" cx="48%" cy="42%" r="28%" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="exp-vig" cx="50%" cy="50%" r="70%" gradientUnits="objectBoundingBox">
              <stop offset="30%" stopColor="#0f172a" stopOpacity="0"/>
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.80"/>
            </radialGradient>
          </defs>

          {/* ── 77 icons — brand colors + random rotations ── */}
          {/* react=#61dafb  db=#60a5fa  gql=#e879f9  node=#4ade80  cloud=#fbbf24
              git=#fb923c   mobile=#c084fc  terminal=#94a3b8  layers=#818cf8  api=#22d3ee */}
          <g opacity={0.85}>
            {/* top-left cluster */}
            <use href="#ico-react"    x="25"   y="37"  width="22" height="22" opacity="0.36" color="#61dafb" transform="rotate(12,34,46)"/>
            <use href="#ico-db"       x="110"  y="22"  width="20" height="20" opacity="0.30" color="#60a5fa" transform="rotate(-8,118,30)"/>
            <use href="#ico-terminal" x="72"   y="108" width="23" height="23" opacity="0.38" color="#94a3b8"/>
            <use href="#ico-gql"      x="195"  y="58"  width="21" height="21" opacity="0.34" color="#e879f9" transform="rotate(18,203.5,66.5)"/>
            <use href="#ico-layers"   x="38"   y="215" width="22" height="22" opacity="0.32" color="#818cf8" transform="rotate(-15,47,224)"/>
            <use href="#ico-cloud"    x="175"  y="168" width="24" height="24" opacity="0.37" color="#fbbf24"/>
            <use href="#ico-node"     x="315"  y="42"  width="20" height="20" opacity="0.28" color="#4ade80" transform="rotate(22,323,50)"/>
            <use href="#ico-api"      x="282"  y="145" width="22" height="22" opacity="0.35" color="#22d3ee" transform="rotate(-10,291,154)"/>
            <use href="#ico-mobile"   x="375"  y="88"  width="21" height="21" opacity="0.30" color="#c084fc"/>
            {/* top row spread */}
            <use href="#ico-react"    x="460"  y="25"  width="19" height="19" opacity="0.27" color="#61dafb" transform="rotate(-18,467.5,32.5)"/>
            <use href="#ico-git"      x="565"  y="68"  width="24" height="24" opacity="0.42" color="#fb923c"/>
            <use href="#ico-gql"      x="685"  y="38"  width="20" height="20" opacity="0.30" color="#e879f9" transform="rotate(15,693,46)"/>
            <use href="#ico-db"       x="815"  y="62"  width="22" height="22" opacity="0.34" color="#60a5fa" transform="rotate(-8,824,71)"/>
            <use href="#ico-terminal" x="955"  y="25"  width="21" height="21" opacity="0.30" color="#94a3b8" transform="rotate(20,963.5,33.5)"/>
            <use href="#ico-layers"   x="1075" y="52"  width="23" height="23" opacity="0.37" color="#818cf8"/>
            <use href="#ico-cloud"    x="1195" y="32"  width="20" height="20" opacity="0.27" color="#fbbf24" transform="rotate(-12,1203,40)"/>
            <use href="#ico-react"    x="1335" y="68"  width="22" height="22" opacity="0.34" color="#61dafb" transform="rotate(8,1344,77)"/>
            {/* top-right cluster */}
            <use href="#ico-api"      x="1395" y="148" width="23" height="23" opacity="0.39" color="#22d3ee" transform="rotate(-20,1404.5,157.5)"/>
            <use href="#ico-mobile"   x="1390" y="235" width="20" height="20" opacity="0.27" color="#c084fc"/>
            <use href="#ico-git"      x="1285" y="95"  width="21" height="21" opacity="0.29" color="#fb923c" transform="rotate(14,1293.5,103.5)"/>
            <use href="#ico-node"     x="1310" y="188" width="22" height="22" opacity="0.35" color="#4ade80" transform="rotate(-6,1319,197)"/>
            {/* left strip */}
            <use href="#ico-terminal" x="28"   y="305" width="21" height="21" opacity="0.30" color="#94a3b8"/>
            <use href="#ico-react"    x="108"  y="372" width="23" height="23" opacity="0.37" color="#61dafb" transform="rotate(16,117.5,381.5)"/>
            <use href="#ico-cloud"    x="22"   y="462" width="20" height="20" opacity="0.25" color="#fbbf24" transform="rotate(-22,30,470)"/>
            <use href="#ico-db"       x="152"  y="478" width="24" height="24" opacity="0.39" color="#60a5fa"/>
            <use href="#ico-gql"      x="48"   y="558" width="22" height="22" opacity="0.33" color="#e879f9" transform="rotate(12,57,567)"/>
            <use href="#ico-layers"   x="125"  y="618" width="21" height="21" opacity="0.29" color="#818cf8" transform="rotate(-18,133.5,626.5)"/>
            <use href="#ico-api"      x="42"   y="698" width="20" height="20" opacity="0.26" color="#22d3ee"/>
            <use href="#ico-node"     x="170"  y="748" width="23" height="23" opacity="0.35" color="#4ade80" transform="rotate(24,179.5,757.5)"/>
            <use href="#ico-mobile"   x="58"   y="828" width="22" height="22" opacity="0.31" color="#c084fc" transform="rotate(-10,67,837)"/>
            {/* right strip */}
            <use href="#ico-react"    x="1390" y="322" width="22" height="22" opacity="0.34" color="#61dafb" transform="rotate(-14,1399,331)"/>
            <use href="#ico-terminal" x="1295" y="412" width="24" height="24" opacity="0.42" color="#94a3b8"/>
            <use href="#ico-gql"      x="1395" y="488" width="21" height="21" opacity="0.31" color="#e879f9" transform="rotate(20,1405.5,498.5)"/>
            <use href="#ico-mobile"   x="1355" y="555" width="22" height="22" opacity="0.35" color="#c084fc" transform="rotate(-8,1364,564)"/>
            <use href="#ico-cloud"    x="1388" y="685" width="23" height="23" opacity="0.33" color="#fbbf24" transform="rotate(16,1397.5,694.5)"/>
            <use href="#ico-git"      x="1278" y="638" width="21" height="21" opacity="0.29" color="#fb923c"/>
            <use href="#ico-layers"   x="1390" y="772" width="20" height="20" opacity="0.27" color="#818cf8" transform="rotate(-20,1400,782)"/>
            <use href="#ico-db"       x="1300" y="815" width="22" height="22" opacity="0.33" color="#60a5fa" transform="rotate(10,1309,824)"/>
            {/* inner upper */}
            <use href="#ico-git"      x="245"  y="275" width="21" height="21" opacity="0.29" color="#fb923c"/>
            <use href="#ico-react"    x="335"  y="338" width="20" height="20" opacity="0.27" color="#61dafb" transform="rotate(-16,343,346)"/>
            <use href="#ico-cloud"    x="530"  y="188" width="19" height="19" opacity="0.25" color="#fbbf24" transform="rotate(22,537.5,195.5)"/>
            <use href="#ico-terminal" x="648"  y="155" width="22" height="22" opacity="0.34" color="#94a3b8" transform="rotate(-8,657,164)"/>
            <use href="#ico-git"      x="758"  y="175" width="21" height="21" opacity="0.29" color="#fb923c" transform="rotate(14,766.5,183.5)"/>
            <use href="#ico-api"      x="898"  y="205" width="23" height="23" opacity="0.36" color="#22d3ee"/>
            <use href="#ico-layers"   x="1068" y="165" width="22" height="22" opacity="0.32" color="#818cf8" transform="rotate(-18,1077,174)"/>
            <use href="#ico-gql"      x="1162" y="280" width="20" height="20" opacity="0.27" color="#e879f9" transform="rotate(20,1170,288)"/>
            {/* inner mid */}
            <use href="#ico-mobile"   x="408"  y="405" width="20" height="20" opacity="0.26" color="#c084fc"/>
            <use href="#ico-cloud"    x="558"  y="445" width="22" height="22" opacity="0.31" color="#fbbf24" transform="rotate(-15,567,454)"/>
            <use href="#ico-node"     x="695"  y="395" width="21" height="21" opacity="0.29" color="#4ade80" transform="rotate(10,703.5,403.5)"/>
            <use href="#ico-react"    x="838"  y="468" width="23" height="23" opacity="0.36" color="#61dafb" transform="rotate(-22,847.5,477.5)"/>
            <use href="#ico-db"       x="1008" y="405" width="21" height="21" opacity="0.29" color="#60a5fa"/>
            <use href="#ico-terminal" x="1128" y="488" width="24" height="24" opacity="0.40" color="#94a3b8" transform="rotate(18,1138,498)"/>
            <use href="#ico-api"      x="1238" y="355" width="22" height="22" opacity="0.31" color="#22d3ee" transform="rotate(-12,1247,364)"/>
            {/* inner lower-mid */}
            <use href="#ico-gql"      x="362"  y="568" width="21" height="21" opacity="0.29" color="#e879f9"/>
            <use href="#ico-git"      x="488"  y="620" width="22" height="22" opacity="0.33" color="#fb923c" transform="rotate(16,497,629)"/>
            <use href="#ico-layers"   x="625"  y="548" width="23" height="23" opacity="0.36" color="#818cf8" transform="rotate(-20,634.5,557.5)"/>
            <use href="#ico-mobile"   x="748"  y="628" width="20" height="20" opacity="0.27" color="#c084fc" transform="rotate(8,756,636)"/>
            <use href="#ico-cloud"    x="868"  y="558" width="22" height="22" opacity="0.31" color="#fbbf24"/>
            <use href="#ico-react"    x="998"  y="618" width="21" height="21" opacity="0.29" color="#61dafb" transform="rotate(-14,1006.5,626.5)"/>
            <use href="#ico-node"     x="1108" y="568" width="23" height="23" opacity="0.36" color="#4ade80" transform="rotate(12,1117.5,577.5)"/>
            {/* near-bottom */}
            <use href="#ico-db"       x="252"  y="665" width="20" height="20" opacity="0.27" color="#60a5fa"/>
            <use href="#ico-terminal" x="372"  y="728" width="22" height="22" opacity="0.31" color="#94a3b8" transform="rotate(-18,381,737)"/>
            <use href="#ico-api"      x="512"  y="688" width="21" height="21" opacity="0.29" color="#22d3ee" transform="rotate(22,520.5,696.5)"/>
            <use href="#ico-gql"      x="668"  y="755" width="24" height="24" opacity="0.38" color="#e879f9"/>
            <use href="#ico-layers"   x="808"  y="718" width="21" height="21" opacity="0.29" color="#818cf8" transform="rotate(-10,816.5,726.5)"/>
            <use href="#ico-cloud"    x="945"  y="768" width="22" height="22" opacity="0.34" color="#fbbf24" transform="rotate(16,954,777)"/>
            <use href="#ico-mobile"   x="1072" y="728" width="20" height="20" opacity="0.27" color="#c084fc"/>
            <use href="#ico-git"      x="1185" y="678" width="23" height="23" opacity="0.36" color="#fb923c" transform="rotate(-24,1194.5,687.5)"/>
            {/* bottom row */}
            <use href="#ico-react"    x="195"  y="848" width="21" height="21" opacity="0.29" color="#61dafb"/>
            <use href="#ico-gql"      x="345"  y="808" width="20" height="20" opacity="0.25" color="#e879f9" transform="rotate(20,353,816)"/>
            <use href="#ico-api"      x="495"  y="838" width="22" height="22" opacity="0.31" color="#22d3ee" transform="rotate(-15,506,849)"/>
            <use href="#ico-db"       x="648"  y="832" width="23" height="23" opacity="0.36" color="#60a5fa" transform="rotate(8,657.5,841.5)"/>
            <use href="#ico-node"     x="795"  y="808" width="20" height="20" opacity="0.26" color="#4ade80"/>
            <use href="#ico-terminal" x="938"  y="832" width="22" height="22" opacity="0.31" color="#94a3b8" transform="rotate(-12,949,843)"/>
            <use href="#ico-layers"   x="1085" y="818" width="21" height="21" opacity="0.27" color="#818cf8" transform="rotate(18,1093.5,826.5)"/>
            <use href="#ico-mobile"   x="1228" y="838" width="23" height="23" opacity="0.33" color="#c084fc"/>
            <use href="#ico-react"    x="1368" y="826" width="20" height="20" opacity="0.26" color="#61dafb" transform="rotate(-20,1378,836)"/>
          </g>

          {/* Color hotspots */}
          <rect width="100%" height="100%" fill="url(#eg1)"/>
          <rect width="100%" height="100%" fill="url(#eg2)"/>
          <rect width="100%" height="100%" fill="url(#eg3)"/>
          <rect width="100%" height="100%" fill="url(#eg4)"/>
          <rect width="100%" height="100%" fill="url(#eg5)"/>
          <rect width="100%" height="100%" fill="url(#eg6)"/>
          <rect width="100%" height="100%" fill="url(#exp-vig)"/>
        </svg>

        {/* Edge accent lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-400/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-violet-400/30 to-transparent" />
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
              Experience
            </span>
          </h2>
          <p className="text-text-muted text-center mb-16 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-linear-to-b from-primary via-secondary to-primary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10" />

                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <div className="group relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-dark/80 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(2,6,23,0.65)] sm:p-6">
                    {/* Gradient accent */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${exp.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    {/* Inner glass edge */}
                    <div className="absolute inset-px rounded-[27px] bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-60" />
                    {/* Glow blob */}
                    <div
                      className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${exp.glow}`}
                    />
                    {/* Hover border shimmer */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/30 to-transparent" />
                      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                    </div>

                    <div className="relative">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <span className="font-medium text-primary">{exp.company}</span>
                          <h3 className="mt-1 text-xl font-semibold text-text transition-colors duration-300 group-hover:text-white">
                            {exp.title}
                          </h3>
                        </div>

                        {exp.logo ? (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 p-2 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-105">
                            {exp.type === 'work' ? (
                              <Briefcase size={24} className="text-white" />
                            ) : (
                              <GraduationCap size={24} className="text-white" />
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mb-4 flex flex-wrap gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      <div className="border-t border-white/10 pt-4">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                              <span className="mt-0.5 text-primary leading-none">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
