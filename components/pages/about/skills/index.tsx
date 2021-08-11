import { Box, Heading, Stack } from "@chakra-ui/react"
import SkillBadge from "./skill"

export default function SoftSkills() {
  const skills = ["Communication", "Adaptability", "Organized", "Teamwork"]

  return (
    <Stack
      color="white"
      maxW={["container.sm", "container.md"]}
      spacing="8"
      w="full"
    >
      <Heading mt="8" fontSize={["4xl", "7xl"]} textAlign="center">
        Soft skills
      </Heading>
      <Box d="flex" w="full" flexWrap="wrap" justifyContent="center">
        {skills.map((skill) => (
          <SkillBadge color="white" key={skill}>
            {skill}
          </SkillBadge>
        ))}
      </Box>
    </Stack>
  )
}
