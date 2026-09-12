export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="instagram-gradient" x1="0" y1="40" x2="40" y2="0">
          <stop offset="0%" stopColor="#FEE411" />
          <stop offset="30%" stopColor="#F0284D" />
          <stop offset="65%" stopColor="#C92FA7" />
          <stop offset="100%" stopColor="#5B51DB" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#instagram-gradient)" />
      <rect
        x="9"
        y="9"
        width="22"
        height="22"
        rx="6"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
      />
      <circle cx="20" cy="20" r="5.5" fill="none" stroke="#fff" strokeWidth="2.2" />
      <circle cx="27" cy="13" r="1.4" fill="#fff" />
    </svg>
  )
}
