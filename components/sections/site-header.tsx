import Image from "next/image"
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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4 py-2 sm:flex-nowrap">
        <Link href="/" aria-label="ART.OHREY — на главную" className="order-1 flex items-center">
          <Image
            src="/images/logo/logo-light.png"
            alt="ART.OHREY"
            width={600}
            height={634}
            className="h-36 w-auto dark:hidden"
          />
          <Image
            src="/images/logo/logo-dark.png"
            alt=""
            aria-hidden
            width={600}
            height={634}
            className="hidden h-36 w-auto dark:block"
          />
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
