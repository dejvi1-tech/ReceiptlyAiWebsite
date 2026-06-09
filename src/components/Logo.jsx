// Brand mark — teal rounded square with a receipt + AI sparkle, matching the iOS app icon.
export default function Logo({ size = 36 }) {
  const id = "lg" + size;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#18C894" />
          <stop offset="0.5" stopColor="#00A878" />
          <stop offset="1" stopColor="#008A63" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#${id})`} />
      <path
        d="M22 14h16a3 3 0 0 1 3 3v30l-4-2.4-4 2.4-4-2.4-4 2.4-4-2.4-4 2.4V17a3 3 0 0 1 3-3Z"
        fill="#fff"
        opacity="0.97"
      />
      <rect x="24" y="21" width="14" height="2.6" rx="1.3" fill="#00A878" />
      <rect x="24" y="27" width="14" height="2.6" rx="1.3" fill="#00A878" />
      <rect x="24" y="33" width="9" height="2.6" rx="1.3" fill="#00A878" />
      <path
        d="M45 12l1.4 3.6L50 17l-3.6 1.4L45 22l-1.4-3.6L40 17l3.6-1.4L45 12Z"
        fill="#fff"
      />
    </svg>
  );
}
