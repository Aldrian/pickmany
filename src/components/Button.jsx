import React from 'react'

// eslint-disable-next-line
import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

export default function RemoveButton({ icon, label, onClick }) {
  return (
    <button
      tw="bg-gray-500 hover:bg-blue-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-4"
      type="button"
      style={{ transition: 'all .15s ease' }}
      onClick={onClick}
    >
      <i className={`fas ${icon}`}></i> {label}
    </button>
  )
}
