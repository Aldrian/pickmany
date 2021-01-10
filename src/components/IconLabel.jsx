import React from 'react'

// eslint-disable-next-line
import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

export default function IconLabel({ icon, label }) {
  return (
    <div tw="text-gray-700 mr-2">
      <i tw="mr-2 text-lg text-gray-500" className={`fas ${icon}`}></i>
      {label}
    </div>
  )
}
