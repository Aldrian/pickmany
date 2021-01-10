import React from 'react'

// eslint-disable-next-line
import tw from 'twin.macro'
/** @jsxImportSource @emotion/react */

export default function Footer() {
  return (
    <footer tw="relative bg-gray-300 pt-8 pb-6">
      <div tw="container mx-auto px-4">
        <hr tw="my-6 border-gray-400" />
        <div tw="flex flex-wrap items-center md:justify-between justify-center">
          <div tw="w-full md:w-4/12 px-4 mx-auto text-center">
            <div tw="text-sm text-gray-600 font-semibold py-1">
              © {new Date().getFullYear()} @Aldrian
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
