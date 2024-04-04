function Navbar (){
    const [count, setCount] = useState(0);
    return (
      <div>
        <Navbar pokemon={pokemonList[count]} count ={count} setCount ={setCount}/>
  
      </div>
    );






}

export default Navbar;