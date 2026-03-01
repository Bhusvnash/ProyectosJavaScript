const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=11&offset=0'
const pokemonContainer = document.getElementById('pokemonContainer')
const inputBuscar = document.getElementById('buscar')

function cargarPokemonsIniciales() {
  pokemonContainer.innerHTML = ''
  fetch(pokemonListUrl)
    .then((response) => response.json())
    .then((pokemonListData) => {
      pokemonListData.results.forEach((item) => {
        fetch(item.url)
          .then((res) => res.json())
          .then((data) => {
            let imagen = ''
            if (data.sprites && data.sprites.other && data.sprites.other['official-artwork'] && data.sprites.other['official-artwork'].front_default) {
              imagen = data.sprites.other['official-artwork'].front_default
            } else if (data.sprites && data.sprites.front_default) {
              imagen = data.sprites.front_default
            }

            let tipo = (data.types && data.types[0] && data.types[0].type) ? data.types[0].type.name : 'Desconocido'

            let datosPokemon = {
              img: imagen,
              name: data.name,
              especie: tipo,
              hp: data.stats[0] ? data.stats[0].base_stat : 0,
              atk: data.stats[1] ? data.stats[1].base_stat : 0,
              def: data.stats[2] ? data.stats[2].base_stat : 0,
              especial: data.stats[3] ? data.stats[3].base_stat : 0,
            }
            renderHtml(datosPokemon)
          })
          .catch((err) => console.error(err))
      })
    })
    .catch((err) => console.error(err))
}

cargarPokemonsIniciales()

function buscarPokemon() {
  const nombre = inputBuscar.value.toLowerCase().trim()
  if (nombre === '') {
    cargarPokemonsIniciales()
    return
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Pokemon no encontrado')
      }
      return response.json()
    })
    .then((data) => {
      pokemonContainer.innerHTML = ''
      let imagen = ''
      if (data.sprites && data.sprites.other && data.sprites.other['official-artwork'] && data.sprites.other['official-artwork'].front_default) {
        imagen = data.sprites.other['official-artwork'].front_default
      } else if (data.sprites && data.sprites.front_default) {
        imagen = data.sprites.front_default
      }

      let tipo = (data.types && data.types[0] && data.types[0].type) ? data.types[0].type.name : 'Desconocido'

      let datosPokemon = {
        img: imagen,
        name: data.name,
        especie: tipo,
        hp: data.stats[0] ? data.stats[0].base_stat : 0,
        atk: data.stats[1] ? data.stats[1].base_stat : 0,
        def: data.stats[2] ? data.stats[2].base_stat : 0,
        especial: data.stats[3] ? data.stats[3].base_stat : 0,
      }
      renderHtml(datosPokemon)
    })
    .catch(() => {
      pokemonContainer.innerHTML = '<div class="col-12 text-center text-muted py-5"><h4>No se encontro ningun Pokemon con ese nombre o numero.</h4></div>'
    })
}

inputBuscar.addEventListener('change', buscarPokemon)
inputBuscar.addEventListener('search', buscarPokemon)

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
