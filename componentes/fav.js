import { drawCard} from '../api/gatos/vista.js' 
import { footerGenerator } from './footer.js';
import { pagPrincipal } from './principal.js';

export const goToFav = (container) => {
  let data = JSON.parse(localStorage.getItem('fav'));
  container.innerHTML = ''
  container.innerHTML = '<div id="contenedorPrincipal"> </div>'
  let contenedores = drawCard(data)
  let contenedor = document.getElementById('contenedorPrincipal')
  console.log('contenedoresDibujados', contenedores);
  contenedor.appendChild(contenedores)

  setTimeout(() => {
  footerGenerator(contenedor,3)
  let ContainerMensajes = document.getElementById('ContainerMensajes')
  let ContainerFav = document.getElementById('ContainerFav')
  let ContainerProfile = document.getElementById('ContainerProfile')
  let ContainerHome = document.getElementById('ContainerHome')

  ContainerHome.addEventListener('click', (e) => {
    pagPrincipal()
  })
  ContainerMensajes.addEventListener('click', (e) => {
    console.log('messages')
  })
  ContainerFav.addEventListener('click', (e) => {
    console.log("Ya estamos aca");
  })
  ContainerProfile.addEventListener('click', (e) => {
    console.log('Profile')
  })
  console.log('Esperos todo se haya impreso bien');
  }, 200);
  
}