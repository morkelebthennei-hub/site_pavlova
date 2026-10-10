import highlights from "@/content/highlights.json"

import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

// В тексте плашек **двойные звёздочки** — жирный шрифт, __двойное подчёркивание__ — подчёркнутый,
// «> » в начале абзаца — отступ слева (как табуляция).
function renderParagraph(text: string) {
  return text.split(/(\*\*[^*]+\*\*|__[^_]+__)/).map((part, index) => {
    if (part.startsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith("__")) {
      return (
        <u key={index} className="underline-offset-2">
          {part.slice(2, -2)}
        </u>
      )
    }
    return part
  })
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
                    {highlight.paragraphs.map((paragraph, index) => {
                      const indented = paragraph.startsWith("> ")
                      return (
                        <p key={index} className={indented ? "pl-5" : undefined}>
                          {renderParagraph(indented ? paragraph.slice(2) : paragraph)}
                        </p>
                      )
                    })}
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
