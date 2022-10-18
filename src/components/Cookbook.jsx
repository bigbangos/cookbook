import { useRouter } from 'next/router'

// components
import { Layout } from '@/components/Layout'

export default function Cookbook(props) {
  const { route } = useRouter()
  const context = globalThis.__nextra_pageContext__[route]
  if (!context) throw new Error(`No content found for ${route}.`)

  const { pageOpts, Content } = context
  const { frontMatter } = pageOpts
  console.log('pageOpts', pageOpts)

  return (
    <Layout title={frontMatter.title} tableOfContents={[]}>
      <Content {...props} />
    </Layout>
  )
}
