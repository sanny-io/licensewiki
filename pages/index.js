import React from 'react'
import { getAllLicenses } from '../services/license'

const handleLicenseSearchChanged = e => {

}

export default function Home({ licenses, children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col text-center py-9 gap-y-3">
        <h1 className="text-6xl sm:text-7xl md:text-8xl">license.wiki</h1>
        <span className="text-2xl text-gray-400">Find the license that works for you.</span>
        <input type="text" placeholder="Search licenses" list="licenses" onChange={handleLicenseSearchChanged} />
        <datalist id="licenses">
          {
            licenses?.map((license, key) => {
              return <option value={license.slug} key={key}>{license.name}</option>
            })
          }
        </datalist>
      </div>

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