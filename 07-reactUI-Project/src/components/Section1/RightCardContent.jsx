import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs  leading-relaxed text-white mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          consequuntur voluptas quae. Doloribus, maiores ullam.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white  text-sm font-medium px-6 rounded-full  "
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white  font-medium px-2  py-1 rounded-full"
          >
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent