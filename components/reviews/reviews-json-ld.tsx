import { siteConfig } from "@/lib/site-config"

import type { Review } from "@/components/reviews/review-card"

// Разметка Review только для НАСТОЯЩИХ отзывов: заглушки (placeholder) в разметку не попадают.
export function ReviewsJsonLd({ reviews }: { reviews: Review[] }) {
  const real = reviews.filter((review) => !review.placeholder)
  if (real.length === 0) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": real.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      itemReviewed: { "@id": `${siteConfig.url}/#organization` },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
