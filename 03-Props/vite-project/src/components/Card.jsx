import React from 'react'

const Card = (props) => {

    console.log(props.user);
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
          <h1>{props.user}, { props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
}

export default Card