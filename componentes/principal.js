import { getResGatos } from '../api/gatos/controller.js'
import { getResPerros } from '../api/perros/controller.js'
let textoCategorias
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
      <footer><img src="design/Property1Home.svg"</footer>
  `
  textoCategorias = document.querySelector('.clear')
  let botonPerros = document.querySelector('#perros')
  let botonGatos = document.querySelector('#gatos')

  getResPerros(textoCategorias)
  botonGatos.addEventListener('click', async e => {
    botonGatos.style.opacity = '100%'
    botonPerros.style.opacity = '50%'
    console.log('Click en gatos')
    if (document.getElementById('contenedorGatos') == null) {
      getResGatos(textoCategorias)
    }
  })
  botonPerros.addEventListener('click', async e => {
    botonPerros.style.opacity = '100%'
    botonGatos.style.opacity = '50%'
    console.log('Click en perros')
    if (document.getElementById('contenedorPerros') == null) {
      getResPerros(textoCategorias)
    }
  })
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
