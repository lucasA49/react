import PropTypes from 'prop-types';
function PokemonCard({pokemon}) {
   console.log(pokemon)


  return (<>
  {(pokemon.imgSrc) ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>  }
  

    <p>{pokemon.name}</p>
  </>

      )
  }
  PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired
  })
  };
export default PokemonCard;