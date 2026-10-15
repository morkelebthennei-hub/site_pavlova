import Image from "next/image"

import services from "@/content/services.json"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">Услуги</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <div className="mb-2">
                <Image
                  src={`/images/icons/service-${service.icon}-light.png`}
                  alt=""
                  width={64}
                  height={64}
                  className="size-16 dark:hidden"
                />
                <Image
                  src={`/images/icons/service-${service.icon}-dark.png`}
                  alt=""
                  width={64}
                  height={64}
                  className="hidden size-16 dark:block"
                />
              </div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
