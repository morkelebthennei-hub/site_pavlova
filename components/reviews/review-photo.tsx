"use client"

import Image from "next/image"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Фото в отзыве — миниатюра: по клику открывается на весь экран, закрывается кликом в любую точку
// (как в портфолио, но без эффекта проявления).
// На телефоне — широкая полоска сверху, на компьютере — узкая колонка (вертикальные фото 4:5, горизонтальные — на всю высоту карточки).
export function ReviewPhoto({
  src,
  alt,
  position,
  portrait = false,
}: {
  src: string
  alt: string
  position?: string
  portrait?: boolean
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={`relative block aspect-[21/9] w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left ${
          portrait ? "md:aspect-[4/5]" : "md:aspect-auto md:h-full md:min-h-44"
        }`}
        aria-label={`Открыть фото в полном размере: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 280px, 100vw"
          className="object-cover"
          style={position ? { objectPosition: position } : undefined}
        />
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="bg-black/85" />
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <DialogClose
            className="relative block h-[85vh] w-[85vw] cursor-zoom-out overflow-hidden border-0 bg-transparent p-0"
            aria-label="Закрыть просмотр фото"
          >
            <Image src={src} alt={alt} fill sizes="85vw" className="object-contain" />
          </DialogClose>
        </DialogPrimitive.Popup>
      </DialogPortal>
    </Dialog>
  )
}
