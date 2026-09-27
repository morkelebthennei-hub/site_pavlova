import highlights from "@/content/highlights.json"

import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function Highlights() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <Accordion className="grid gap-6 sm:grid-cols-2 sm:items-start">
        {highlights.map((highlight) => (
          <Card key={highlight.id}>
            <div className="px-(--card-spacing)">
              <AccordionItem value={highlight.id} className="border-b-0">
                <AccordionTrigger className="font-heading text-lg font-medium">
                  {highlight.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground">
                    {highlight.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          </Card>
        ))}
      </Accordion>
    </section>
  )
}
