const EXPERIENCE_START = new Date(2023, 0, 1)

function pluralizeYears(n: number): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 14) return "лет"
  if (mod10 === 1) return "год"
  if (mod10 >= 2 && mod10 <= 4) return "года"
  return "лет"
}

export function getExperienceLabel(): string {
  const years = Math.round(
    (Date.now() - EXPERIENCE_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  )
  return `${years} ${pluralizeYears(years)}`
}
