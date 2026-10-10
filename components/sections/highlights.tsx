import highlights from "@/content/highlights.json"

import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

// В тексте плашек **двойные звёздочки** означают жирный шрифт.
function renderParagraph(text: string) {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  )
}

export function Highlights() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <Accordion className="grid gap-6 sm:grid-cols-2 sm:auto-rows-fr sm:items-stretch sm:has-[[aria-expanded=true]]:auto-rows-auto sm:has-[[aria-expanded=true]]:items-start">
        {highlights.map((highlight) => (
          <Card key={highlight.id}>
            <div className="px-(--card-spacing)">
              <AccordionItem
                value={highlight.id}
                className="border-b-0"
              >
                <AccordionTrigger className="font-heading text-lg font-medium">
                  {highlight.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground">
                    {highlight.paragraphs.map((paragraph, index) => (
                      <p key={index}>{renderParagraph(paragraph)}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          </Card>
        ))}
        {/* Пустая заглушка четвёртой плашки: держит сетку 2×2, только на десктопе. */}
        <Card aria-hidden className="hidden min-h-20 sm:flex" />
      </Accordion>
    </section>
  )
}
