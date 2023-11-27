import React from "react";
const VideoTittle = ({ tittle, overview }) => {
  return (
    <div className="pt-20 px-12  h-1/4 absolute text-white">
      <h1 className="text-lg font-bold">{tittle}</h1>
      <p className=" hidden md:inline-block py-6 text-sm w-1/4 ">{overview}</p>
      <div className="flex">
        <button className="bg-gray-500 text-white text-xl  rounded-md p-2 px-12 opacity-50">
          play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white text-lg rounded-md p-2 px-12 opacity-50 mx-2 ">
          More info
        </button>
      </div>
    </div>
  );
};
export default VideoTittle;
