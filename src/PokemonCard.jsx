function PokemonCard(props) {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },

  ]
  //  console.log(pokemonList[0].name)


  return (<>
  {(pokemonList[0].imgSrc) ? <img src={pokemonList[0].imgSrc} alt="" /> : <p>???</p>  }
  

    <p>{pokemonList[0].name}</p>
  </>

  )
};
export default PokemonCard;