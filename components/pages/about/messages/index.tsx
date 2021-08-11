import { HStack, IconButton, Stack, Textarea, useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Message from "../message"
import variants from "./variants"
import { ArrowUpIcon } from "@chakra-ui/icons"
import appService from "shared/services/appService"

interface IQuestion {
  index?: number
  question: string
  answer: string
}

export default function Messages() {
  const [rawData, setRawData] = useState<IQuestion[]>([])
  const [selectedData, setData] = useState<IQuestion | null>(null)
  const [text, setText] = useState("")
  const [error, setError] = useState(false)
  const toast = useToast()

  const selectDataOnTime = useCallback(async () => {
    const lastIndex = selectedData?.index || 0

    setData(null)
    // set data to null for new transition of components
    await new Promise((resolve) => setTimeout(resolve, 2000))
    if (rawData[lastIndex + 1]) {
      setData({ ...rawData[lastIndex + 1], index: lastIndex + 1 })
    } else {
      setData({ ...rawData[0], index: 0 })
    }
  }, [rawData, selectedData?.index])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = e
    setText(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    if (!text) {
      setError(true)
      toast({
        status: "error",
        description: "Please enter a message",
      })
      return
    }
    appService
      .postMessage(text)
      .then(() => {
        setText("")
        toast({
          status: "success",
          title: "Message sent!",
          description: "I will answer you as soon as possible!",
        })
      })
      .catch(() => {
        toast({
          status: "error",
          description: "Something went wrong, please try again",
        })
      })
  }

  useEffect(() => {
    appService.getMessages().then(setRawData)
  }, [])

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
      <Stack minH={["sm", "md"]} overflowY="scroll">
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
      <form onSubmit={handleSubmit}>
        <HStack>
          <Textarea
            isInvalid={error}
            value={text}
            onChange={handleChange}
            color="white"
            placeholder="Do you want to know more about me? Ask me!"
          />
          <IconButton
            type="submit"
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
      </form>
    </Stack>
  )
}
