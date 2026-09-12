# ART.OHREY

Сайт-визитка и портфолио художника-витражиста Ирины Павловой. Современный интерьерный
витраж как самостоятельный предмет искусства — не оформление окон и не церковная тематика.

## Стек

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui (на базе `@base-ui/react`)
- next-themes — светлая/тёмная тема
- Контент — JSON-файлы в `content/`, без базы данных и CMS

## Разработка

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Структура

- `app/` — страницы (главная, `/about`, `/portfolio`, `/contacts`) и SEO-файлы (`sitemap.ts`, `robots.ts`)
- `components/sections/` — секции главной страницы
- `components/portfolio/`, `components/contacts/` — переиспользуемые блоки
- `content/*.json` — тексты услуг, портфолио, контактов
- `PROJECT_LOG.md` — история решений по проекту

Полный план и правила работы — в `PROJECT_LOG.md`.
