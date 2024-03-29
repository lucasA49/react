function PokemonCard({pokemon}) {

  //  console.log(props)


  return (<>
  {(pokemon.imgSrc) ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>  }
  

    <p>{pokemon.name}</p>
  </>

  )
}
export default PokemonCard;