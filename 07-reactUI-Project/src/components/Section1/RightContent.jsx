import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  console.log(props.users);
    return (
      <div id='right' className="h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 w-2/3 p-6 ">
        {props.users.map(function (elem,idx) {
          return <RightCard key={idx} color={elem.color} id={idx} image={elem.img} intro={elem.intro} tag={elem.tag} />
        })}
        
      </div>
    );
}

export default RightContent