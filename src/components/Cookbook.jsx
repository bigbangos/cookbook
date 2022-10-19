import Head from 'next/head'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

// components
import { Layout } from '@/components/Layout'
import { getComponents } from '@/components/MDXComponents'
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

  const pageTitle = `${frontMatter.title} - Recipes`

  return (
    <NextraPageOptsContextProvider value={pageOpts}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Layout
        navigation={generateNavLinks(onlyDocsLinks.children)}
        tableOfContents={[]}
      >
        <MDXProvider components={getComponents()}>
          <Content {...props} />
        </MDXProvider>
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
