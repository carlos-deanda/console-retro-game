import React from 'react'

function LeftControl({handleDirection}) {
  return (
    <div className="w-[80px] h-[200px] -mt-80 border-4 border-solid flex flex-col items-center rounded-tl-[40px]  text-[10px] rounded-bl-[40px] bg-[#00C3E3]">
      <button className="text-[30px] translate-x-6 -mt-2">-</button>
      <button className="rounded-full border-2 border-[#333333] -mt-3 bg-[#1A1A1A] flex items-center justify-center w-8 h-8"></button>
      <div className="grid grid-cols-3 grid-rows-3   mt-4 w-fit mx-auto">
        <button onClick={() => handleDirection('left')} className="col-start-1 row-start-2 active:scale-95 transition-transform rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-4.5 h-4.5">{"<"}</button>
        <button onClick={() => handleDirection('up')} className="col-start-2 row-start-1 active:scale-95 transition-transform rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-4.5 h-4.5">^</button>
        <button onClick={() => handleDirection('right')} className="col-start-3 row-start-2 active:scale-95 transition-transform rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-4.5 h-4.5">{">"}</button>
        <button onClick={() => handleDirection('down')} className="col-start-2 row-start-3 active:scale-95 transition-transform rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-4.5 h-4.5">v</button>
      </div>
      <button className="flex items-center justify-center  w-3 h-3 rounded-sm bg-[#202020] border-2 border-[#3A3A3A] outline-4 outline-solid outline-[#101010] mt-2 translate-x-5 "></button>
    </div>
  )
}

export default LeftControl