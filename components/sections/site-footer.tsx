import Link from "next/link"

import contacts from "@/content/contacts.json"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} ART.OHREY — Ирина Павлова</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={`mailto:${contacts.email}`} className="hover:text-foreground">
            {contacts.email}
          </a>
          <Link href="/privacy-policy" className="hover:text-foreground">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
