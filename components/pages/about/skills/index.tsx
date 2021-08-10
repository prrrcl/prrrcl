import { Box, Heading, Stack } from "@chakra-ui/react"

export default function SoftSkills() {
  const skills = ["Communication", "Adaptability", "Organized", "Teamwork"]

  return (
    <Stack color="white" maxW="container.md" spacing="8" w="full">
      <Heading mt="8" fontSize="7xl" textAlign="center">
        Soft skills
      </Heading>
      <Box d="flex" w="full" flexWrap="wrap" justifyContent="center">
        {skills.map((skill) => (
          <Box
            fontSize={["2xl", "5xl"]}
            p="4"
            m="4"
            borderRadius="3xl"
            key={skill}
            border="1px"
            borderColor="white"
          >
            {skill}
          </Box>
        ))}
      </Box>
    </Stack>
  )
}
