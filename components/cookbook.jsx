import { useRouter } from 'next/router'

export default function Cookbook(props) {
  const { route } = useRouter()
  const context = globalThis.__nextra_pageContext__[route]
  if (!context) throw new Error(`No content found for ${route}.`)

  const { pageOpts, Content } = context

  return (
    <GlobalLayout {...pageOpts}>
      <Content {...props} />
    </GlobalLayout>
  )
}

function GlobalLayout({ children }) {
  return children
}
