import Link from "next/link"

import { LogoMark } from "@/components/brand/logo-mark"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/about", label: "Обо мне" },
  { href: "/#services", label: "Услуги" },
  { href: "/portfolio", label: "Портфолио" },
  { href: "/contacts", label: "Контакты" },
]

export function SiteHeader() {
  return (
    <header className="glass-bar border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-2 sm:flex-nowrap">
        <Link
          href="/"
          aria-label="ArtOhrey — на главную"
          className="order-1 flex flex-col items-center gap-1 py-1"
        >
          <LogoMark className="h-20 w-auto sm:h-24" />
          <span className="font-(family-name:--font-brand) text-2xl leading-none font-semibold tracking-wide">
            ArtOhrey
          </span>
        </Link>
        <nav className="order-3 flex w-full items-center justify-between pt-1 pb-1 sm:order-2 sm:ml-auto sm:w-auto sm:gap-6 sm:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="order-2 sm:order-3 sm:ml-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
