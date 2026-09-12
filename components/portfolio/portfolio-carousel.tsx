"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { PortfolioCard } from "@/components/portfolio/portfolio-card"

type PortfolioItem = {
  id: string
  title: string
  description: string
  image: string
}

export function PortfolioCarousel({ items }: { items: PortfolioItem[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="px-1">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="sm:basis-1/2 md:basis-1/3">
            <PortfolioCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
