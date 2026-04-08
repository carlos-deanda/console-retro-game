import React from 'react'

function RightControl({handleSelection}) {
  return (
    <div className="w-[80px] h-[200px] border-4 border-solid flex flex-col items-center rounded-tr-[40px] text-[10px] rounded-br-[40px] bg-[#FF4554]">
      <button className="text-[30px] -translate-x-6 -mt-2">+</button>
      <div className="grid grid-cols-3 grid-rows-3  -mt-2 w-fit mx-auto">
        <button className="col-start-1 row-start-2 rounded-full border border-[#333333] border-black bg-[#1A1A1A] text-white flex items-center justify-center w-4.5 h-4.5 ">Y</button>
        <button className="col-start-2 row-start-1 rounded-full border border-[#333333] border-black bg-[#1A1A1A] text-white flex items-center justify-center w-4.5 h-4.5 ">X</button>
        <button onClick={handleSelection} className="col-start-3 row-start-2 active:scale-95 transition-transform rounded-full border border-[#333333] border-black bg-[#1A1A1A] text-white flex items-center justify-center w-4.5 h-4.5 ">A</button>
        <button className="col-start-2 row-start-3 rounded-full border border-[#333333] border-black bg-[#1A1A1A] text-white flex items-center justify-center w-4.5 h-4.5 ">B</button>
      </div>
      <button className="rounded-full border-2 border-[#333333] bg-[#1A1A1A] flex items-center justify-center w-8 h-8 mt-2"></button>
      <button className="flex items-center justify-center  w-3 h-3 rounded-sm bg-[#202020] border-2 border-[#3A3A3A] outline-4 outline-solid outline-[#101010] mt-2 -translate-x-5 "></button>

    </div>
  )
}

export default RightControl