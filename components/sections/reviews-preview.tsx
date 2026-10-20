import Link from "next/link"

import { reviews } from "@/lib/reviews"

import { ReviewCard } from "@/components/reviews/review-card"
import { Button } from "@/components/ui/button"

export function ReviewsPreview() {
  if (reviews.length === 0) return null

  return (
    <section id="reviews" className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight">Отзывы</h2>
        <Button render={<Link href="/reviews" />} nativeButton={false} variant="link">
          Все отзывы
        </Button>
      </div>
      <div className="mt-10 grid gap-6">
        {reviews.slice(0, 2).map((review, index) => (
          <ReviewCard key={review.id} review={review} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
