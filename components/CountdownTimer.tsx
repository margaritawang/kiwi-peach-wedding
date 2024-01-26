"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { BodyText } from "@/components/BodyText";

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
      <BodyText className={className}>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </BodyText>
    );
  }
};
