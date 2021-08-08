import { ease } from "shared/constants"

const variants = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
}

export const childs = {
  initial: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease,
      duration: 1,
    },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
}

export default variants
