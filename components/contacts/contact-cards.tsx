import Image from "next/image"

import contacts from "@/content/contacts.json"
import { Card, CardContent } from "@/components/ui/card"
import { VkIcon } from "@/components/icons/vk-icon"
import { TelegramIcon } from "@/components/icons/telegram-icon"
import { InstagramIcon } from "@/components/icons/instagram-icon"
import { PhoneCard } from "@/components/contacts/phone-card"

export function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <PhoneCard />

      <a href={contacts.vk.url} target="_blank" rel="noopener noreferrer">
        <Card className="transition-colors hover:bg-muted/50">
          <CardContent className="flex items-center gap-4">
            <span className="relative size-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src={contacts.vk.avatar}
                alt={contacts.vk.label}
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">{contacts.vk.label}</p>
              <span className="flex items-center gap-1.5 font-medium">
                <VkIcon className="size-4" />
                {contacts.vk.handle}
              </span>
            </div>
          </CardContent>
        </Card>
      </a>

      <a href={contacts.telegram.url} target="_blank" rel="noopener noreferrer">
        <Card className="transition-colors hover:bg-muted/50">
          <CardContent className="flex items-center gap-4">
            <TelegramIcon className="size-10 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">{contacts.telegram.label}</p>
              <p className="font-medium">{contacts.telegram.handle}</p>
            </div>
          </CardContent>
        </Card>
      </a>

      <a href={contacts.instagram.url} target="_blank" rel="noopener noreferrer">
        <Card className="transition-colors hover:bg-muted/50">
          <CardContent className="flex items-center gap-4">
            <span className="relative size-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src={contacts.instagram.avatar}
                alt={contacts.instagram.label}
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">{contacts.instagram.label}</p>
              <span className="flex items-center gap-1.5 font-medium">
                <InstagramIcon className="size-4" />
                {contacts.instagram.handle}
              </span>
            </div>
          </CardContent>
        </Card>
      </a>
    </div>
  )
}
