import { HStack, IconButton, Stack, Textarea } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Message from "../message"
import variants from "./variants"
import { ArrowUpIcon } from "@chakra-ui/icons"

interface IQuestion {
  index?: number
  question: string
  answer: string
}

const data: IQuestion[] = [
  {
    question: "some question",
    answer: "some answer",
  },
  {
    question: "some question 2",
    answer: "some answer 2",
  },
]

export default function Messages() {
  const [selectedData, setData] = useState<IQuestion | null>(null)

  const selectDataOnTime = useCallback(async () => {
    const lastIndex = selectedData?.index || 0

    setData(null)
    // set data to null for new transition of components
    await new Promise((resolve) => setTimeout(resolve, 2000))
    if (data[lastIndex + 1]) {
      setData({ ...data[lastIndex + 1], index: lastIndex + 1 })
    } else {
      setData({ ...data[0], index: 0 })
    }
  }, [selectedData])

  useEffect(() => {
    const interval = setInterval(() => {
      selectDataOnTime()
    }, 7000)
    return () => clearInterval(interval)
  }, [selectDataOnTime])

  return (
    <Stack
      m={["2", "0"]}
      p={["4", "16"]}
      w={["full", "container.sm"]}
      border="1px solid"
      borderColor="whiteAlpha.300"
      borderRadius="2xl"
      overflow="hidden"
    >
      <Stack minH={["sm", "md"]}>
        <AnimatePresence>
          {selectedData && (
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HStack justifyContent="flex-end" mb="2">
                <Message type="question" text={selectedData.question} />
              </HStack>
              <HStack justifyContent="flex-start">
                <Message type="answer" text={selectedData.answer} />
              </HStack>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
      <HStack>
        <Textarea
          color="white"
          placeholder="Do you want to know more about me? Ask me!"
        />
        <IconButton
          aria-label="send"
          icon={<ArrowUpIcon />}
          borderRadius="full"
          color="white"
          bg="blue.400"
          _hover={{
            bg: "blue.800",
            cursor: "none",
          }}
        />
      </HStack>
    </Stack>
  )
}
