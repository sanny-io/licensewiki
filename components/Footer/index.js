import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 py-8 mt-4 bg-gray-900">
      <div className="container flex flex-col justify-between mx-auto gap-y-2 sm:flex-row">
        <span>No information on this site is legal advice.</span>
        <nav>
          <ul className="flex flex-row gap-x-6">
            <li><a href={process.env.NEXT_PUBLIC_REPO_URL}>GitHub</a></li>
            <li><a href="https://sanny.io">sanny.io</a></li>
            <li><a href="https://requestbin.net/r/2jeyviys">Test</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}