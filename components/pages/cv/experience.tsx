import { AddIcon } from "@chakra-ui/icons"
import {
  Box,
  Collapse,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react"
import useCursor from "shared/hooks/useCursor"
import { IExperience } from "./types"

interface IProps {
  experience: IExperience
}
export default function Experience(props: IProps) {
  const { experience } = props
  const { handleIn, handleOut, cursor } = useCursor()
  const { isOpen, onToggle } = useDisclosure()

  const getBg = () => {
    if (experience.type === "education") return "teal.800"
    return experience.workType ? "gray.600" : "gray.900"
  }

  const cursorIn = () => {
    if (cursor !== "default") return
    if (experience.type === "education") {
      handleIn({
        onHoverText: "Education",
      })
    } else {
      handleIn({
        onHoverText: experience.workType ? "Side project" : "Fulltime work",
      })
    }
  }

  return (
    <ListItem alignItems="flex-start" spacing="8">
      <Box
        bg={getBg()}
        px="7"
        py="2"
        borderRadius="full"
        color="white"
        onMouseMove={cursorIn}
        onMouseLeave={() => handleOut()}
        onClick={onToggle}
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {experience.name}
        <AddIcon
          w="8"
          transform={isOpen ? "rotate(135deg)" : "rotate(0deg)"}
          transition="ease-out"
          transitionDuration="0.3s"
        />
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <UnorderedList listStyleType="none" m="0">
          {experience.description.map((task, i) => (
            <ListItem
              bg={i % 2 ? "blackAlpha.400" : undefined}
              p="3"
              borderRadius={["md", "xl"]}
              ml="4"
              key={task}
            >
              {task}
            </ListItem>
          ))}
        </UnorderedList>
      </Collapse>
    </ListItem>
  )
}
