import useLoading from 'components/hooks/useLoading'

export default function Test () {
  const context = useLoading()
  console.log('EL CONTEXt', context)
  return <div>Test</div>
}
