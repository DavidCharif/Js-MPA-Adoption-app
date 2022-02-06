import { urlPerros } from '../ulr.js'
import { getData } from './service.js'
import { drawCard, addtoDOM, insertDetail } from './vista.js'

import {containerGato} from '../gatos/vista.js'
import { addEvents, pagPrincipal } from '../../componentes/principal.js'
import { openDetail, addToFav } from '../../componentes/detalle.js'
export let contenedorPerro
let dataPerros
let i = 0
export const getResPerros = async (textoCategorias,data) => {

  if (dataPerros == null) {
    dataPerros = await getData(urlPerros)
  }
  /*  contenedorData.style.transform = 'translateY(0px)'
  contenedorData.style.opacity = '100%' */
  /* drawCard(dataPerros, textoCategorias) */
  contenedorPerro = drawCard(dataPerros)
  addtoDOM(contenedorPerro, containerGato, textoCategorias)
  if(i == 0){
    addEvents(data)
    i++
  } 
}


export const getDetailDog = (id, lugarInsertar) => {
  let data = dataPerros[id - 1]
  let fragmentHtml = openDetail(data)

  insertDetail(fragmentHtml,lugarInsertar)
  setTimeout(() => {
    let arrow = document.getElementById("backArrow")
    arrow.onclick = () => pagPrincipal()
    let likeButton = document.getElementById("likeButton")
    likeButton.onclick = () => {
      addToFav(data)
      likeButton.firstElementChild.src = "img/detail/like1.png"
    };

    }, 200);

}
