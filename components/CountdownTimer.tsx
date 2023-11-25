"use client";

import { useCountdown } from "@/hooks/useCountdown";

export const CountdownTimer = ({
  targetDate,
  className,
}: {
  targetDate: string;
  className?: string;
}) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return `Time is up!`;
  } else {
    return (
      <p className={className}>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </p>
    );
  }
};
