import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ExperienceStat } from "@/components/experience-stat"
import { AboutHeroCarousel } from "@/components/sections/about-hero-carousel"
import heroPhotos from "@/content/about-hero-photos.json"

const stats = [{ value: "103", label: "витража создано" }]

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
          Добро пожаловать в мир картин, которые никогда не выглядят одинаково
        </h1>
        <p className="mt-6 text-lg text-pretty text-muted-foreground">
          Картина на настоящем стекле. Ручная роспись. В единственном экземпляре.
        </p>
        <p className="mt-4 text-lg text-pretty text-muted-foreground">
          Меня зовут Павлова Ирина. Мои картины не имеют тиража. Внимание к каждой детали и
          природа самого стекла делают невозможным создание двух одинаковых работ. Это тихая
          роскошь для тех, кто ценит подлинники.
        </p>
        <dl className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="text-center">
            <dt className="sr-only">опыта</dt>
            <ExperienceStat />
            <p className="text-sm text-muted-foreground">опыта</p>
          </div>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold text-primary">{stat.value}</dd>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
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
      <AboutHeroCarousel photos={heroPhotos} />
    </section>
  )
}
