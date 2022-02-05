import {pagPrincipal} from './componentes/principal.js'

let $contenedor = document.getElementById('contenedor')
let logo = document.getElementById('logo')
let repetition = 0
let firstTwoComponents = [
  { id: 0,
    titulo: 'Encuentra tu amigo',
    urlImg: 'img/index/esperandoAdopcion.png',
    texto: 'Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!'
  },
  { id: 1,
    titulo: 'Crea una nueva historia',
    urlImg: 'img/index/Adoptado.png',
    texto: 'Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.'}
]

/* let firstComponent = () => {
  $contenedor.innerHTML = `
    <div class="card">
        <img loading="lazy" src="img/esperandoAdopcion.png" alt="puppiePhoto">
        <h3>Encuentra tu amigo </h3>
        <p>Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!</p><button id="button">Siguiente</button>
    <div>
    `
  button = document.getElementById('button')
}
let segundoComponent = () => {
  console.log('click')
  $contenedor.innerHTML = `
  <div class="card">
    <img loading="lazy" src="img/Adoptado.png" alt="puppiePhoto">
    <h3>Crea una nueva historia </h3>
    <p>Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.</p><button id="button">Siguiente</button>
   <div>
  `
}
 */
const htmlCreator = (urlImg, titulo, texto) => {
  $contenedor.innerHTML = ''
  $contenedor.innerHTML = `
  <div class="cardInicial">
    <img loading="lazy" src="${urlImg}" alt="puppiePhoto">
    <h3>${titulo}</h3>
    <p>${texto}</p> 
    <button type="button" id="button">Siguiente</button>
   <div>
  `
  /* let button = document.getElementById('button')
  button.addEventListener('click', addHtml(1)) */
}

const addHtml = (id) => {
  /* logo.removeEventListener('click', y) */
  let {urlImg, titulo, texto} = firstTwoComponents[id]
  htmlCreator(urlImg, titulo, texto)
  if (repetition > id) {
    console.log('lets go')
    pagPrincipal()
  } else {
    addEvent('button', addHtml)
  }
}

let y = () => setTimeout(function () {
  addHtml(0)
}, 1000)

const addEvent = (id, func) => {
  let button = document.getElementById(id)
  button.addEventListener('click', e => {
    func(1)
  })
  console.log('Evento añadido', func)
  repetition += 1
}
logo.addEventListener('mouseenter', e => {
  y()
})
