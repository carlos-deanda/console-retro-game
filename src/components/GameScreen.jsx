import React, { useState } from 'react'

function GameScreen({myPokeSelection, pcPokeSelection}) {
 const [myHP, setMyHP] = useState(100);
 const [pcHP, setPcHP] = useState(100);
 
 const getBarColor = (hp) => {
    if (hp > 50) return 'bg-green-500';
    if (hp > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

const myAttack = (damage) => {
    setPcHP(pcHP => pcHP - damage/3);
};

const pcAttack = (damage) => {
    setMyHP(myHP => myHP - damage/3);
};

function getRandomInt(min, max) {
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const handleTurn= (myDamage) => {
    myAttack(myDamage);
    const pcMove = pcPokeSelection[0].moves[getRandomInt(0,4)];  //tengo que hacerlo con getRandomInt
    pcAttack(pcMove.attack);
};
  
 return (
    <>
    <div className="w-[450px] h-[200px] border-4 border-solid border-black relative overflow-hidden bg-white">
        
        <div className="absolute top-2 left-4 w-40 bg-gray-100 border-2 border-black p-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-10">
            <p className="text-[8px] font-black uppercase">{pcPokeSelection[0]?.name}</p>
            <div className="w-full h-2 bg-gray-300 border border-black mt-1">
            <div 
                className={`h-full transition-all duration-500 ${getBarColor(pcHP)}`} 
                style={{ width: `${pcHP}%` }}
            ></div>
            </div>
        </div>

        <div className="absolute bottom-14 right-4 w-40 bg-gray-100 border-2 border-black p-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-10">
            <p className="text-[8px] font-black uppercase text-right">{myPokeSelection[0]?.name}</p>
            <div className="w-full h-2 bg-gray-300 border border-black mt-1 ml-auto">
            <div 
                className={`h-full transition-all duration-500 ${getBarColor(myHP)}`} 
                style={{ width: `${myHP}%` }}
            ></div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center h-[140px]">
            <div className="flex items-center justify-around w-full px-10">
                
                {myPokeSelection?.map((pokemon, index) => (
                    <div key={index} className="flex flex-col items-center mt-8">
                        <img
                            src={pokemon?.sprites?.back_default || pokemon?.sprites?.front_default}
                            alt={pokemon.name}
                            className="w-24 h-24 object-contain"
                        />
                    </div>
                ))}
                
                <p className="font-black italic text-lg opacity-20">VS</p>
                
                {pcPokeSelection?.map((pokemon, index) => (
                    <div key={index} className="flex flex-col items-center mb-8">
                        <img
                            src={pokemon?.sprites?.front_default}
                            alt={pokemon.name}
                            className="w-24 h-24 object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black h-12 flex grid grid-cols-2 overflow-y-auto">
            {myPokeSelection[0]?.moves?.slice(0, 4).map((m,i) => (
                <button 
                    key={i} 
                    className="flex flex-col justify-center px-4 border-r border-b border-gray-200 hover:bg-gray-100 transition-colors"
                    onClick={() => handleTurn(m.attack)}
                >
                    <span className="text-[9px] font-mono font-black uppercase truncate text-left">
                        {m.move.name}
                    </span>
                    <span className="text-[7px] font-bold text-blue-600 text-left">
                        ATK: {m.attack}
                    </span>
                    
                </button>
            ))}
        </div>
        
    </div>
    </>
  )
}

export default GameScreen