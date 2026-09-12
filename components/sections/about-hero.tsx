import Link from "next/link"

import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-5xl gap-10 px-4 py-24 md:grid-cols-2 md:items-center md:gap-16"
    >
      <div>
        <p className="text-sm font-medium tracking-widest text-primary uppercase">
          ART.OHREY
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Ирина Павлова — витражи как искусство для дома
        </h1>
        <p className="mt-6 text-lg text-pretty text-muted-foreground">
          Современные витражные панно и картины, которые становятся самостоятельным
          украшением интерьера — не оформление окон, а отдельное произведение на стене.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button render={<Link href="/portfolio" />} nativeButton={false} size="lg">
            Смотреть портфолио
          </Button>
          <Button
            render={<Link href="/contacts" />}
            nativeButton={false}
            size="lg"
            variant="outline"
          >
            Обсудить заказ
          </Button>
        </div>
      </div>
      <div
        className="aspect-square rounded-2xl border border-border"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, var(--primary), var(--accent) 35%, var(--secondary) 65%, var(--primary))",
        }}
        aria-hidden
      />
    </section>
  )
}
