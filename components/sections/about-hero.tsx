import Link from "next/link"

import { Button } from "@/components/ui/button"
import { getExperienceLabel } from "@/lib/experience"

const stats = [
  { value: getExperienceLabel(), label: "опыта" },
  { value: "103", label: "витража создано" },
  { value: "49", label: "уже нашли свой дом" },
]

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
          Добро пожаловать в мир современного витража
        </h1>
        <p className="mt-6 text-lg text-pretty text-muted-foreground">
          Меня зовут Ирина — художник и создатель уникальных современных витражей, которые
          призваны украсить и освежить любой интерьер.
        </p>
        <p className="mt-4 text-pretty text-muted-foreground">
          Я нахожу вдохновение в красоте природы, игре света и цвета. Мои работы отражают
          простоту и изящество, погружая в мир гармонии и уюта. Каждое витражное изделие
          уникально — я создаю их с любовью и заботой, стремясь передать частичку моей души
          через каждую крошечную деталь.
        </p>
        <ul className="mt-4 space-y-1 text-muted-foreground">
          <li>— оживляю комиксы на стекле</li>
          <li>— рисую витражные интерпретации героев аниме и компьютерных игр</li>
          <li>— и особая любовь — нуарные мистические сюжеты</li>
        </ul>
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold text-primary">{stat.value}</dd>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
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
