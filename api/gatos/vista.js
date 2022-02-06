/* import { crearContenedorData } from "../../componentes/principal.js";
import { containerPerro } from "../perros/vista.js"; */
export let containerGato
export const drawCard = (data) => {
  if (containerGato == null) {
    let contenedorDataNew = document.createElement('div')
    let divIzq = document.createElement('div')
    let divDer = document.createElement('div')
    divIzq.setAttribute('id', 'contenedorIzquierda')
    divDer.setAttribute('id', 'contenedorDerecha')
    contenedorDataNew.setAttribute('id', `contenedorGatos`)
    contenedorDataNew.style.translate = '2s'
    let i = 1
    data.forEach((each) => {
      let {nombre, raza, urlImg} = each
      i % 2 ? divIzq.innerHTML += `
      <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover; " data-value="${i}">
      <div id="textCard">
      <div data-value="${i}" id="nombre">${nombre}</div>
      <div data-value="${i}" id="raza">${raza}</div>
      </div>
      </div>
      ` : divDer.innerHTML += `
      <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;" data-value="${i}">     
      <div id="textCard">
      <div id="nombre" data-value="${i}">${nombre}</div>
      <div id="raza" data-value="${i}">${raza}</div>
      </div>
      </div>
      `
      i++
    })
    contenedorDataNew.append(divIzq, divDer)
    containerGato = contenedorDataNew
    
    return containerGato
  } else {
    
    return containerGato
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
  console.log("done yolo xd");
}
