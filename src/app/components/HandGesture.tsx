type HandGestureProps = {
  pose?: 'point' | 'wave' | 'ok';
  className?: string;
  tone?: 'gold' | 'burgundy' | 'cream';
};

const tones = {
  gold: '#B38A4D',
  burgundy: '#7E1323',
  cream: '#F3D194',
};

export default function HandGesture({
  pose = 'point',
  className = 'w-10 h-10',
  tone = 'gold',
}: HandGestureProps) {
  const color = tones[tone];

  if (pose === 'wave') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={`hand-wave ${className}`} aria-hidden="true">
        <path
          d="M26 34V16.5a3.2 3.2 0 016.4 0V32m-6.4 2V20.2a3 3 0 016 0V33m6.4-9.6a3 3 0 016 0V36m-24.8-4.8a3 3 0 00-6 0v9.4c0 10 7.4 16.8 17.2 16.8 8.6 0 15.2-5.2 15.2-14.2V28.8a3 3 0 00-6 0"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (pose === 'ok') {
    return (
      <svg viewBox="0 0 64 64" fill="none" className={`hand-ok ${className}`} aria-hidden="true">
        <path
          d="M28 30c-3.6-3.4-8.4.2-6.6 4.6 2.6 6.4 10 12.4 16.6 12.4 8 0 14-6.2 14-14.2V22.6a3 3 0 00-6 0V32m-6.4-12.2a3 3 0 016 0V32m-12.4-8.6a3 3 0 016 0V33M22 36.4c-2.8 1.4-4.8 4.2-4.8 7.8 0 5.8 5.4 10 12 10"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none" className={`hand-point ${className}`} aria-hidden="true">
      <path
        d="M28 14.5V32m0-17.5a3.2 3.2 0 016.4 0V32m6.4-8.4a3 3 0 016 0V36.2M22 24.8a3 3 0 00-6 0v10.6c0 10.2 7.6 17 17.6 17 8.8 0 15.4-5.4 15.4-14.6V28.8a3 3 0 00-6 0"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.2 8v8.6"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
