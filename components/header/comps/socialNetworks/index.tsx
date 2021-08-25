import LinkedIn from "components/svg/linkedin.svg"
import Github from "components/svg/github.svg"
import Yt from "components/svg/youtube.svg"
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
  {
    icon: Yt,
    label: "YouTube",
    url: "https://www.youtube.com/channel/UCKGxp2pj8EWitM6-UWv9Fvg?sub_confirmation=1",
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
            borderRadius="lg"
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
