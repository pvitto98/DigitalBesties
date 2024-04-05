import { FunctionComponent } from 'react';
import Wave from 'react-wavify';

interface CustomWaveProps {
  fill: string;
  backgroundColor: string;
}

const CustomWave: FunctionComponent<CustomWaveProps> = ({ fill, backgroundColor }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Wave
      fill={fill}
      paused={false}
      options={{
        height: 50,
        amplitude: isMobile ? 30 : 40,
        speed: isMobile ? 0.12 : 0.2,
        points: isMobile ? 3 : 5,
      }}
      style={{position: "relative", top: "0px", zIndex: 1, backgroundColor: backgroundColor, scale: "1.08"}}
    />
  );
};

export default CustomWave;