"use client"

import { getExperienceLabel } from "@/lib/experience"

export function ExperienceStat() {
  return (
    <dd className="text-2xl font-semibold text-primary" suppressHydrationWarning>
      {getExperienceLabel()}
    </dd>
  )
}
