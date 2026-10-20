import type { Metadata } from "next";

import { reviews } from "@/lib/reviews";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ReviewCard } from "@/components/reviews/review-card";
import { ReviewsJsonLd } from "@/components/reviews/reviews-json-ld";

const hasRealReviews = reviews.some((review) => !review.placeholder);

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы заказчиков витражных картин ART.OHREY и фото работ в их интерьерах.",
  alternates: {
    canonical: "/reviews",
  },
  // Пока на странице только заглушки — закрываем от индексации.
  ...(hasRealReviews ? {} : { robots: { index: false, follow: false } }),
};

export default function ReviewsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", path: "/" },
          { name: "Отзывы", path: "/reviews" },
        ]}
      />
      <ReviewsJsonLd reviews={reviews} />
      <h1 className="text-3xl font-semibold tracking-tight">Отзывы</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Слова тех, кто уже живёт с витражной картиной, и фото работ в их интерьерах.
      </p>
      <div className="mt-10 grid gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
