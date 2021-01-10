import React from 'react'

import AddModule from '../components/AddModule'

// eslint-disable-next-line
import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

export default function ItemPicker({ items = [], setItems = () => {} }) {
  return (
    <section tw="relative py-4 bg-gray-300">
      <div tw="container mx-auto">
        <div tw="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div tw="mt-12 px-6">
            <h4 tw="text-3xl font-semibold pb-6">Items to choose from</h4>
          </div>
          <div tw="px-6 py-4 relative w-full bg-gray-100 border-b  border-t border-gray-300">
            <AddModule items={items} setItems={setItems} />
          </div>
          <div tw="px-6">
            <div tw="w-full lg:w-4/12  lg:order-1">
              <nav tw="flex flex-col">
                {items.map((item, index) => (
                  <div tw="flex items-center my-2" key={`item${index}`}>
                    <span tw="text-lg">{item}</span>
                    <span
                      tw="bg-gray-500 hover:bg-red-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-4 cursor-pointer"
                      onClick={() => {
                        setItems(
                          items.filter((_, arrIndex) => arrIndex !== index)
                        )
                      }}
                    >
                      x
                    </span>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
