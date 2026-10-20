import testimonials from "@/content/testimonials.json"

import type { Review } from "@/components/reviews/review-card"

const MONTHS = [
  "январ",
  "феврал",
  "март",
  "апрел",
  "ма",
  "июн",
  "июл",
  "август",
  "сентябр",
  "октябр",
  "ноябр",
  "декабр",
]

// «июль 2026» → «2026-07» (для сортировки и разметки). Нет даты или не разобрали — undefined.
export function reviewIsoDate(review: Review): string | undefined {
  const match = review.date?.toLowerCase().match(/([а-яё]+)\s+(\d{4})/)
  if (!match) return undefined
  const month = MONTHS.findIndex((stem) => match[1].startsWith(stem))
  if (month === -1) return undefined
  return `${match[2]}-${String(month + 1).padStart(2, "0")}`
}

// Заглушки (placeholder) показываем только при локальной разработке — в боевой сборке на сайт попадают лишь настоящие отзывы.
const showPlaceholders = process.env.NODE_ENV !== "production"

// Сначала самые свежие; отзывы без разобранной даты — в конце, в исходном порядке.
export const reviews: Review[] = (testimonials as Review[])
  .filter((review) => !review.placeholder || showPlaceholders)
  .map((review, index) => ({ review, index, iso: reviewIsoDate(review) }))
  .sort((a, b) => {
    if (a.iso && b.iso) return a.iso < b.iso ? 1 : a.iso > b.iso ? -1 : a.index - b.index
    if (a.iso) return -1
    if (b.iso) return 1
    return a.index - b.index
  })
  .map(({ review }) => review)
