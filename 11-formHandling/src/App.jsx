import React from 'react'


const submitHandler = () => {
  console.log("Form Submitted");
}

const App = () => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        submitHandler()
      }} >
        <input type="text" placeholder='Enter your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App