import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} ART.OHREY — Ирина Павлова</span>
        <Link href="/privacy-policy" className="hover:text-foreground">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  )
}
