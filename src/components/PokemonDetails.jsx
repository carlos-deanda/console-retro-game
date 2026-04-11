import React from 'react'

function PokemonDetails({ myPokeSelection }) {
  return (
    <div className="flex justify-center w-full relative">
      <div className="absolute top-[-35px] w-[450px] min-h-[350px] bg-white border-4 border-black border-t-0 rounded-b-[2.5rem] shadow-xl z-[-1] pb-6">
        
        <div className="h-10"></div> 

        <div className="flex flex-col items-center">
          {myPokeSelection.length === 0 ? (
            <div className="py-20">
              <p className="text-gray-300 font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">
                Scanning...
              </p>
            </div>
          ) : (
            myPokeSelection.map((pokemon, index) => {

              return (
                <div key={index} className="flex flex-col items-center w-full px-6">
                  
                  <div className="flex justify-center gap-6 mb-2">
                    <img src={pokemon?.sprites?.front_default} alt="f" className="w-20 h-20 object-contain" />
                    <img src={pokemon?.sprites?.back_default} alt="b" className="w-20 h-20 object-contain" />
                  </div>
                  
                  <div className="bg-black text-white px-8 py-1 rounded-sm border-b-4 border-red-600 mb-2">
                    <p className="font-black uppercase text-sm tracking-widest">{pokemon?.name}</p>
                  </div>

                  <div className="flex gap-2 mb-3">
                    {pokemon.types?.map((t, i) => (
                      <span key={i} className="text-[7px] font-black uppercase border-2 border-black px-2 py-0.5 bg-yellow-400">
                        {t.type.name}
                      </span>
                    ))}
                  </div>

                  <p className="w-full text-left text-[8px] font-black uppercase mb-1 text-gray-400">Move List:</p>
                  <div className="w-full h-[100px] overflow-y-auto border-2 border-black p-2 bg-gray-100 rounded-md">
                    <div className="grid grid-cols-2 gap-2">
                      {pokemon.moves?.map((m, i) => (
                        <div key={i} className="flex flex-col border-b border-gray-300 pb-1">
                          <span className="text-[9px] font-mono uppercase truncate">{m.move.name}</span>
                          <span className="text-[8px] font-bold text-blue-600">ATK: {m.attack}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails