import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
  const { id } = useParams()

  const [pokemonDetails, setPokemonDetails] = useState(null)

  const apiVersion = 'v2'

  useEffect(() => {
    fetch(`https://pokeapi.co/api/${apiVersion}/pokemon/${id}`)
      .then(response => response.json())
      .then(dataJson => {
        setPokemonDetails(dataJson)
      })
      .catch(error => console.log(error))
  }, [id, apiVersion])

  return (
    <>
      <div>Pokemon Details</div>
      <h1>{pokemonDetails?.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${pokemonDetails?.name} sprite`} />
      <table className='table'>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {pokemonDetails?.stats.map((stat, index) => {
            return (
              <tr key={index}>
                <td>{stat.stat.name}</td>
                <td>{stat.base_stat}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default PokemonDetails
