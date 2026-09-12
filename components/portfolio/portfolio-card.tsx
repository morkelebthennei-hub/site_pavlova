"use client"

import Image from "next/image"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type PortfolioItem = {
  placeholder?: string
  id: string
  title: string
  description: string
  image: string
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Dialog>
      <figure className="overflow-hidden rounded-2xl border border-border bg-card">
        <DialogTrigger
          className="relative block aspect-square w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left"
          aria-label={`Открыть «${item.title}» в полном размере`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover"
          />
          {item.placeholder && (
            <span className="absolute top-3 left-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              {item.placeholder}
            </span>
          )}
        </DialogTrigger>
        <figcaption className="p-5">
          <h3 className="font-medium">{item.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </figcaption>
      </figure>

      <DialogPortal>
        <DialogOverlay className="bg-black/85" />
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
        >
          <DialogTitle className="sr-only">{item.title}</DialogTitle>
          <div className="relative h-[85vh] w-[85vw]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="85vw"
              className="object-contain"
            />
          </div>
          <DialogClose
            render={
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:bg-white/10 hover:text-white"
              />
            }
          >
            <XIcon className="size-6" />
            <span className="sr-only">Закрыть</span>
          </DialogClose>
        </DialogPrimitive.Popup>
      </DialogPortal>
    </Dialog>
  )
}
