declare global {
  interface Window {
    ym?: (counterId: number, action: "reachGoal", goal: string) => void
  }
}

import { siteConfig } from "@/lib/site-config"

export function reachGoal(goal: string) {
  window.ym?.(Number(siteConfig.yandexMetrikaId), "reachGoal", goal)
}
