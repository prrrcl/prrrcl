import { Box } from "@chakra-ui/react"

interface IProps {
  children: any
  color?: "black" | "white"
}

export default function SkillBadge(props: IProps) {
  const { children, color = "black" } = props

  return (
    <Box
      fontSize={["2xl", "5xl"]}
      p="4"
      m="4"
      borderRadius="3xl"
      border="1px"
      borderColor={color}
      color={color}
    >
      {children}
    </Box>
  )
}
