import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Layers3, Sparkles, Workflow } from 'lucide-react'

export default function HeroVisual() {
  return <div className="entity-stage" aria-label="Sculpted translucent glass AI entity illuminated in electric violet">
    <div className="entity-aura" />
    <div className="entity-orbit entity-orbit-a" /><div className="entity-orbit entity-orbit-b" />
    <motion.div className="entity-sculpture" animate={{ y: [0, -9, 0], rotate: [-1, 1, -1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}>
      <svg viewBox="0 0 520 600" role="img" aria-label="Abstract translucent glass AI sculpture">
        <defs>
          <linearGradient id="glassMain" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".96"/><stop offset=".22" stopColor="#e9d5ff" stopOpacity=".56"/><stop offset=".48" stopColor="#a259ff" stopOpacity=".22"/><stop offset=".72" stopColor="#f7c7f0" stopOpacity=".7"/><stop offset="1" stopColor="#8b35f5" stopOpacity=".5"/></linearGradient>
          <linearGradient id="glassEdge" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".38" stopColor="#c084ff"/><stop offset=".68" stopColor="#8b35f5"/><stop offset="1" stopColor="#fff"/></linearGradient>
          <radialGradient id="glassLight" cx=".5" cy=".45" r=".55"><stop stopColor="#fff" stopOpacity=".92"/><stop offset=".35" stopColor="#d4a5ff" stopOpacity=".42"/><stop offset="1" stopColor="#a259ff" stopOpacity=".04"/></radialGradient>
          <filter id="violetGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="12" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="18"/></filter>
        </defs>
        <ellipse cx="270" cy="555" rx="155" ry="24" fill="#a259ff" opacity=".18" filter="url(#softShadow)"/>
        <path d="M118 517 Q130 445 188 416 L216 372 Q170 338 153 281 Q131 202 173 123 Q216 39 310 49 Q404 58 431 147 Q455 230 411 304 Q389 341 344 371 L360 424 Q430 462 442 536 L420 560 L130 560Z" fill="url(#glassMain)" stroke="url(#glassEdge)" strokeWidth="5"/>
        <path d="M184 157 Q214 73 302 75 Q385 75 408 153 Q423 204 397 260 Q374 310 314 332 Q258 352 209 313 Q160 273 166 211Z" fill="url(#glassLight)" stroke="#fff" strokeOpacity=".72" strokeWidth="3"/>
        <path d="M170 202 Q208 174 247 190 Q272 200 287 230 Q263 221 244 237 Q216 260 188 245" fill="none" stroke="#fff" strokeOpacity=".86" strokeWidth="8" strokeLinecap="round"/>
        <path d="M187 270 Q223 292 258 277" fill="none" stroke="#8b35f5" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round"/>
        <path d="M218 344 Q269 377 330 341 M220 365 Q269 404 344 361" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="5"/>
        <path d="M206 405 Q268 444 352 405 L387 517 Q291 565 173 517Z" fill="#a259ff" fillOpacity=".12" stroke="#fff" strokeOpacity=".65" strokeWidth="3"/>
        <path d="M230 93 Q275 34 345 84 Q401 126 405 187" fill="none" stroke="#fff" strokeWidth="10" strokeOpacity=".8" strokeLinecap="round"/>
        <path d="M180 152 Q155 226 194 287 M395 148 Q430 225 384 293" fill="none" stroke="#c084ff" strokeWidth="5" strokeOpacity=".8"/>
        <path d="M214 118 Q269 82 337 118 M203 300 Q270 348 360 292" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity=".65"/>
        <g filter="url(#violetGlow)"><circle cx="365" cy="239" r="57" fill="#a259ff" fillOpacity=".26" stroke="#fff" strokeWidth="6"/><circle cx="365" cy="239" r="43" fill="none" stroke="#c084ff" strokeWidth="5"/><circle cx="365" cy="239" r="29" fill="#8b35f5" fillOpacity=".65" stroke="#fff" strokeWidth="2"/><path d="M355 224 L377 239 L355 254" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/></g>
        <path d="M145 455 Q190 424 222 445 M352 436 Q399 420 438 466" fill="none" stroke="#fff" strokeWidth="4" strokeOpacity=".7"/>
        <g fill="#fff"><circle cx="204" cy="145" r="5"/><circle cx="391" cy="179" r="4"/><circle cx="244" cy="382" r="3"/><circle cx="330" cy="391" r="4"/></g>
      </svg>
    </motion.div>
    <div className="entity-chip chip-discover"><Sparkles size={15}/><span>THINK<br/><b>Discover</b></span></div>
    <div className="entity-chip chip-build"><Code2 size={16}/><span>BUILD<br/><b>Engineer</b></span></div>
    <div className="entity-chip chip-integrate"><BrainCircuit size={16}/><span>INTEGRATE<br/><b>Intelligence</b></span></div>
    <div className="entity-chip chip-scale"><Layers3 size={16}/><span>SCALE<br/><b>Production</b></span></div>
    <div className="entity-caption"><Workflow size={13}/> INTELLIGENCE, SCULPTED INTO REALITY</div>
  </div>
}
