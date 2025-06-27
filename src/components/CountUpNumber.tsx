import React from 'react';
import CountUp from 'react-countup';

interface CountUpNumberProps {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  // If end is a string with non-numeric characters (e.g., "25+"), separate number and suffix
  let numericEnd = 0;
  let suffixFromValue = suffix;

  if (typeof end === 'string') {
    const match = end.match(/(\d+)(.*)/);
    if (match) {
      numericEnd = parseInt(match[1], 10);
      suffixFromValue = match[2] || suffix;
    }
  } else {
    numericEnd = end;
  }

  return (
    <span className={className}>
      {prefix}
      <CountUp end={numericEnd} duration={duration} />
      {suffixFromValue}
    </span>
  );
};

export default CountUpNumber;
