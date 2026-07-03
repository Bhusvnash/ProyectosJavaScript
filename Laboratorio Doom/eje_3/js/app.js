const main = document.querySelector('main')
main.classList.add('container', 'row-cols-auto', 'justify-content-center')
const persona = {
  name: 'Dunamer Beharry',
  foto: './assets/gato.jpg',
  descripcion: 'I am the bets in c# <br/> but sql is my enemy :3',
  languages: ['C#', 'py', 'js'],
}
const contenedorCvs = document.querySelector('#contenedorCv')
const btnMostar = document.querySelector('#btnMostra')
//
btnMostar.addEventListener('click', (item) => {
  btnMostar.style.display = 'none'
  //contrimos la card con DOOM :
  //
  const divContenedor = document.createElement('div')
  divContenedor.classList.add('card', 'mb-3')
  divContenedor.style.width = '540px'
  //
  const row = document.createElement('div')
  row.classList.add('row', 'g-0', 'justify-content-center')
  colImg = document.createElement('div')
  colImg.classList.add('col-md-4')
  //
  const img = document.createElement('img')
  img.classList.add('justify-content-center', 'img-fluid', 'rounded-start')
  img.style.width = '15rem'
  img.style.height = '15rem'
  img.src = persona.foto
  colContenido = document.createElement('div')
  colContenido.classList.add('col-md-8', 'justify-content-center')
  //
  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')
  //
  const cardTitle = document.createElement('h5')
  cardTitle.classList.add('card-title')
  cardTitle.textContent = persona.name
  //
  const p1 = document.createElement('p')
  p1.classList.add('card-text')
  p1.innerHTML = persona.descripcion
  //
  const p2 = document.createElement('p')
  p2.classList.add('card-text')
  persona.languages.forEach((item) => {
    p2.innerHTML += `<span class="border-primary m-2 language">${item}</span>`
  })
  // divContenedor>row>colImg(img)+colContenido(cardBody>(cardTitle+p1+p2))
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(p1)
  cardBody.appendChild(p2)
  colImg.appendChild(img)
  colContenido.appendChild(cardBody)
  row.appendChild(colImg)
  row.appendChild(colContenido)
  divContenedor.appendChild(row)
  console.log(divContenedor)
  //final
  contenedorCvs.appendChild(divContenedor)
})
let cardHtml = `
  <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
              <img
                  style="height: 15rem; width: 15rem"
                  src="./assets/gato.jpg"
                  class="justify-content-center img-fluid rounded-start"
                  alt="Card title"
                />
              </div>
              <div class="col-md-8 justify-content-center">
              <div class="card-body">
                  <h5 class="card-title">Dunamer Beharry</h5>

                  <p class="card-text">
                    I am the bets in c# <br />but sql is my enemy :3
                  </p>
                  <p class="card-text">
                    <h6 class="">Language</h6>
                      <span class="border-primary language">C#</span>
                      <span class="border-success language">Python</span>
                      <span class="border-warning language">js</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
`
