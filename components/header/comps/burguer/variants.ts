const lineOne = {
  initial: {
    y: -5,
    transition: {
      duration: 0.8,
    },
  },
  animate: {
    rotate: 45,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.1,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
  },
}

const lineTwo = {
  initial: {
    y: 5,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    rotate: -45,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.1,
  },
}

const variants: { [key: string]: any } = { lineOne, lineTwo }

export default variants
