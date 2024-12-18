function NavBar({setPokemonIndex, pokemonList}) {
    return (

        <nav>
            {pokemonList.map((pokemon, index) => (
                <button
                    type="button"
                    key={pokemon.name}
                    onClick={() => setPokemonIndex(index)}
                >
                    {pokemon.name}
                </button>
            ))}
        </nav>
    )
}











export default NavBar;