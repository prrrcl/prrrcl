export interface IExperience {
  name: string
  startAt: number
  endAt?: number
  description: string[]
  workType?: "sideProject"
  type: "education" | "work"
}
