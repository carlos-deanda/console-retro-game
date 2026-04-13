import React, { useState } from 'react'

function GameScreen({myPokeSelection, pcPokeSelection}) {
 const [myHP, setMyHP] = useState(100);
 const [pcHP, setPcHP] = useState(100);
 
 const getBarColor = (hp) => {
    if (hp > 50) return 'bg-green-500';
    if (hp > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const myAttack = (damage) => {
    if(pcHP - damage/4 < 0){
        setPcHP(pcHP => 0);
        return;
    }
    setPcHP(pcHP => pcHP - damage/4);
};

const pcAttack = (damage) => {
    if(myHP- damage/4 < 0){
        setMyHP(myHP => 0);
        return;
    }
    setMyHP(myHP => myHP - damage/4);
};

const GameWon = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-50 flex flex-col items-center justify-center">
        <h1 className="font-black italic text-green-600 text-xl uppercase tracking-tighter">
            You Won!
        </h1>
        <p className="text-[10px] font-bold text-gray-500 mt-1">Your pokemon has won</p>
    </div>
);

const GameLost = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-black border-4 border-white p-4 shadow-[4px_4px_0_0_rgba(255,255,255,0.3)] z-50 flex flex-col items-center justify-center">
        <h1 className="font-black italic text-red-500 text-xl uppercase tracking-tighter">
            Game Over
        </h1>
        <p className="text-[10px] font-bold text-gray-400 mt-1">Your Pokemon has lost</p>
    </div>
);

const handleTurn = (myDamage) => {
    const remainingPcHp = pcHP - myDamage/4;
    
    if(myHP === 0 | pcHP === 0){
        return;
    }
    
    myAttack(myDamage);
   
    if(remainingPcHp <= 0){
        return;
    }

    setTimeout(() => {
        const pcMove = pcPokeSelection[0].moves[getRandomInt(0,4)]; 
        pcAttack(pcMove.attack);

    }, 500);

    
};
  
 return (
    <>
    <div className="w-[450px] h-[200px] border-4 border-solid border-black relative overflow-hidden bg-white">
        
        <div className="absolute top-2 left-4 h-12 w-40 bg-gray-100 border-2 border-black p-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-10 flex flex-col justify-between">
            <div className="flex justify-between items-start leading-none">
                <p className="text-[8px] font-black uppercase">{pcPokeSelection[0]?.name}</p>
                <span className="text-[12px] font-bold font-mono">{Math.round(pcHP)}</span>
            </div>
            
            <div className="w-full h-1.5 bg-gray-300 border border-black mb-0.5">
                <div 
                    className={`h-full transition-all duration-500 ${getBarColor(pcHP)}`} 
                    style={{ width: `${pcHP}%` }}
                ></div>
            </div>
        </div>

       <div className="absolute bottom-14 right-4 h-12 w-40 bg-gray-100 border-2 border-black p-1 shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-10 flex flex-col justify-between">
            <div className="flex justify-between items-start leading-none w-full">
                <span className="text-[12px] font-bold font-mono text-left">{Math.round(myHP)}</span>
                <p className="text-[8px] font-black uppercase text-right">{myPokeSelection[0]?.name}</p>
            </div>

            <div className="w-full h-1.5 bg-gray-300 border border-black mb-0.5">
                <div 
                    className={`h-full transition-all duration-500 ${getBarColor(myHP)}`} 
                    style={{ width: `${myHP}%` }}
                ></div>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center h-[140px]">
            <div className="flex items-center justify-around w-full px-10">
                
                {myPokeSelection?.map((pokemon, index) => (
                    <div key={index} className="flex flex-col items-center mt-15">
                        <img
                            src={pokemon?.sprites?.back_default}
                            alt={pokemon.name}
                            className="w-24 h-24 object-contain"
                        />
                    </div>
                ))}
                
                <p className="font-black italic text-lg opacity-20">VS</p>
                
                {pcPokeSelection?.map((pokemon, index) => (
                    <div key={index} className="flex flex-col items-center mb-15">
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

        {pcHP === 0 && <GameWon />}
        {myHP === 0 && <GameLost />}
        
    </div>
    </>
  )
}

export default GameScreen