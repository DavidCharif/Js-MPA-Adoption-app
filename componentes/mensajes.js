import { goToFav } from './fav.js'
import { footerGenerator } from './footer.js'
import { pagPrincipal, $contenedor } from './principal.js'
import { goToProfile } from './profile.js'

// let boxTitulo

export const mensajes = (container) => {
  container.innerHTML = ''
  container.innerHTML = /* html */ `
  <div id="contenedorPrincipal">
    <div id="boxTitulo">
      <h3 id="tituloPrincipal"> Mensajes </h3>
    </div>
  </div>`
  setTimeout(() => {
    footerGenerator(container, 2)
    let ContainerMensajes = document.getElementById('ContainerMensajes')
    let ContainerFav = document.getElementById('ContainerFav')
    let ContainerProfile = document.getElementById('ContainerProfile')
    let ContainerHome = document.getElementById('ContainerHome')

    ContainerHome.addEventListener('click', (e) => {
      pagPrincipal()
    })
    ContainerMensajes.addEventListener('click', (e) => {
      console.log('Ya estamos aca')
    })
    ContainerFav.addEventListener('click', (e) => {
      goToFav(container)
    })
    ContainerProfile.addEventListener('click', (e) => {
      goToProfile(container)
    })

    /* console.log('Espero todo se haya impreso bien') */
  }, 75)
  setTimeout(() => {
    boxTitulo = document.getElementById('boxTitulo')
  }, 10)
}

export const contactar = (urlImg, nombre) => {
  mensajes($contenedor)
  boxTitulo.innerHTML = ''
  boxTitulo.innerHTML =
    /* html */
    ` <div id="contactoTop">
        <div id="back">
        <img id="backArrow" src="img/detail/backArray.png">
        <img id="profilePic" src="${urlImg}" alt="">
        <div id="blankSpace"></div>
        </div>
        <p>${nombre}</p>
      </div>
      <div id="containerMensajes">
        <div id="textContainerMensajes">
        <p>No hay mensajes</p>
        </div>
        <div >
          <input id="inputMensajes" type="text" placeholder="Aa">
        </div>
      </div>

    `
  setTimeout(() => {
    /* let input = document.getElementById('inputMensajes')
    input.keyup = (e) => enviarMensaje(e) */
    let arrow = document.getElementById('backArrow')
    arrow.onclick = () => mensajes($contenedor)
  }, 200)
  
}

const enviarMensaje = (e) => {
  if (e.keyCode === 13) {
      let text = e.value
      console.log(text)
    }
  }

