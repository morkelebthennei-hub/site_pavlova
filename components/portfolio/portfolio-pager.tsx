"use client"

import { useState } from "react"

import { PortfolioCard } from "@/components/portfolio/portfolio-card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type PortfolioItem = {
  placeholder?: string
  id: string
  title: string
  description: string
  image: string
}

export function PortfolioPager({
  items,
  pageSize,
  gridClassName,
}: {
  items: PortfolioItem[]
  pageSize: number
  gridClassName: string
}) {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(items.length / pageSize)
  const start = page * pageSize
  const pageItems = items.slice(start, start + pageSize)

  return (
    <div>
      <div className={`grid gap-6 ${gridClassName}`}>
        {pageItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                aria-disabled={page === 0}
                className={page === 0 ? "pointer-events-none opacity-50" : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  setPage((p) => Math.max(0, p - 1))
                }}
              />
            </PaginationItem>
            <PaginationItem>
              <span className="px-2 text-sm text-muted-foreground">
                {page + 1} / {totalPages}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                aria-disabled={page === totalPages - 1}
                className={
                  page === totalPages - 1 ? "pointer-events-none opacity-50" : undefined
                }
                onClick={(e) => {
                  e.preventDefault()
                  setPage((p) => Math.min(totalPages - 1, p + 1))
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
