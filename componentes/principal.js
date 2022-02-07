import { getResGatos, getDetailCat } from '../api/gatos/controller.js'
import { getResPerros, getDetailDog } from '../api/perros/controller.js'
import { goToFav } from './fav.js'
import { footerGenerator } from './footer.js'
import { goToProfile } from './profile.js'

let textoCategorias
/*
let ContainerFav
let ContainerHome
let ContainerMensajes
let ContainerProfile  */
export const $contenedor = document.querySelector('body')

export const pagPrincipal = () => {
  $contenedor.innerHTML = ''
  $contenedor.innerHTML += `
      <div id="contenedorPrincipal" >

        <div id="boxTitulo">
        <h3 id="tituloPrincipal"> Adopta una adorable mascota </h3>
        </div>
        
      <div id="textoCategorias">
        <p> Categorías de mascotas </p> 
      <div id="botones">
      
        <div id="perros" class="categoria" >
          <div id="imgContainer">
            <img id="smallImg" src="design/perros.svg"> 
          </div>
          <p>Perros</p>
        </div>
        <div id="gatos" class="categoria" style="opacity:50%">
          <div id="imgContainer">
            <img id="smallImg" src="design/gatos.svg">
          </div>
          <p>Gatos</p>
         </div>
      </div>
      </div>

      <div class="clear"></div>     
  `

  textoCategorias = document.querySelector('.clear')
  let botonPerros = document.querySelector('#perros')
  let botonGatos = document.querySelector('#gatos')
  setTimeout(() => {
    let cards = document.getElementsByClassName('card')
    getResPerros(textoCategorias, cards, $contenedor)

    botonGatos.addEventListener('click', async (e) => {
      botonGatos.style.opacity = '100%'
      botonPerros.style.opacity = '50%'
      console.log('Click en gatos')

      if (document.getElementById('contenedorGatos') == null) {
        getResGatos(textoCategorias, cards, $contenedor)
      }

      footerGenerator($contenedor, 1)
    })
    botonPerros.addEventListener('click', async (e) => {
      botonPerros.style.opacity = '100%'
      botonGatos.style.opacity = '50%'
      console.log('Click en perros')
      if (document.getElementById('contenedorPerros') == null) {
        getResPerros(textoCategorias, cards, $contenedor)
      }

      footerGenerator($contenedor, 1)
    })
    footerGenerator($contenedor, 1)
    let ContainerMensajes = document.getElementById('ContainerMensajes')
    let ContainerFav = document.getElementById('ContainerFav')
    let ContainerProfile = document.getElementById('ContainerProfile')
    let ContainerHome = document.getElementById('ContainerHome')

    ContainerHome.addEventListener('click', (e) => {
      /* ContainerHome.innerHTML += '<p>Home</p>'
    let classList =  ContainerHome.parentNode.classList;
    classList = Array.from(classList)
    if (classList.includes('active')){
      console.log('home')
    let p = document.createElement("p")
    p.textContent = 'Home'
    p.setAttribute('id','textFooter')
    ContainerHome.parentNode.classList.toggle('active')
    ContainerHome.appendChild(p)
    } */
      console.log('click')
    })
    ContainerMensajes.addEventListener('click', (e) => {
      console.log('messages')
    })
    ContainerFav.addEventListener('click', (e) => {
      goToFav($contenedor)
    })
    ContainerProfile.addEventListener('click', (e) => {
      console.log('Profile')
      goToProfile($contenedor)
    })
  }, 300)
}
const detalle = (ele, lugarInsertar) => {
  let idCard = ele.target.getAttribute('data-value')
  let tipo = ele.target.getAttribute('tipo')
  if (tipo === 'dog') {
    getDetailDog(idCard, lugarInsertar)
  } else {
    getDetailCat(idCard, lugarInsertar)
  } /*   if(dog){
    getDetailDog(idCard, lugarInsertar)

  } else if (cat){
    getDetailCat(idCard, lugarInsertar)
  } */
}
export const addEvents = (array, lugarInsertar) => {
  if (array != null) {
    for (let i = 0; i < array.length; i++) {
      console.log('evento add')
      array[i].addEventListener('click', (e) => detalle(e, lugarInsertar))
    }
  }
}

/* export const crearContenedorData = (data) => {
  let contenedorDataNew = document.createElement('div')
  let divIzq = document.createElement('div')
  let divDer = document.createElement('div')
  divIzq.setAttribute('id', 'contenedorIzquierda')
  divDer.setAttribute('id', 'contenedorDerecha')
  contenedorDataNew.setAttribute('id', `contenedor${data}`)
  contenedorDataNew.append(divIzq, divDer)
  return contenedorDataNew
}
 */
