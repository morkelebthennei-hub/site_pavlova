import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Художник Ирина Павлова — современный витраж как арт-объект для интерьера.",
  alternates: {
    canonical: "/about",
  },
};

const steps = [
  {
    title: "Эскиз",
    description: "Обсуждаем сюжет, размер и палитру — рисую эскиз под ваш интерьер.",
  },
  {
    title: "Стекло",
    description: "Подбираю стекло по цвету и фактуре, вырезаю детали по эскизу.",
  },
  {
    title: "Сборка",
    description: "Собираю витраж, запаиваю швы и довожу работу до готового панно.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", path: "/" },
          { name: "Обо мне", path: "/about" },
        ]}
      />
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ирина Павлова</h1>
          <p className="mt-6 text-lg text-pretty text-muted-foreground">
            Делаю современные витражи как самостоятельные арт-объекты для дома — панно и
            картины, а не оформление окон или дверей. Каждая работа собирается вручную под
            конкретный интерьер: свой сюжет, свой размер, своя палитра.
          </p>
        </div>
        <div
          className="aspect-[4/5] rounded-2xl border border-border"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, var(--primary), var(--accent) 35%, var(--secondary) 65%, var(--primary))",
          }}
          aria-hidden
        />
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight">Как рождается витраж</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title}>
              <span className="text-sm font-medium text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-medium">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
