import { Box } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { containerVariants, variants } from "./variants"

function uniqueId() {
  return Math.random().toString(36).substring(7)
}

interface IProps {
  items: Array<string>
  onChange: (str: string) => void
}

export default function CodeCarousel(props: IProps) {
  const { items, onChange } = props

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<any>(items[index])

  const animation = async () => {
    setSelected(null)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIndex((old) => (items[old + 1] ? old + 1 : 0))
  }

  useEffect(() => {
    const interval = setInterval(animation, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setSelected(items[index])
  }, [index, items])

  useEffect(() => {
    setTimeout(() => {
      onChange?.(selected)
    }, 600)
  }, [selected, onChange])

  return (
    <Box bg="gray.700" p="1" borderRadius="md" d="flex" mx="3">
      <AnimatePresence>
        {selected && (
          <Box
            as={motion.code}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            d="flex"
            sx={{
              transition: "cubic-bezier(.77,0,.175,1) .6s",
            }}
          >
            <span>{"["}&apos;</span>
            {selected.split("").map((letter: string) => (
              <motion.span
                key={`letter-${letter}-${uniqueId()}`}
                variants={variants}
              >
                {letter}
              </motion.span>
            ))}
            <span>&apos;{"]"}</span>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  )
}
