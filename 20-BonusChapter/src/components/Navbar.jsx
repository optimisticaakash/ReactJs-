import React from 'react'

const Navbar = (props) => {

    console.log(props)

    function changeTheme() {
        console.log("theme change , ");
        props.setTheme('dark')
    }
  return (
    <div>
      <button onClick={changeTheme}>change Theme</button>
    </div>
  );
}

export default Navbar