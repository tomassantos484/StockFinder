export const MacbookMockup = () => {
  return (
    <svg 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* MacBook Body */}
      <path 
        d="M1200 680.844C1200 714.617 1172.71 742 1139.06 742H60.9375C27.2871 742 0 714.617 0 680.844V61.1562C0 27.3828 27.2871 0 60.9375 0H1139.06C1172.71 0 1200 27.3828 1200 61.1562V680.844Z" 
        fill="#1E1E1E"
      />
      {/* Screen Frame */}
      <path 
        d="M1139.06 20H60.9375C38.3789 20 20 38.4609 20 61.1562V680.844C20 703.539 38.3789 722 60.9375 722H1139.06C1161.62 722 1180 703.539 1180 680.844V61.1562C1180 38.4609 1161.62 20 1139.06 20Z" 
        fill="#333333"
      />
      {/* Screen */}
      <path 
        d="M1120 40H80C57.9086 40 40 57.9086 40 80V662C40 684.091 57.9086 702 80 702H1120C1142.09 702 1160 684.091 1160 662V80C1160 57.9086 1142.09 40 1120 40Z" 
        fill="white"
      />
      {/* Bottom/Keyboard Section */}
      <path
        d="M0 742L100 702H1100L1200 742H0Z"
        fill="#1E1E1E"
      />
      <path
        d="M200 742L280 702H920L1000 742H200Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient 
          id="paint0_linear" 
          x1="600" 
          y1="702" 
          x2="600" 
          y2="742" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A7F83"/>
          <stop offset="1" stopColor="#0B0B0E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}; 