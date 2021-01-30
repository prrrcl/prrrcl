import { useContext } from 'react'
import { LoadingContext } from 'components/contexts/loadingContext'

export default function useLoading () {
  return useContext(LoadingContext)
}
