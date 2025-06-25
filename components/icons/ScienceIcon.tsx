import * as React from 'react';

const ScienceIcon = ({
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
      y="10"
      width="16"
      height="12"
      rx="4"
      fill="#101624"
      stroke="#06b6d4"
      strokeWidth="2"
    />
    <ellipse cx="16" cy="18" rx="4" ry="2" fill="#a78bfa" />
    <circle cx="16" cy="14" r="2" fill="#fff" />
    <path
      d="M14 16h4"
      stroke="#06b6d4"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <rect x="14" y="12" width="4" height="2" rx="1" fill="#06b6d4" />
  </svg>
);

export default ScienceIcon;
