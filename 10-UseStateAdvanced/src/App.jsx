import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum((prev) => prev + 1);
  }
  return (


    <div>
      <h1>The Value of num is {num}</h1>
      <button onClick={btnClicked}>Change Value</button>
    </div>
  )
}

export default App