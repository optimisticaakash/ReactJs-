import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    
    copyTask.splice(idx, 1);
    setTask(copyTask)
  };

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2  flex-col gap-4  p-10  items-start "
      >
        {/* First Input for Heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          className=" px-5  w-full h-32 flex font-medium items-start flex-row py-2 border-2 rounded outline-none"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 w-full font-medium outline-none  text-black px-5 py-2 rounded">
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start  justify-start gap-10 overflow-auto h-[90%] mt-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl pt-9  pb-4 px-4 text-black p-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0iKl4vHqOa7WzFziihS0C5fAv0LE2GV67yLiPXD9ttg&s=10')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight text-xs font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className="w-full bg-red-400 cursor-pointer active:scale-95 text-white py-1 text-xs rounded font-bold"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
