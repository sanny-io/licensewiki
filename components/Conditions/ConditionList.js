import React from 'react'
import Condition from './Condition'

export default function ConditionList({ title, children, borderColor = 'border-gray-700' }) {
  const isEmpty = !children || children.length == 0

  return (
    <div className={`p-4 border rounded ${isEmpty && 'opacity-50'} ${borderColor}`}>
      <h3 className="text-xl">{title}</h3>
      <hr className={`my-4 ${borderColor}`} />
      {
        isEmpty
          ?
          <div className="text-xl italic text-center text-gray-400">Nothing to show...</div>
          : <ul className="space-y-3">
            {
              children?.map((child, key) => {
                return <li key={key}><Condition title={title}>{child}</Condition></li>
              })
            }
          </ul>
      }
    </div>
  )
}