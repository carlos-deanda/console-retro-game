import React from 'react'

function GameScreen({myPokeSelection, pcPokeSelection}) {
  return (
    <>
    <div className="w-[450px] h-[200px] overflow-y-auto border-y-4 border-solid">
        <div className="flex flex-col items-center justify-center">
            <p>Game Screen</p>
            <div className="flex items-center gap-14">
                {myPokeSelection?.map((pokemon, index) => (
                    <div key={index} className="flex flex-col " >
                <img
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                    className="w-25 h-25"
                    />
                <p>{pokemon.name}</p>
                </div>
                ))}
                
                <p>VS</p>
                {pcPokeSelection?.map((pokemon, index) => (
                    <div key={index} className="flex flex-col " >
                <img
                    src={pokemon?.sprites?.front_default}
                    alt={pokemon.name}
                    className="w-25 h-25"
                    />
                <p>{pokemon.name}</p>
                </div>
                ))}
            </div>

        </div>
    </div>
    </>
  )
}

export default GameScreen