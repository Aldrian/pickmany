import React from 'react'

import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

export default function LabelWithIcon({ icon, label }) {
  return (
    <div tw="text-gray-700">
      <i tw="mr-2 text-lg text-gray-500" className={`fas ${icon}`}></i>
      {label}
    </div>
  )
}
