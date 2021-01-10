import React, { useState } from 'react'
import ItemPicker from './ItemPicker'
import ItemRoller from './ItemRoller'
import Footer from '../components/Footer'

/** @jsxImportSource @emotion/react */

import { GlobalStyles } from 'twin.macro'

export default function Picker() {
  const [items, setItems] = useState([])
  return (
    <>
      <GlobalStyles />
      <main tw="h-full bg-gray-300">
        <section tw="relative block" style={{ height: '350px' }}>
          <div
            tw="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px', transform: 'translateZ(0)' }}
          />
        </section>
        <ItemPicker items={items} setItems={setItems} />
        <ItemRoller items={items} />
      </main>
      <Footer />
    </>
  )
}
