import React, { useEffect, useState } from 'react';

const UNITY_FESTIVAL_DATE = new Date('2025-06-07T12:30:00-04:00'); // June 7, 2025, 12:30 PM EDT

function getTimeRemaining(targetDate) {
  const total = targetDate - new Date();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

const UnityFestivalBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(UNITY_FESTIVAL_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(UNITY_FESTIVAL_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <div className="w-full bg-accent text-primary py-3 text-center font-heading text-lg">
        The Unity Festival is happening now at Curtis Hixon Park Main Stage!
      </div>
    );
  }

  return (
    <div className="w-full bg-accent text-primary py-3 flex flex-col items-center font-heading">
      <span className="text-lg mb-1 font-bold">Unity Festival Countdown</span>
      <div className="flex gap-4 text-xl font-bold">
        <span>{timeLeft.days}d</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
      </div>
      <span className="text-xs mt-1 text-center">
        June 7, 2025 &mdash; Curtis Hixon Park Main Stage<br />
        Worship begins at 12:30 PM
      </span>
    </div>
  );
};

export default UnityFestivalBanner;