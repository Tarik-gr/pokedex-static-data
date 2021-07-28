import React from 'react'

const Description = ({pokemon, display}) => {
    let types = ''
    pokemon.types.forEach(type=>types+=`${type.name} `) // get the types and put them in a string

    return (
        <div className={`${!display && 'no-display'} description-container`}>
            <div className="row">
                <div className="image">
                    <img src={pokemon.img} alt={pokemon.name}/>
                </div>
                <div className="infos">
                    <h2>Nom : {pokemon.name}</h2>
                    <p>Types : {types}</p>
                    <p>Height : {pokemon.height}</p>
                    <p>Weight : {pokemon.weight}</p>
                    {pokemon.abilities.map((ability, index)=><p key={index}>{`Ability ${index+1} : ${ability.ability}`}</p>)}
                </div>
                <p className="pokemon-id-description">{pokemon.id}</p>
            </div>
        </div>
    )
}

export default Description
