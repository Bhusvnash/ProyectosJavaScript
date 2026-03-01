let imgs = [
  './assets/calavera.jpg',
  './assets/gato.jpg',
  './assets/loro.jpg',
  './assets/perro.jpg',
]
let indice = [0, 1, 2, 3]
let accion = 0
const imgContainer = document.querySelector('#imgContainer')
document.querySelector('#atras').addEventListener('click', (e) => {
  accion = -1
  renderDoom()
  return
})
document.querySelector('#adelante').addEventListener('click', (e) => {
  accion = 1
  renderDoom()
  return
})
function renderDoom() {
  imgContainer.innerHTML = ''
  indice = indice.map((item) => {
    let newIndex = item + accion
    if (newIndex === -1) newIndex = 3
    if (newIndex === 4) newIndex = 0
    return newIndex
  })
  console.log(indice)
  //Creamos dom
  indice.forEach((item) => {
    const col = document.createElement('div')
    col.classList.add('col-3')
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.src = imgs[item]
    //col>card>img
    card.appendChild(img)
    col.appendChild(card)
    imgContainer.appendChild(col)
  })
}
renderDoom()
let html = `
<div class="col-3">
          <div class="card">
            <img class="card-img-top" src="./assets/gato.jpg" alt="Title" />
          </div>
</div>
`
