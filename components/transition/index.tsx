import { motion } from "framer-motion"
import { useEffect } from "react"
import { ease } from "shared/constants"
import variants from "./variants"

export default function Transition() {
  useEffect(() => {
    document.querySelector("body")?.style.setProperty("overflow-y", "hidden")
    return () => {
      document.querySelector("body")?.style.removeProperty("overflow-y")
    }
  }, [])

  return (
    <motion.div
      style={{
        background: "black",
        pointerEvents: "none",
        position: "fixed",
        top: "0%",
        left: "0%",
        bottom: "0%",
        right: "0%",
        overflow: "hidden",
        zIndex: 9999,
      }}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ease, duration: 0.6 }}
    />
  )
}
