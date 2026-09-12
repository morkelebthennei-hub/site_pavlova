export function VkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="10" fill="#0077FF" />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill="#fff"
      >
        VK
      </text>
    </svg>
  )
}
