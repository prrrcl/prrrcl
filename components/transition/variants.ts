import { ease } from "shared/constants"

const variants = {
  initial: { bottom: "100%", top: "0%" },
  animate: { bottom: "0%", top: "0%" },
  exit: { top: "100%", bottom: "0%" },
}
export default variants

export const pageVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease,
      delay: 2.1,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      ease,
    },
  },
}
