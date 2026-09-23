import React from 'react'

const App = () => {

  const user = {
    username: 'Aakash',
    age: 25,
    city: 'Delhi',
    area:'Narela'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem("user"));
  return (
    <div>App</div>
  )
}

export default App