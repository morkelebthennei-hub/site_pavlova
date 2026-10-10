"use client"

import { useEffect, useRef } from "react"
import { RotateCw } from "lucide-react"

const TRIGGER_DISTANCE = 110
const MAX_PULL = 70

// В Firefox на Android прокручивается body (см. globals.css), поэтому встроенный
// жест «потяни вниз — обновить» не работает. Возвращаем его здесь.
export function PullToRefresh() {
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isFirefoxTouch =
      window.matchMedia("(pointer: coarse)").matches &&
      CSS.supports("(-moz-appearance: none)")
    if (!isFirefoxTouch) return

    const scroller = document.body
    const indicator = indicatorRef.current
    let startX = 0
    let startY = 0
    let pull = 0
    let tracking = false

    const show = (distance: number) => {
      if (!indicator) return
      const shift = Math.min(distance * 0.5, MAX_PULL)
      indicator.style.opacity = distance > 0 ? "1" : "0"
      indicator.style.transform = `translate(-50%, ${shift}px) rotate(${distance * 2}deg)`
    }

    const reset = () => {
      tracking = false
      pull = 0
      show(0)
    }

    const onStart = (e: TouchEvent) => {
      const insideDialog = (e.target as Element | null)?.closest('[role="dialog"]')
      if (insideDialog || scroller.scrollTop > 0 || e.touches.length !== 1) {
        tracking = false
        return
      }
      tracking = true
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      pull = 0
    }

    const onMove = (e: TouchEvent) => {
      if (!tracking) return
      const dx = e.touches[0].clientX - startX
      const dy = e.touches[0].clientY - startY
      if (scroller.scrollTop > 0 || dy <= 0 || Math.abs(dx) > Math.abs(dy)) {
        reset()
        return
      }
      pull = dy
      show(pull)
    }

    const onEnd = () => {
      if (tracking && pull >= TRIGGER_DISTANCE) {
        window.location.reload()
        return
      }
      reset()
    }

    scroller.addEventListener("touchstart", onStart, { passive: true })
    scroller.addEventListener("touchmove", onMove, { passive: true })
    scroller.addEventListener("touchend", onEnd, { passive: true })
    scroller.addEventListener("touchcancel", reset, { passive: true })
    return () => {
      scroller.removeEventListener("touchstart", onStart)
      scroller.removeEventListener("touchmove", onMove)
      scroller.removeEventListener("touchend", onEnd)
      scroller.removeEventListener("touchcancel", reset)
    }
  }, [])

  return (
    <div
      ref={indicatorRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-1/2 z-50 flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground opacity-0 shadow-md"
      style={{ transform: "translate(-50%, 0)" }}
    >
      <RotateCw className="size-4" />
    </div>
  )
}
