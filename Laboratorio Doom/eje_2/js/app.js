const rutaImgs = [
  { id: 'gato', ruta: './assets/gato.jpg' },
  { id: 'perro', ruta: './assets/perro.jpg' },
  { id: 'loro', ruta: './assets/loro.jpg' },
]
//objeto con id,ruta
const contenedor = document.querySelector('#contenedor_img')

function loadHtml() {
  rutaImgs.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add(
      'card',
      'col-3',
      'm-2',
      'justify-content-center',
      'align-items-center'
    )
    const img = document.createElement('img')
    img.classList.add('card-img-top', 'm-1', 'size_img')
    img.src = item.ruta
    img.id = item.id
    div.appendChild(img)
    contenedor.appendChild(div)
  })
}
loadHtml()

const gato = document.querySelector('#gato')
gato.addEventListener('mouseover', () => {
  gato.src = rutaImgs[2].ruta
})
//Al pasar sobre la de Perro debe cambiar a una imagen de calavera
const perro = document.querySelector('#perro')
perro.addEventListener('mouseover', () => {
  console.log(perro)
  perro.src = './assets/calavera.jpg'
})

document.querySelector('#recargar').addEventListener('click', () => {
  //evento reload
  window.location.reload()
})
// Sobre la imagen de loro debe cambiar por la imagen de perro
const loro = document.querySelector('#loro')
loro.addEventListener('mouseover', () => {
  loro.src = rutaImgs[1].ruta
})

/*
html card : 
<div class="card col-4 m-2 justify-content-center align-items-center">
  <img class="card-img-top m-1"  style="height: 9rem; width: 10rem;" src="./assets/gato.jpg" alt="gato" />
</div>

*/
