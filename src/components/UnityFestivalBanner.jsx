import React, { useEffect, useState } from 'react';

const UNITY_FESTIVAL_DATE = new Date('2026-06-13T12:00:00-04:00');

function getTimeRemaining(targetDate) {
  const total = targetDate - new Date();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

const UnityFestivalBanner = () => {
  const [timeLeft, setTimeLeft] = useState(
    getTimeRemaining(UNITY_FESTIVAL_DATE),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(UNITY_FESTIVAL_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="kc-bg-navy-dark w-full py-3 text-center">
        <span className="kc-script">
          The Unity Festival is happening now at Tampa Water Works Park!
        </span>
      </div>
    );
  }

  return (
    <div className="kc-bg-navy-dark w-full py-3 flex flex-col items-center">
      <span className="kc-tagline kc-tagline--white mb-2">
        2nd Annual Unity Festival &mdash; Countdown
      </span>
      <div
        className="flex gap-4 text-xl font-bold tabular-nums"
        style={{ color: 'var(--kc-gold-light)' }}
      >
        <span>{timeLeft.days}d</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
      </div>
      <span
        className="kc-label mt-2 text-center"
        style={{ color: 'rgba(255,255,255,0.55)' }}
      >
        June 13, 2026 &mdash; Tampa Water Works Park &mdash; 12:00 PM
      </span>
    </div>
  );
};

export default UnityFestivalBanner;
