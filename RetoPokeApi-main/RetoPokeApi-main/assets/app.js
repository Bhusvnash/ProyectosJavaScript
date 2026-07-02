const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=11&offset=0'
const pokemonContainer = document.getElementById('pokemonContainer')
pp()
function pp() {
  fetch(pokemonListUrl)
    .then((response) => response.json())
    .then((pokemonListData) => {
      console.log(pokemonListData)
      pokemonListData.results.forEach((item) => {
        fetch(item.url)
          .then((data) => data.json())
          .then((data) => {
            let datosPokemon = {
              img: data.sprites.other['official-artwork'].front_default,
              name: data.name,
              especie: data.types[0].type.name,
              hp: data.stats[0].base_stat,
              atk: data.stats[1].base_stat,
              def: data.stats[2].base_stat,
              especial: data.stats[3].base_stat,
            }
            renderHtml(datosPokemon)
          })
      })
    })
  return
}

const inputBuscar = document.getElementById('buscar')
inputBuscar.addEventListener('change', () => {
  const nombre = document.getElementById('buscar').value.toLowerCase().trim()
  if (nombre ==='') {
    pp()
    return
  }
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((data) => data.json())
    .then((data) => {
      pokemonContainer.innerHTML = ''
      let datosPokemon = {
        img: data.sprites.other['official-artwork'].front_default,
        name: data.name,
        especie: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        atk: data.stats[1].base_stat,
        def: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
      }
      renderHtml(datosPokemon)
    })
})

function renderHtml(datosPokemon) {
  pokemonContainer.innerHTML += `
  <div class="col-md-4 mb-4">
    <div class="card shadow-sm h-100 text-center">
      
      <img src="${datosPokemon.img}" 
          class="card-img-top p-3" 
          alt="${datosPokemon.name}" 
          style="height:200px; object-fit:contain;">
      <div class="card-body">
        <h5 class="card-title text-capitalize fw-bold">
          ${datosPokemon.name}
        </h5>
        <span class="badge bg-primary mb-2">
          Tipo <br> 
          ${datosPokemon.especie}
        </span>
        <div class="d-flex justify-content-around mt-3">
          <div>
            <small class="text-muted">HP</small>
            <p class="fw-bold mb-0">${datosPokemon.hp}</p>
          </div>
          <div>
            <small class="text-muted">DEF</small>
            <p class="fw-bold mb-0">${datosPokemon.def}</p>
          </div>
          <div>
            <small class="text-muted">ATK</small>
            <p class="fw-bold mb-0">${datosPokemon.atk}</p>
          </div>
          <div>
            <small class="text-muted">SPC</small>
            <p class="fw-bold mb-0">${datosPokemon.especial}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`
}
