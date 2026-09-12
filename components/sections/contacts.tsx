import { ContactCards } from "@/components/contacts/contact-cards"

export function Contacts() {
  return (
    <section id="contacts" className="mx-auto max-w-5xl px-4 py-24">
      <h2 className="text-3xl font-semibold tracking-tight">Контакты</h2>
      <div className="mt-10">
        <ContactCards />
      </div>
    </section>
  )
}
