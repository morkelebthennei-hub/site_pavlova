import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Как ART.OHREY обрабатывает данные посетителей сайта.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", path: "/" },
          { name: "Политика конфиденциальности", path: "/privacy-policy" },
        ]}
      />
      <h1 className="text-3xl font-semibold tracking-tight">Политика конфиденциальности</h1>
      <p className="mt-4 text-sm text-muted-foreground">Последнее обновление: 13 сентября 2026 г.</p>

      <div className="mt-10 space-y-10">
        <div>
          <h2 className="font-medium">1. Общие положения</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Настоящая политика описывает, как сайт ART.OHREY (art-ohrey.art, далее — «сайт»)
            обрабатывает данные посетителей. Используя сайт, вы соглашаетесь с условиями,
            описанными ниже. Обработка персональных данных осуществляется в соответствии с
            Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
          </p>
        </div>

        <div>
          <h2 className="font-medium">2. Какие данные собираются</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>
              Данные, которые вы указываете сами при обращении по указанным на сайте контактам
              (телефон, ВКонтакте, Телеграм, Instagram) — имя, контактные данные, содержание
              сообщения.
            </li>
            <li>
              Технические данные, которые собираются автоматически при посещении сайта: IP-адрес,
              тип устройства и браузера, страницы, которые вы посмотрели, и действия на них
              (движения мыши, клики, прокрутка).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium">3. Файлы cookie и аналитика</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Сайт использует Яндекс.Метрику для сбора статистики посещений и файлы cookie для её
            работы. Яндекс.Метрика включает Вебвизор — инструмент, который записывает действия
            посетителей на сайте (движения курсора, клики, прокрутку страниц), чтобы понять, как
            удобнее пользоваться сайтом. Эти данные обрабатываются в обезличенном виде и не
            используются для установления вашей личности. Условия обработки данных
            Яндекс.Метрикой описаны в{" "}
            <a
              href="https://yandex.ru/legal/confidential/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-3 hover:text-foreground"
            >
              политике конфиденциальности Яндекса
            </a>
            . Вы можете отключить cookie в настройках браузера — часть функций сайта при этом
            может работать некорректно.
          </p>
        </div>

        <div>
          <h2 className="font-medium">4. Цели обработки данных</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Обратная связь по вашим сообщениям и заказам.</li>
            <li>Улучшение сайта на основе статистики посещений и поведения пользователей.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium">5. Передача данных третьим лицам</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Данные не передаются третьим лицам, за исключением сервиса аналитики Яндекс.Метрика,
            который обрабатывает технические данные посещений в рамках своей политики
            конфиденциальности.
          </p>
        </div>

        <div>
          <h2 className="font-medium">6. Хранение и защита данных</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Данные, которые вы указываете при обращении, используются только для ответа на ваш
            запрос и не хранятся дольше, чем это необходимо для этой цели.
          </p>
        </div>

        <div>
          <h2 className="font-medium">7. Ваши права</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Вы можете запросить информацию о том, какие данные о вас обрабатываются, а также
            попросить их удалить — напишите через любой из контактов, указанных на странице{" "}
            <a href="/contacts" className="underline underline-offset-3 hover:text-foreground">
              «Контакты»
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-medium">8. Изменения политики</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Эта политика может обновляться — актуальная версия всегда доступна на этой странице.
          </p>
        </div>
      </div>
    </section>
  );
}
