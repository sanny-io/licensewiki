import React from 'react'

const conditionIdMap = {
  useCommercially: {
    name: 'Use Commercially',
    description: 'use the software for commercial purposes.',
  },

  usePrivately: {
    name: 'Use Privately',
    description: 'use the software in a private manner.',
  },

  useSameLicense: {
    name: 'Use Same License',
    description: 'provide the software under the same (or functionally equivalent) license.',
  },

  considerNetworkUseAsDistribution: {
    name: 'Consider Network Use as Distribution',
    description: 'consider the usage of the software through a network as distribution.',
  },

  distribute: {
    name: 'Distribute',
    description: 'distribute the software.',
  },

  modify: {
    name: 'Modify',
    description: 'modify the software.',
  },

  provideCopyright: {
    name: 'Provide Copyright',
    description: 'provide the copyright notice with the software.',
  },

  provideLicense: {
    name: 'Provide License',
    description: 'provide the license with the software.',
  },

  provideSource: {
    name: 'Provide Source',
    description: 'provide the source code of the software.',
  },

  expectWarranty: {
    name: 'Expect Warranty',
    description: 'expect a warranty from the licensor.',
  },

  sublicense: {
    name: 'Sublicense',
    description: 'sublicense the software.',
  },

  holdLiable: {
    name: 'Hold Liable',
    description: 'hold the licensor liable for any damages.',
  },

  documentChanges: {
    name: 'Document Changes',
    description: 'document any changes made to the software.',
  },
}

export default function Condition({ title, children }) {
  const { name, description } = conditionIdMap[children]

  return (
    <>
      <h4 className="text-lg font-bold">{name}</h4>
      <span>{`${title} ${description}`}</span>
    </>
  )
}