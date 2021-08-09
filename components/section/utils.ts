import { ChakraProps, StackProps } from "@chakra-ui/react"

export interface IProps extends ChakraProps, StackProps {
  children: any
}

export const sensibleColors = ["white", "black"]
