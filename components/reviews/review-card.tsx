import { LogoMark } from "@/components/brand/logo-mark"
import { ReviewPhoto } from "@/components/reviews/review-photo"

export type Review = {
  id: string
  name: string
  service?: string
  date?: string
  text: string
  image: string | null
  imagePosition?: string
  portrait?: boolean
  placeholder?: boolean
}

function PhotoPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--logo-c3)]/15 via-transparent to-[var(--logo-c2)]/20"
    >
      <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <path d="M0 0 L70 0 L30 60 Z" fill="var(--logo-c3)" opacity="0.12" />
        <path d="M200 150 L120 150 L170 80 Z" fill="var(--logo-c2)" opacity="0.14" />
        <path d="M200 0 L150 0 L200 50 Z" fill="var(--logo-c3)" opacity="0.1" />
        <path d="M0 150 L50 150 L0 100 Z" fill="var(--logo-c4)" opacity="0.1" />
      </svg>
      <div className="relative flex flex-col items-center gap-3 text-center">
        <LogoMark className="h-16 w-auto opacity-60" />
        <span className="px-4 text-sm text-muted-foreground">
          Здесь будет фото работы в интерьере заказчика
        </span>
      </div>
    </div>
  )
}

export function ReviewCard({ review, reverse = false }: { review: Review; reverse?: boolean }) {
  return (
    <article
      className={`glass relative overflow-hidden rounded-2xl border border-border md:grid ${
        review.portrait ? "md:grid-cols-[4fr_7fr]" : "md:grid-cols-[5fr_6fr]"
      }`}
    >
      <div className={reverse ? "relative md:order-2" : "relative"}>
        {review.placeholder && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            Заглушка
          </span>
        )}
        {review.image ? (
          <ReviewPhoto
            src={review.image}
            alt={`Работа в интерьере заказчика: ${review.name}`}
            position={review.imagePosition}
            portrait={review.portrait}
          />
        ) : (
          <PhotoPlaceholder />
        )}
      </div>
      <div
        className={`flex flex-col gap-6 p-6 md:p-8 ${
          review.portrait ? "justify-center md:gap-8" : "justify-between"
        }`}
      >
        <div>
          <svg
            viewBox="0 0 40 30"
            className="h-6 w-8"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M0 30 V16 Q0 4 12 0 V6 Q6 8 6 14 H14 V30 Z M22 30 V16 Q22 4 34 0 V6 Q28 8 28 14 H36 V30 Z"
              fill="var(--logo-c2)"
              opacity="0.85"
            />
          </svg>
          <blockquote
            className={`mt-4 leading-relaxed text-muted-foreground ${
              review.portrait ? "text-base md:text-lg" : "text-base"
            }`}
          >
            {review.text}
          </blockquote>
        </div>
        <footer>
          <p className="font-medium">{review.name}</p>
          {(review.service || review.date) && (
            <p className="mt-1 text-sm text-muted-foreground">
              {[review.service, review.date].filter(Boolean).join(" · ")}
            </p>
          )}
        </footer>
      </div>
    </article>
  )
}
