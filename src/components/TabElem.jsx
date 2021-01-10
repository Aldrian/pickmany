import React from 'react'

// eslint-disable-next-line
import tw, { css, styled } from 'twin.macro'
/** @jsxImportSource @emotion/react */

const TabWrapper = styled.button(({ isActive }) => [
  tw`text-gray-600 py-4 mr-6 block hover:text-blue-500 focus:outline-none`,
  isActive && tw`text-blue-500 border-b-2 font-medium border-blue-500`
])

export default function TabElem({ label, isActive, objKey, onClick }) {
  return <TabWrapper isActive={isActive} key={objKey} onClick={onClick}>{label}</TabWrapper>
}
