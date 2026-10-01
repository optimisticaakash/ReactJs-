import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, settTheme] = useState('light')

  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme= {theme} setTheme={settTheme} />
    </div>
  )
}

export default App