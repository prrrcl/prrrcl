import { Box, Heading, Stack, Text, UnorderedList } from "@chakra-ui/react"
import Section from "components/section"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { differenceInYears, sub, format } from "date-fns"

import Highlight from "./highlight"
import YearDivisor from "./yearDivisor"
import { useEffect, useMemo, useState } from "react"
import appService from "shared/services/appService"
import { IExperience } from "./types"
import parseExperience from "./utils"
import Experience from "./experience"
import SkillBadge from "../about/skills/skill"

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

export default function Cv() {
  const [data, setData] = useState<{
    studies: IExperience[]
    works: IExperience[]
  } | null>(null)

  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "React Native",
    "GSAP",
    "Framer Motion",
  ]

  const experiences = useMemo(() => {
    if (data) {
      const parsedData = [
        ...parseExperience(data.studies, "education"),
        ...parseExperience(data.works, "work"),
      ]
      const sorted = parsedData.sort((a: IExperience, b: IExperience) =>
        a.startAt < b.startAt ? -1 : 1
      )
      const firstDate = new Date(sorted[0].startAt)
      const now = new Date()
      const years = differenceInYears(now, firstDate)

      // we need to add 1 to the years because now is not counted
      // we will make a list of years with experiences in them
      const returnedData = Array.from({ length: years + 1 }, (_, i) => {
        const indexYear = years - i
        const year = format(sub(now, { years: indexYear }), "y")
        const initialDateYear = new Date(year)
        const lastDateYear = new Date(`${year}-12-31`)

        const yearData: { year: string; data: IExperience[] } = {
          year,
          data: [],
        }

        yearData.data = sorted.filter((experience) => {
          const date = new Date(experience.startAt)
          return date > initialDateYear && date < lastDateYear
        })

        return yearData
      })
        // we need only years with experiences (the years contains only start and end dates)
        .filter((exps) => exps.data.length)
      console.log(returnedData)
      return returnedData
    }
    return []
  }, [data])

  const { inView, ref } = useInView({
    triggerOnce: true,
    threshold: 1,
  })

  useEffect(() => {
    appService.getCv().then(setData)
  }, [])

  return (
    <Section bg="teal.100" spacing="28" lastOne id="#cv">
      <Stack>
        <Heading
          key="first"
          as={motion.h4}
          variants={variants}
          animate={inView ? "animate" : "initial"}
          fontSize={["6xl", "9xl"]}
          textAlign={"center"}
        >
          Let&apos;s talk
        </Heading>
        <Heading
          key="second"
          as={motion.h4}
          animate={inView ? "animate" : "initial"}
          variants={variants}
          fontSize={["6xl", "9xl"]}
          textAlign={"center"}
        >
          about{" "}
          <Box as="span" pos="relative" ref={ref}>
            work
            {inView && <Highlight />}
          </Box>
        </Heading>
      </Stack>
      <Stack
        fontSize={["2xl", "5xl"]}
        maxW={["container.sm", "container.lg"]}
        spacing="12"
      >
        <Text>
          My first job{" "}
          <Text as="span" aria-label="baby">
            (👶)
          </Text>{" "}
          was in the design department of a local print shop, after studying
          graphic arts prepress.
        </Text>
        <Text>After that...</Text>
        {experiences.map((experience) => (
          <Stack key={experience.year} spacing="12">
            <YearDivisor>{experience.year}</YearDivisor>
            <UnorderedList listStyleType="none" as={Stack} spacing="12">
              {experience.data.map((experience) => (
                <Experience key={experience.name} experience={experience} />
              ))}
            </UnorderedList>
          </Stack>
        ))}
      </Stack>
      <Stack>
        <Heading textAlign="center" fontSize={["4xl", "7xl"]}>
          Hard skills
        </Heading>
        <Box
          d="flex"
          w={["full", "container.lg"]}
          flexWrap="wrap"
          justifyContent="center"
        >
          {skills.map((skill) => (
            <SkillBadge key={skill}>{skill}</SkillBadge>
          ))}
        </Box>
      </Stack>
    </Section>
  )
}
