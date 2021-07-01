import React from 'react'

// This is used to render the HTML from markdown.
export default function Markdown({ children }) {
  return (
    <div className="markdown" dangerouslySetInnerHTML={{ __html: children }}>

    </div>
  )
}