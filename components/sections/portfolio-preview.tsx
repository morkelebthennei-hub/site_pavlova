import Link from "next/link"

import portfolio from "@/content/portfolio.json"
import { Button } from "@/components/ui/button"
import { PortfolioCarousel } from "@/components/portfolio/portfolio-carousel"

export function PortfolioPreview() {
  return (
    <section id="portfolio" className="mx-auto max-w-5xl px-4 py-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">Портфолио</h2>
        <Button render={<Link href="/portfolio" />} nativeButton={false} variant="link">
          Все работы
        </Button>
      </div>
      <div className="mt-10">
        <PortfolioCarousel items={portfolio} />
      </div>
    </section>
  )
}
