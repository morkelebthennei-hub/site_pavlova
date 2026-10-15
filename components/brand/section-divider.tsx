// Декоративный разделитель между секциями: тонкая линия, затухающая к краям, и три маленьких кристалла по центру.
// Цвета — из переменных знака логотипа (--logo-c*), поэтому подстраивается под тему.
export function SectionDivider() {
  return (
    <div aria-hidden="true" className="mx-auto flex max-w-5xl items-center gap-4 px-4">
      <span
        className="h-px flex-1 opacity-70"
        style={{ background: "linear-gradient(to right, transparent, var(--logo-c3))" }}
      />
      <svg viewBox="0 0 60 20" className="h-5 w-[60px] shrink-0" focusable="false">
        <path d="M30 0 L38 10 L30 20 L22 10 Z" fill="var(--logo-c2)" />
        <path d="M30 4.5 L34 10 L30 15.5 L26 10 Z" fill="var(--logo-c4)" opacity="0.9" />
        <path d="M9 5.5 L14 10 L9 14.5 L4 10 Z" fill="var(--logo-c3)" />
        <path d="M51 5.5 L56 10 L51 14.5 L46 10 Z" fill="var(--logo-c3)" />
      </svg>
      <span
        className="h-px flex-1 opacity-70"
        style={{ background: "linear-gradient(to left, transparent, var(--logo-c3))" }}
      />
    </div>
  )
}
