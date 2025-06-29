import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimeBox = ({ label, value }) => (
  <div className="time-box">
    <div className="time-value">{String(value).padStart(2, '0')}</div>
    <div className="time-label">{label}</div>
  </div>
);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="countdown-ended">¡Cuenta atrás finalizada!</div>;
  }

  return (
    <div className="countdown-container">
      <TimeBox label="DÍAS" value={days} />
      <TimeBox label="HORAS" value={hours} />
      <TimeBox label="MINUTOS" value={minutes} />
      <TimeBox label="SEGUNDOS" value={seconds} />
    </div>
  );
};

const ElegantCountdown = ({ targetDate }) => {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <Countdown date={new Date(targetDate)} renderer={renderer} />
    </motion.div>
  );
};

export default ElegantCountdown;
