type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className, title = "WITT" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 479.79 156.58"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="witt-magenta"
          x1="164.09"
          y1="127.77"
          x2="164.09"
          y2="17.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#a51449" />
          <stop offset=".41" stopColor="#cc225c" />
          <stop offset="1" stopColor="#d35577" />
        </linearGradient>
        <linearGradient
          id="witt-blue"
          x1="130.57"
          y1="95.2"
          x2="151.69"
          y2="84.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#003e85" />
          <stop offset="1" stopColor="#0f80ba" />
        </linearGradient>
        <linearGradient
          id="witt-green"
          x1="75.14"
          y1="153.64"
          x2="75.14"
          y2="84.17"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#005f5b" />
          <stop offset=".82" stopColor="#00856b" />
          <stop offset="1" stopColor="#379573" />
        </linearGradient>
      </defs>
      <path
        fill="url(#witt-magenta)"
        d="M186.24,15.24l-35.81,67.36-8.63-15.72-.37-.57h-29.95l-.67,1.26,13.82,25.16,13.95,25.41c2.41,4.4,7.03,7.13,12.05,7.13h.09c5.06-.03,9.67-2.83,12.05-7.29L217.38,15.24h-31.14Z"
      />
      <path fill="#4e4b4a" d="M252.06,121.72h-24.55V16.35h24.55v105.37Z" />
      <path
        fill="#4e4b4a"
        d="M361.68,36.42h-36.25v85.3h-24.55V36.42h-36.01v-20.07h96.82v20.07Z"
      />
      <path
        fill="#4e4b4a"
        d="M469.26,36.42h-36.25v85.3h-24.55V36.42h-36.01v-20.07h96.82v20.07Z"
      />
      <polygon
        fill="url(#witt-blue)"
        points="139.63 67.42 125.48 94.05 136.9 115.07 150.43 82.6 141.43 66.31 139.63 67.42"
      />
      <path
        fill="url(#witt-green)"
        d="M110.34,66.31l-21.13,39.75-21.51-39.16L40.31,15.83l-.31-.58H8.79l28.11,52.7,40.45,73.65c2.42,4.4,7.03,7.13,12.05,7.13h.09c5.06-.03,9.67-2.83,12.04-7.29l39.93-75.11h-31.14Z"
      />
    </svg>
  );
}
