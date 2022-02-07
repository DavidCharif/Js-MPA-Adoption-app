import { goToFav } from "./fav.js"
import { footerGenerator } from "./footer.js"
import { pagPrincipal } from "./principal.js"

export const goToProfile = (container) => {
  container.innerHTML = ''
  let div = document.createElement('div')
  div.setAttribute('id','contenedorPrincipalProfile')
  div.innerHTML = `
  <div id="boxTitulo">
   <h3 id="tituloPrincipal"> Perfil </h3>
   </div>
 <div id="dataContainer">
   <img src="img/detail/person.png">
   <p>David Charif</p>
   <p id="sub">Editar cuenta</p>
 </div>
 <div id="form">
   <form>
     <div id="form1">
     <label>Nombre</label>
     <input type="text" placeholder="David">
     </div>
     <div id="form2">
     <label>Apellido</label>
     <input type="text" placeholder="Charif">
     </div>
     <div id="form3">
     <label>Correo</label>
     <input type="email" placeholder="DavidCharif@hotmail.com">
     </div>
     <div id="buttonContainer">
     <button type="button">Guardar</button>
     </div>
   </form>
 </div>
 `
 container.appendChild(div)
 footerGenerator(container,4)
 setTimeout(() => {
  
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
  goToFav(container)
})
ContainerProfile.addEventListener('click', (e) => {
  console.log('Ya estamos aca')
})
console.log('Esperos todo se haya impreso bien');
}, 50);
}