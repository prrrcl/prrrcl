import { Box, HStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ease } from "shared/constants"

interface IProps {
  children: any
}

const variants = {
  initial: {
    scaleX: 0,
    transition: {
      ease,
    },
  },
  animate: {
    scaleX: 1,
    transition: {
      ease,
      delay: 1,
    },
  },
}

const Divisor = ({ inView }: { inView: boolean }) => (
  <Box
    as={motion.span}
    h="2"
    borderRadius="md"
    w="full"
    bg="black"
    variants={variants}
    animate={inView ? "animate" : "initial"}
  />
)
export default function YearDivisor(props: IProps) {
  const { children } = props

  const { inView, ref } = useInView({ triggerOnce: true })

  return (
    <HStack w="full" justifyContent="center" alignItems="center" ref={ref}>
      <Divisor inView={inView} />
      <Box
        as={motion.div}
        animate={
          inView
            ? { opacity: 1, y: 0, transition: { delay: 0.5 } }
            : { opacity: 0, y: -10 }
        }
      >
        {children}
      </Box>
      <Divisor inView={inView} />
    </HStack>
  )
}
