import useLoading from 'components/hooks/useLoading'

export default function Link ({ href, children }) {
  const { navigate } = useLoading()
  return (
    <a href={href} onClick={(e) => navigate(href, e)}>
      {children}
    </a>
  )
}
