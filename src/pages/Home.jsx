import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20'

  // Llamada a la api de pokemones
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.results, 'data')
        setPokemons(data.results)
      })
  }, [])

  const handleSearch = (event) => {
    console.log(event.target.value, 'event')
    setSearch(event.target.value)
  }

  const filteredPokemon = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='container'>
      <h1>Home</h1>
      <form className='form-inline my-2 w-100'>
        <input
          type='text'
          className='form-control'
          placeholder='Buscar pokemon'
          value={search}
          onChange={handleSearch}
        />
      </form>
      <div className='row'>
        {
          filteredPokemon.map((pokemon) => {
            return (
              <div className='col-6 col-md-4 col-lg-3' key={pokemon.name}>
                <div className='card'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} className='card-img-top' alt={pokemon.name} />
                  <div className='card-body'>
                    <Link to={`/pokemon/${pokemon.url.split('/')[6]}`} className='card-title'>
                      {pokemon.name}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
