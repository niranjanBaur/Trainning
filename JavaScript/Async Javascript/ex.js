// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(res => res.json())
//     .then(data => console.log(data.sprites.back_default))

const poke_container = document.getElementById("poke_container");

const pokeNum = 900;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
    ghost : '#6d75bd',
    ice : '#6d75bd',
    pshychic : '#ea95f5'
};

const main_types = Object.keys(colors)


const fetchPokemons = async () => {
  for (let i = 1; i < pokeNum; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const res = await fetch(url);
  const pokemon = await res.json();

    createPokemonCards(pokemon)

};

fetchPokemons()


function createPokemonCards(pokemon){
    const pokemonELe = document.createElement('div');

    pokemonELe.classList.add('pokemon');

    const poke_type = pokemon.types.map(ele => ele.type.name);

    const type = main_types.find(type => poke_type.indexOf(type)>-1);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const color = colors[type];

    pokemonELe.style.backgroundColor = color

    const pokeInnerHtml = `
        <div class = "img-container">
            <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
        </div>

        <div class = "info">
            <span class = "number">#${pokemon.id.toString().padStart(3,0)}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type : <span>${type}</span></small>
        </div>
    `;

    pokemonELe.innerHTML = pokeInnerHtml

    poke_container.appendChild(pokemonELe)

}