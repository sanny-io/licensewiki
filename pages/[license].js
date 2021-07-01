import React from 'react'
import HomeLayout from '.'
import Conditions from '../components/Conditions'
import { getAllLicenses, getLicenseBySlug } from '../services/license'
import { markdownToHtml } from '../services/markdown'
import Markdown from '../components/Markdown'

export default function License({ name, may, mayNot, must, children, source, slug }) {
  return (
    <HomeLayout>
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-5xl sm:text-6xl md:text-7xl">{name}</h2>

        <div className="mb-6 space-x-4">
          {source && <a href={source} className="button">Source</a>}
          <a href={`${process.env.NEXT_PUBLIC_REPO_URL}/blob/${process.env.NEXT_PUBLIC_REPO_DEFAULT_BRANCH}/licenses/${slug}.md`} className="button">Edit on GitHub</a>
        </div>

        <Markdown>{children}</Markdown>

        <hr className="my-8" />

        <Conditions may={may} mayNot={mayNot} must={must} />
      </div>
    </HomeLayout>
  )
}

export async function getStaticProps({ params }) {
  const license = getLicenseBySlug(params.license, [
    'name',
    'may',
    'mayNot',
    'must',
    'children',
    'source',
  ])

  const content = await markdownToHtml(license.children || '')

  return {
    props: {
      ...license,
      children: content,
      slug: params.license,
    },
  }
}

export async function getStaticPaths() {
  const licenses = getAllLicenses(['slug'])

  return {
    paths: licenses.map(license => {
      return {
        params: {
          license: license.slug,
        },
      }
    }),
    fallback: false,
  }
}