"use client"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

type HeroPhoto = {
  id: string
  image: string
  alt: string
}

export function AboutHeroCarousel({ photos }: { photos: HeroPhoto[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem key={photo.id}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {photos.length > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  )
}
