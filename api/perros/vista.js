/* import { crearContenedorData } from '../../componentes/principal.js'
import { containerGato } from '../gatos/vista.js' */
export let containerPerro

export const drawCard = (data) => {
  if (containerPerro == null) {
    let contenedorDataNew = document.createElement('div')
    let divIzq = document.createElement('div')
    let divDer = document.createElement('div')
    divIzq.setAttribute('id', 'contenedorIzquierda')
    divDer.setAttribute('id', 'contenedorDerecha')
    contenedorDataNew.setAttribute('id', `contenedorPerros`)
    contenedorDataNew.style.translate = '2s'
    let i = 1
    data.forEach((each) => {
      let {nombre, raza, urlImg} = each
      i % 2 ? divIzq.innerHTML += `
      <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;" data-value="${i}">
      <div id="textCard">
      <div id="nombre" data-value="${i}">${nombre}</div>
      <div id="raza" data-value="${i}">${raza}</div>
      </div>
      </div>
      ` : divDer.innerHTML += `
      <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;" data-value="${i}">
      <div id="textCard" >
      <div id="nombre" data-value="${i}">${nombre}</div>
      <div id="raza" data-value="${i}">${raza}</div>
      </div>
      </div>
      `
      i++
    })
    contenedorDataNew.append(divIzq, divDer)
    containerPerro = contenedorDataNew
     return containerPerro
  } else {
    return containerPerro
  }
}
export const addtoDOM = (contenedor, contenedorAnterior, lugarInsertar) => {
  if (contenedorAnterior != null) {
    contenedorAnterior.remove()
  }
  contenedor.style.transform = 'translateY(300px)'
  contenedor.style.opacity = '0%'
  lugarInsertar.before(contenedor)
  setTimeout(() => {
    contenedor.style.transform = 'translateY(0px)'
    contenedor.style.opacity = '100%'
  }, 200)
}

export const insertDetail = (htmlfragment, lugarInsertar) => {
  lugarInsertar.innerHTML = ''
  lugarInsertar.appendChild(htmlfragment);
  console.log("done yolo dog xd");
}

/* export const drawCard = (data, textoCategorias) => {
  if (containerPerro == null || containerPerro.textContent === '') {
    containerPerro = crearContenedorData('Perro')
    textoCategorias.before(containerPerro)
  }
  if (containerGato != null) {
    containerGato.style.display = 'none'
    containerGato.style.transform = 'translateY(50px)'
  }
  containerPerro.style.display = 'initial'
  let contenedorIzq = document.getElementById('contenedorIzquierda')
  let contenedorDer = document.getElementById('contenedorDerecha')

  contenedorData.style.opacity = '100%'
  contenedorData.style.transition = '5s'
  contenedorIzq.innerHTML = ''
  contenedorDer.innerHTML = ''
  let i = 0
  data.forEach((each) => {
    let {nombre, urlImg} = each
    i % 2 ? contenedorIzq.innerHTML += `
    <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;">
    <p>${nombre}</p>
    </div>
  ` : contenedorDer.innerHTML += `
  <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;">
  <p>${nombre}</p>
  </div>
    `
    i++
  })
} */
/* export const drawCard = (data, contenedorIzquierda) => {
  console.log('data', data)
  contenedor.innerHTML = ''
  data.forEach((each) => {
    let {nombre, urlImg} = each
    contenedor.innerHTML += `
    <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;">
    <p>${nombre}</p>
    </div>
  `
  })
}
 */
