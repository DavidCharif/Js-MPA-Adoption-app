import { goToFav } from "./fav.js"
import { footerGenerator } from "./footer.js"
import { pagPrincipal } from "./principal.js"
import { goToProfile } from "./profile.js"

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
  }, 50)

}