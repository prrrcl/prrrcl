import { atom } from "jotai"

const CURSOR = atom<"default" | "click" | "hover" | "hoverWithText">("default")

export const CURSOR_THEME = atom<"light" | "dark">("dark")

export const CURSOR_TEXT = atom<string>("")

export default CURSOR
