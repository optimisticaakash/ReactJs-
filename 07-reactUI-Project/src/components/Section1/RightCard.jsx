import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-70 bg-red-400 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.image}
        alt=""
      />
      <RightCardContent color={props.color} tag={props.tag} id={props.id} />
    </div>
  );
};

export default RightCard;
