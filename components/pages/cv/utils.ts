import { IExperience } from "./types"

export default function parseExperience(
  data: IExperience[],
  type: "work" | "education"
) {
  return data.map((exp) => ({ type, ...exp }))
}
