import React from 'react'

function LeftControl({handleDirection}) {
  return (
    <div className="w-[80px] h-[200px] border-4 border-solid flex flex-col items-center rounded-tl-[40px]  text-[10px] rounded-bl-[40px] bg-[#00C3E3]">
      <button className="text-[30px] translate-x-6 -mt-2">-</button>
      <button className="rounded-full border-2 border-[#333333] -mt-3 bg-[#1A1A1A] flex items-center justify-center w-10 h-10"></button>
      <div className="grid grid-cols-3 grid-rows-3   mt-2 w-fit mx-auto">
        <button onClick={() => handleDirection('left')} className="col-start-1 row-start-2 rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-5 h-5">{"<"}</button>
        <button onClick={() => handleDirection('up')} className="col-start-2 row-start-1 rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-5 h-5">^</button>
        <button onClick={() => handleDirection('right')} className="col-start-3 row-start-2 rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-5 h-5">{">"}</button>
        <button onClick={() => handleDirection('down')} className="col-start-2 row-start-3 rounded-full border border-[#333333] bg-[#1A1A1A] text-[#CCCCCC] flex items-center justify-center w-5 h-5">v</button>
      </div>
    </div>
  )
}

export default LeftControl