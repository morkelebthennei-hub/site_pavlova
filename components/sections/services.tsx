import services from "@/content/services.json"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-24">
      <h2 className="text-3xl font-semibold tracking-tight">Услуги</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
