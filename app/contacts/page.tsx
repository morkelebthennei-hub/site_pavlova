import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ContactCards } from "@/components/contacts/contact-cards";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Как связаться с ART.OHREY и заказать витраж.",
  alternates: {
    canonical: "/contacts",
  },
};

export default function ContactsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", path: "/" },
          { name: "Контакты", path: "/contacts" },
        ]}
      />
      <h1 className="text-3xl font-semibold tracking-tight">Контакты</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Напишите или позвоните — расскажите, каким вы видите свой витраж, и обсудим детали:
        размер, сюжет, сроки и цену.
      </p>
      <div className="mt-10">
        <ContactCards />
      </div>
    </section>
  );
}
