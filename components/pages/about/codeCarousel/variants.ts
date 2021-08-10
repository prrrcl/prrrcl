import { ease } from "shared/constants"

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
}
const variants = {
  initial: {
    opacity: 0,
    x: -10,
    transition: {
      ease,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease,
    },
  },
  exit: {
    opacity: 0,
    x: 10,
  },
}

export { containerVariants, variants }
