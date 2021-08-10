import { ease } from "shared/constants"

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      ease,
    },
  },
}

export default variants
