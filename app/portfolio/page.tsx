import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Портфолио",
  description: "Портфолио современных витражных панно и картин ART.OHREY.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", path: "/" },
          { name: "Портфолио", path: "/portfolio" },
        ]}
      />
      <h1 className="text-3xl font-semibold tracking-tight">Портфолио</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Витражные панно и картины ручной работы — у каждой своя история и своё место в
        интерьере.
      </p>
      <div className="mt-10">
        <PortfolioGrid />
      </div>
    </section>
  );
}
