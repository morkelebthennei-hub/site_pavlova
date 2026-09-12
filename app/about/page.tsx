import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Художник Ирина Павлова — современный витраж как арт-объект для интерьера.",
  alternates: {
    canonical: "/about",
  },
};

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
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Обо мне</h1>
          <p className="mt-6 text-lg text-pretty text-muted-foreground">
            Приветствую вас в моём виртуальном ателье витражной росписи! Меня зовут Ирина —
            художник и создатель уникальных витражей, которые призваны украсить и освежить
            любой интерьер.
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

      <div className="mt-16 grid gap-12 sm:grid-cols-3">
        <div>
          <h2 className="font-medium">Моя творческая философия</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Я нахожу вдохновение в красоте природы, игре света и цвета. Мои работы отражают
            простоту и изящество, погружая в мир гармонии и уюта. Каждое витражное изделие
            уникально — я создаю их с любовью и заботой, стремясь передать частичку моей души
            через каждую крошечную деталь.
          </p>
        </div>
        <div>
          <h2 className="font-medium">Процесс работы</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Мой творческий процесс начинается с идеи, затем я воплощаю её в жизнь, используя
            высококачественные материалы и техники, которые дарят возможность играть со светом
            и оттенками. Каждый этап работы — это для меня удивительное приключение, и я рада
            делиться им со всеми вами.
          </p>
        </div>
        <div>
          <h2 className="font-medium">Связь со мной</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Если вам понравилась моя работа и вы хотели бы добавить кусочек искусства в ваш дом
            или подарить его близкому человеку, не стесняйтесь обращаться ко мне для заказа
            индивидуальной работы или получения дополнительной информации. Буду рада воплотить
            ваши витражные мечты в реальность!
          </p>
          <Button render={<Link href="/contacts" />} nativeButton={false} className="mt-4">
            Написать мне
          </Button>
        </div>
      </div>

      <p className="mt-16 text-center text-muted-foreground">
        Спасибо за ваш интерес к моему творчеству!
      </p>
    </section>
  );
}
