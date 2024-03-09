// DripEffect.tsx
import React from 'react';
import './DripEffect.module.css';

const DripEffect: React.FC = () => {
  const drips = Array.from({ length: 20 }, (_, i) => <div key={i} className={`drip drip-${i + 1}`} />);

  return (
    <div className="cont">
      {drips}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default DripEffect;