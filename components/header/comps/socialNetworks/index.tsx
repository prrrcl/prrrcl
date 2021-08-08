import LinkedIn from "components/svg/linkedin.svg"
import Github from "components/svg/github.svg"
import { Text, Tooltip } from "@chakra-ui/react"
import Image from "next/image"
import useCursor from "shared/hooks/useCursor"
import Mail from "../mail"

const socialNetworks = [
  {
    icon: LinkedIn,
    label: "LinkedIn",
    url: "https://linkedin.com/in/prrrcl",
  },
  {
    icon: Github,
    label: "Github",
    url: "https://github.com/prrrcl",
  },
]
export default function SocialNetworks() {
  const { handleIn, handleOut } = useCursor()

  return (
    <>
      {socialNetworks.map(({ icon, url, label }) => (
        <Tooltip key={url} label={label}>
          <Text
            as="a"
            bg="white"
            overflow="hidden"
            borderRadius="md"
            href={url}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => handleIn()}
            onMouseLeave={() => handleOut()}
            d="flex"
            border="4px"
            borderColor="white"
          >
            <Image src={icon} alt="" width={30} height={30} />
          </Text>
        </Tooltip>
      ))}
      <Mail />
    </>
  )
}
