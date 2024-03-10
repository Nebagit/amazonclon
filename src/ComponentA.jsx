import React from 'react'
import { useColor } from './contextProvider'
function ComponentA() {
    const {colorToggler} = useColor()
  return (
    <div>
        <h1>component </h1>
        <button onClick={colorToggler}>color toggler</button>
    </div>
  )
}

export default ComponentA