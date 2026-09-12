import portfolio from "@/content/portfolio.json"
import { PortfolioPager } from "@/components/portfolio/portfolio-pager"

// Каждый диапазон ниже самодостаточен (сам себя ограничивает по min/max),
// поэтому они не пересекаются и не зависят от того, в каком порядке
// Tailwind расположит правила в итоговом CSS.
//
//               ширина <768   768–959   960–1919   ≥1920
// портрет         1×1(бакет2)  3-кол(3b)  3-кол(3a)  4-кол(4)
// альбом          2×1(бакет1)  2×1(бакет1) 3-кол(3a) 4-кол(4)
export function PortfolioGrid() {
  return (
    <>
      {/* Мобильная горизонтальная (включая крупные телефоны до 959px): 1 строка × 2 колонки */}
      <div className="hidden max-[959px]:landscape:block">
        <PortfolioPager items={portfolio} pageSize={2} gridClassName="grid-cols-2" />
      </div>

      {/* Мобильная вертикальная: 2 строки × 1 колонка */}
      <div className="hidden max-[767px]:portrait:block">
        <PortfolioPager items={portfolio} pageSize={2} gridClassName="grid-cols-1" />
      </div>

      {/* Планшет-портрет в промежутке между мобильным и «средним» диапазоном */}
      <div className="hidden min-[768px]:max-[959px]:portrait:block">
        <PortfolioPager items={portfolio} pageSize={6} gridClassName="grid-cols-3" />
      </div>

      {/* Средние и небольшие разрешения (960–1919, любая ориентация): 2 строки × 3 колонки */}
      <div className="hidden min-[960px]:max-[1919px]:block">
        <PortfolioPager items={portfolio} pageSize={6} gridClassName="grid-cols-3" />
      </div>

      {/* FullHD и выше: 3 строки × 4 колонки */}
      <div className="hidden min-[1920px]:block">
        <PortfolioPager items={portfolio} pageSize={12} gridClassName="grid-cols-4" />
      </div>
    </>
  )
}
