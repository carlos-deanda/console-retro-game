const Screen = ({ pokemones, position }) => {
    console.log(position) 
  return (
    <>
      <div className="w-[450px] h-[200px] -mt-80 overflow-y-auto border-y-4 border-solid">
        <div className="flex flex-wrap justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index} style={{color: position === pokemon.id ? "red" : "white"}} className="flex flex-col border-2" >
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
    </>
  );
};

export default Screen;