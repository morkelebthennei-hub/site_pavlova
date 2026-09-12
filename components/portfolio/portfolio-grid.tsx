import portfolio from "@/content/portfolio.json"
import { PortfolioCard } from "@/components/portfolio/portfolio-card"

export function PortfolioGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {portfolio.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  )
}
