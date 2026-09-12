import Image from "next/image"

type PortfolioItem = {
  placeholder?: string
  id: string
  title: string
  description: string
  image: string
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover"
        />
        {item.placeholder && (
          <span className="absolute top-3 left-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {item.placeholder}
          </span>
        )}
      </div>
      <figcaption className="p-5">
        <h3 className="font-medium">{item.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
      </figcaption>
    </figure>
  )
}
