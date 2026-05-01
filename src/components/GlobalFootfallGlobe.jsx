import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const cities = [
  { x: 28, y: 32, label: "NEW YORK", color: "#D4AF37" },
  { x: 46, y: 24, label: "LONDON", color: "#D4AF37" },
  { x: 58, y: 35, label: "DUBAI", color: "#D4AF37" },
  { x: 72, y: 38, label: "TOKYO", color: "#D4AF37" },
  { x: 20, y: 58, label: "SAO PAULO", color: "#D4AF37" },
  { x: 65, y: 55, label: "SINGAPORE", color: "#D4AF37" },
  { x: 38, y: 20, label: "PARIS", color: "#D4AF37" },
  { x: 76, y: 28, label: "SHANGHAI", color: "#D4AF37" },
];

const GlobalFootfallGlobe = ({ setCurrentView }) => {
  const gRef = useRef(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const rotate = () => {
      angleRef.current += 0.05;
      if (gRef.current) {
        gRef.current.setAttribute('transform', `rotate(${angleRef.current}, 120, 120)`);
      }
      rafRef.current = requestAnimationFrame(rotate);
    };
    rafRef.current = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        paddingTop: '72px',
        paddingBottom: '48px',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '16px', flexShrink: 0 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#fff', letterSpacing: '-0.03em', textTransform: 'uppercase', margin: 0 }}>
          Global <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Reach</span>.
        </h2>
        <p style={{ fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#555', marginTop: '6px' }}>
          Predictive Analytics & World-Wide Sentiment
        </p>
      </div>

      {/* GLOBE SVG — 240px × 240px */}
      <div style={{ position: 'relative', width: 240, height: 240, flexShrink: 0 }}>
        <svg width="240" height="240" viewBox="0 0 240 240" style={{ position: 'absolute', top: 0, left: 0 }}>
          {/* Outer circle */}
          <circle cx="120" cy="120" r="110" stroke="#D4AF37" strokeWidth="0.6" fill="rgba(212,175,55,0.04)" />

          {/* Rotating latitude/longitude group */}
          <g ref={gRef}>
            <ellipse cx="120" cy="120" rx="110" ry="28" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.5" />
            <ellipse cx="120" cy="120" rx="110" ry="58" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.4" />
            <ellipse cx="120" cy="120" rx="110" ry="90" stroke="#D4AF37" strokeWidth="0.35" fill="none" opacity="0.35" />
            <ellipse cx="120" cy="120" rx="30" ry="110" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.4" />
            <ellipse cx="120" cy="120" rx="70" ry="110" stroke="#D4AF37" strokeWidth="0.4" fill="none" opacity="0.35" />
            {/* equator */}
            <ellipse cx="120" cy="120" rx="110" ry="4" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.7" />
          </g>

          {/* City hotspot dots (static — spread over globe face) */}
          {cities.map((c, i) => {
            const px = (c.x / 100) * 220 + 10;
            const py = (c.y / 100) * 220 + 10;
            return (
              <g key={i}>
                <circle cx={px} cy={py} r="4" fill={c.color} opacity="0.9">
                  <animate attributeName="r" values="4;7;4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.3;0.9" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={px} cy={py} r="2" fill={c.color} />
                <text x={px + 7} y={py + 4} fontSize="6" fill="#D4AF37" fontFamily="sans-serif" letterSpacing="0.05em">
                  {c.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* STATS BOXES — above market ticker */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginTop: '20px',
        width: '100%',
        maxWidth: '720px',
        padding: '0 24px',
        flexShrink: 0,
        boxSizing: 'border-box',
      }}>
        {[
          { label: "Global Sentiment", value: "98.4%", color: "#D4AF37" },
          { label: "Intl. Brands", value: "450+", color: "#fff" },
          { label: "Visitor Origin", value: "85 Countries", color: "#fff" },
          { label: "Pre-Booked", value: "65%", color: "#4ade80" },
        ].map((item, i) => (
          <div key={i} style={{
            padding: '14px 10px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
            textAlign: 'center',
            borderRadius: '2px',
          }}>
            <p style={{ fontSize: '8px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '6px' }}>{item.label}</p>
            <p style={{ fontSize: '1.25rem', fontWeight: 300, color: item.color, margin: 0 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Return button */}
      <button
        onClick={() => setCurrentView('dashboard')}
        style={{
          marginTop: '16px',
          background: 'none',
          border: 'none',
          color: '#D4AF37',
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
          cursor: 'pointer',
          borderBottom: '1px solid rgba(212,175,55,0.2)',
          paddingBottom: '3px',
          flexShrink: 0,
        }}
      >
        Return to Intelligence Hub
      </button>
    </div>
  );
};

export default GlobalFootfallGlobe;
