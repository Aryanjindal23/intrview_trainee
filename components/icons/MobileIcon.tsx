import * as React from 'react';

const MobileIcon = ({
  width = 32,
  height = 32,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <rect
      x="8"
      y="6"
      width="16"
      height="20"
      rx="4"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="2"
    />
    <rect x="12" y="10" width="8" height="12" rx="2" fill="#06b6d4" />
    <circle cx="16" cy="22" r="1.5" fill="#a78bfa" />
    <rect x="14" y="8" width="4" height="2" rx="1" fill="#fff" />
  </svg>
);

export default MobileIcon;
