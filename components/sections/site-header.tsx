import Link from "next/link"

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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-2 sm:h-16 sm:flex-nowrap sm:py-0">
        <Link href="/" className="order-1 text-lg font-semibold tracking-wide">
          ART.OHREY
        </Link>
        <nav className="order-3 flex w-full items-center justify-between pb-1 sm:order-2 sm:ml-auto sm:w-auto sm:gap-6 sm:pb-0">
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
