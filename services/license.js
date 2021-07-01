import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const licensesDirectory = join(process.cwd(), 'licenses')

export function getLicenseSlugs() {
  return fs.readdirSync(licensesDirectory)
}

export function getLicenseBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(licensesDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content: children } = matter(fileContents)

  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'children') {
      items[field] = children
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllLicenses(fields = []) {
  return getLicenseSlugs().map(slug => getLicenseBySlug(slug, fields))
}