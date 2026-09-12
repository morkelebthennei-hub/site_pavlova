"use client"

import { useState } from "react"
import { Phone } from "lucide-react"

import contacts from "@/content/contacts.json"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PhoneCard() {
  const [revealed, setRevealed] = useState(false)

  return (
    <Card>
      <CardContent className="flex items-center gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Phone className="size-5" />
        </span>
        <div>
          <p className="text-sm text-muted-foreground">Телефон</p>
          {revealed ? (
            <a href={contacts.phone.href} className="font-medium hover:underline">
              {contacts.phone.display}
            </a>
          ) : (
            <Button
              variant="link"
              className="h-auto p-0 font-medium"
              onClick={() => setRevealed(true)}
            >
              Показать номер
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
