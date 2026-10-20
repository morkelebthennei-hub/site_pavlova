import testimonials from "@/content/testimonials.json"

import type { Review } from "@/components/reviews/review-card"

// Заглушки (placeholder) показываем только при локальной разработке — в боевой сборке на сайт попадают лишь настоящие отзывы.
const showPlaceholders = process.env.NODE_ENV !== "production"

export const reviews: Review[] = (testimonials as Review[]).filter(
  (review) => !review.placeholder || showPlaceholders
)
