import { useEffect } from "react"
import useLoading from "shared/hooks/useLoading"

export default function Bio() {
  const { closeLoading } = useLoading()
  useEffect(() => {
    closeLoading()
  }, [])
  return <div>hi</div>
}
