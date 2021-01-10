import React, { useState } from 'react'
import Button from './Button'

// eslint-disable-next-line
import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

const AddModule = ({ items, setItems }) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      <span tw="block uppercase text-gray-700 text-xs font-bold mb-2">
        Add an item to your list
      </span>
      <div tw="relative w-full mt-2 mb-4 flex">
        <input
          type="search"
          placeholder=""
          tw="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400  focus:border-blue-400  outline-none focus:outline-none focus:shadow-md w-full pr-10"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.currentTarget.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (inputValue !== '') {
                setItems([...items, inputValue])
                setInputValue('')
              }
            }
          }}
        />
        <Button
          label="add"
          type="neutral"
          icon="fa-plus"
          onClick={() => {
            if (inputValue !== '') {
              setItems([...items, inputValue])
              setInputValue('')
            }
          }}
        />
      </div>
    </>
  )
}

export default AddModule
