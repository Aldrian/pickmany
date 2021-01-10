import React, { useState } from 'react'

import Button from '../components/Button'

// eslint-disable-next-line
import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

const pickItems = (arr, n) => {
  let results = {}
  while (n--) {
    const item = arr[Math.floor(Math.random() * arr.length)]
    console.log(item)
    const itemIndex = arr.findIndex((e) => e === item)
    console.log(itemIndex)
    if (results[itemIndex]) {
      results[itemIndex] = results[itemIndex] + 1
    } else {
      results[itemIndex] = 1
    }
  }
  return results
}

export default function ItemRoller({ items }) {
  const [itemNum, setItemNum] = useState(1)
  const [isListEmpty, setIsListEmpty] = useState(false)
  const [itemsPicked, setItemsPicked] = useState({})
  return (
    <div tw="relative bg-gray-300 pb-6">
      <div tw="container mx-auto px-4">
        <h4 tw="text-3xl font-semibold py-4">Roll X items from your list</h4>
        <div tw="flex my-8 text-lg items-center justify-start">
          Let's roll{' '}
          <input
            type="number"
            tw="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400  focus:border-blue-400  outline-none focus:outline-none focus:shadow-md mx-2 flex-grow-0"
            style={{}}
            value={itemNum}
            onChange={(event) => {
              setItemNum(event.currentTarget.value)
            }}
          />{' '}
          items from the list
          <Button
            label="Roll"
            onClick={() => {
              if (items.length === 0) {
                setIsListEmpty(true)
              } else {
                console.log(pickItems(items, itemNum))
                setIsListEmpty(false)
                setItemsPicked(pickItems(items, itemNum))
              }
            }}
          />
        </div>
        {isListEmpty && (
          <p tw="text-xs font-semibold inline-block text-red-500 uppercase">
            Your list is empty!
          </p>
        )}
        {Object.keys(itemsPicked).map((key, index) => (
          <div tw="my-4" key={`picked${index}`}>
            <span tw="font-bold">{items[key]}</span> x{itemsPicked[key]}
          </div>
        ))}
      </div>
    </div>
  )
}
