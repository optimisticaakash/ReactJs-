import React from 'react'
import Counter from './Counter'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)

  const btnClicked = ()=> {
    setValue(value+1)
  }
  return (
    <div>
      <h1 className='py-5 px-3 bg-emerald-400 rounded-full '>{value}</h1>
      <button onClick={() => {
        btnClicked
      }}>clicked</button>
    </div>
  )
}

export default App