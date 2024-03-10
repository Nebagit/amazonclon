import React from 'react'
import { useColor } from './contextProvider'
function ComponentB() {
    const {color} = useColor()
  return (
    <div className={color}>
        <h1>ComponentB</h1>
        <h1>color is {color}</h1>
    </div>
  )
}

export default ComponentB;