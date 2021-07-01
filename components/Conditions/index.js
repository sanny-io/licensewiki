import React from 'react'
import ConditionList from './ConditionList'

export default function Conditions({ may, mayNot, must }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <ConditionList title="✔ You may" borderColor="border-green-800">{may}</ConditionList>
      <ConditionList title="❌ You may not" borderColor="border-red-800">{mayNot}</ConditionList>
      <ConditionList title="⚖ You must" borderColor="border-yellow-800">{must}</ConditionList>
    </div>
  )
}