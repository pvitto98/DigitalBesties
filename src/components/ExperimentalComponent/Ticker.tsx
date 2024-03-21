import React from 'react';
import styles from "./Ticker.module.css";

interface TickerProps {
  image: string;
  repeat: number;
}

const Ticker: React.FC<TickerProps> = ({ image, repeat }) => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.rightToLeft}>
          {Array.from({ length: repeat }, (_, i) => (
            <img key={i} className={styles.longdigitalbesties} src={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;