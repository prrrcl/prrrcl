import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import useCursor from "shared/hooks/useCursor"
import { IExperience } from "./types"

interface IProps {
  experience: IExperience
}
export default function Experience(props: IProps) {
  const { experience } = props
  const { handleIn, handleOut } = useCursor()
  const getBg = () => {
    if (experience.type === "education") return "teal.800"
    return experience.workType ? "gray.600" : "gray.900"
  }

  const cursorIn = () => {
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
        onMouseEnter={cursorIn}
        onMouseLeave={() => handleOut()}
      >
        {experience.name}
      </Box>
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
    </ListItem>
  )
}
