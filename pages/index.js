import React, { useState } from 'react'
import { getAllLicenses } from '../services/license'
import { useRouter } from 'next/router'

const findLicense = (licenses, searchValue) => licenses.find(license => license.slug.toLowerCase() == searchValue.toLowerCase())

export default function Home({ licenses, children }) {
  const [licenseSearchText, setLicenseSearchText] = useState('')
  const router = useRouter()

  const handleSearchSubmit = e => {
    e.preventDefault()

    const foundLicense = findLicense(licenses, licenseSearchText)

    if (foundLicense) {
      router.push(foundLicense.slug)
    }
  }

  const handleSearchChanged = e => {
    setLicenseSearchText(e.target.value)

    if (!(e.nativeEvent instanceof InputEvent)) { // They clicked from the datalist.
      router.push(findLicense(licenses, e.target.value).slug)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSearchSubmit} className="flex flex-col text-center py-9 gap-y-3">
        <h1 className="text-6xl sm:text-7xl md:text-8xl">license.wiki</h1>
        <span className="text-2xl text-gray-400">Find the license that works for you.</span>
        <input type="text" name="license" placeholder="Search licenses" list="licenses" onChange={handleSearchChanged} />
        <datalist id="licenses">
          {
            licenses?.map((license, key) => {
              return <option value={license.slug} key={key}>{license.name}</option>
            })
          }
        </datalist>
      </form>

      {children}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const licenses = getAllLicenses(['name', 'slug'])

  return {
    props: { licenses }
  }
}