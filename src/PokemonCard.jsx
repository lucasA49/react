import PropTypes from 'prop-types';
import pokemonList from './conponents/pokemonIndex';
function PokemonCard({pokemon, count, setCount}) {
function Suivant(){
  if ( count< pokemonList.length - 1){ 
    setCount (count +1) 
  } 
} 
  
function Precedent (){
  if ( count > 0){
    setCount ( count-1)


  }
  


}



  return (<>
  {(pokemon.imgSrc) ? <img src={pokemon.imgSrc} alt="" /> : <p>???</p>  }
  
  

    <p>{pokemon.name}</p>
   <button onClick={Precedent}>Précedent</button> 
   <button onClick={Suivant}>Suivant </button>
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