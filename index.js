import {pagPrincipal} from './componentes/principal.js'

let $contenedor = document.querySelector('body')
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
const htmlCreator = (urlImg, titulo, texto) => {
  $contenedor.innerHTML = ''
  $contenedor.innerHTML = `
  <div id="contenedorPrincipal">
    <div class="cardInicial img">
      <img loading="lazy" src="${urlImg}" alt="puppiePhoto">
    </div>
    <div id="text">
    <h3>${titulo}</h3>
    <p>${texto}</p>
    </div>
    <div id="buttonInicio"> 
    <button type="button" id="button">Siguiente</button>
    </div>
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
}, 300)


const addEvent = (id, func) => {
  let button = document.getElementById(id)
  button.addEventListener('click', e => {
    func(1)
  })
  console.log('Evento añadido')
  repetition += 1
}
logo.addEventListener('mouseenter', e => {
  y()
})
