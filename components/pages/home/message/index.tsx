import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import variants from "./variants"

interface IProps {
  type: "question" | "answer"
  text: string
}

const answerColor = "#e5e5ea"
const questionColor = "#248bf5"

export default function Message(props: IProps) {
  const { type = "question", text } = props

  const color = type === "question" ? questionColor : answerColor
  const textColor = type === "question" ? "white" : "black"

  return (
    <motion.div variants={variants} key={text}>
      <Box
        bg={color}
        px="5"
        py="3"
        borderRadius="2xl"
        fontSize="large"
        pos="relative"
        _before={{
          bottom: "-0.1rem",
          content: `""`,
          height: "1rem",
          position: "absolute",
          borderBottomLeftRadius:
            type === "question" ? "0.8rem 0.7rem" : undefined,
          borderRight: type === "question" ? `1rem solid ${color}` : undefined,
          right: type === "question" ? "-0.35rem" : undefined,
          transform: "translate(0, -0.1rem)",
          borderBottomRightRadius:
            type === "answer" ? "0.8rem 0.7rem" : undefined,
          borderLeft: type === "answer" ? `1rem solid ${color}` : undefined,
          left: type === "answer" ? "-0.35rem" : undefined,
        }}
        _after={{
          bottom: "-0.1rem",
          content: `""`,
          height: "1rem",
          position: "absolute",
          backgroundColor: "#000",
          borderBottomLeftRadius: type === "question" ? "0.5rem" : undefined,
          right: type === "question" ? "-40px" : undefined,
          borderBottomRightRadius: type === "answer" ? "0.5rem" : undefined,
          left: type === "answer" ? "20px" : undefined,
          transform: "translate(-30px, -2px)",
          width: "10px",
        }}
        color={textColor}
      >
        {text}
      </Box>
    </motion.div>
  )
}
