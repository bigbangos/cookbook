import Head from 'next/head'
import { useRouter } from 'next/router'

// components
import { Layout } from '@/components/Layout'
import { NextraPageOptsContextProvider } from '@/components/NextraPageOpts'

export default function Cookbook(props) {
  const router = useRouter()
  const context = globalThis.__nextra_pageContext__[router.route]

  if (!context) {
    throw new Error(`No content found for ${router.route}.`)
  }

  const { pageOpts, Content } = context
  const { frontMatter } = pageOpts
  const onlyDocsLinks = pageOpts.pageMap.find(
    (opts) => opts.kind === 'Folder' && opts.name === 'docs'
  )

  return (
    <NextraPageOptsContextProvider value={pageOpts}>
      <Layout
        navigation={generateNavLinks(onlyDocsLinks.children)}
        tableOfContents={[]}
      >
        <Head>
          <title>{frontMatter.title} &mdash; Aptos Recipes</title>
        </Head>
        <Content {...props} />
      </Layout>
    </NextraPageOptsContextProvider>
  )
}

function generateNavLinks(pageMap) {
  return pageMap
    .map((page) => {
      if (page.kind === 'Folder') {
        return {
          title: page.name,
          links: generateNavLinks(page.children),
        }
      }

      if (page.kind === 'MdxPage') {
        return { title: page.frontMatter.title, href: page.route }
      }
    })
    .filter(Boolean)
}
