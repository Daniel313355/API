import { useState } from 'react'
import './style.css'

function Favoritos({ favoritos })  {

  return (
    <div>
    <h1>Favoritos</h1>
    <ul>
      {favoritos.map((pokemon) => (
        <li key={pokemon.id}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            width="50"
          />
          <p>{pokemon.name}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Favoritos
