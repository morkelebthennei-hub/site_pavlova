export function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="20" fill="#26A5E4" />
      <path
        d="M9 20.2 29.5 12c1-.4 1.9.3 1.5 1.8l-3.3 15.6c-.3 1.3-1.1 1.6-2.1 1l-5.9-4.4-2.8 2.7c-.3.3-.6.5-1.1.5l.4-5.9 10.7-9.7c.5-.4-.1-.6-.7-.2L13 19.4l-5.7-1.8c-1.2-.4-1.3-1.2.3-1.4Z"
        fill="#fff"
      />
    </svg>
  )
}
