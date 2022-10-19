import { useRouter } from 'next/router'

// components
import { Layout } from '@/components/Layout'

export default function Cookbook(props) {
  const router = useRouter()
  const context = globalThis.__nextra_pageContext__[router.route]

  if (!context) {
    throw new Error(`No content found for ${router.route}.`)
  }

  const { pageOpts, Content } = context
  const { frontMatter } = pageOpts

  return (
    <Layout
      title={frontMatter.title}
      tableOfContents={[]}
      isHomePage={pageOpts.route === '/'}
    >
      <Content {...props} />
    </Layout>
  )
}
