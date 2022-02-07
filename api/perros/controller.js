import { urlPerros } from '../ulr.js'
import { getData } from './service.js'
import { drawCard, addtoDOM, insertDetail } from './vista.js'

import {containerGato} from '../gatos/vista.js'
import { addEvents, pagPrincipal } from '../../componentes/principal.js'
import { openDetail, addToFav } from '../../componentes/detalle.js'
export let contenedorPerro
let dataPerros
let i = 0
export const getResPerros = async (textoCategorias,cards, lugarInsertar) => {

  if (dataPerros == null) {
    dataPerros = await getData(urlPerros)
  }
  /*  contenedorData.style.transform = 'translateY(0px)'
  contenedorData.style.opacity = '100%' */
  /* drawCard(dataPerros, textoCategorias) */
  contenedorPerro = drawCard(dataPerros)
  addtoDOM(contenedorPerro, containerGato, textoCategorias)
  if(i == 0){
    addEvents(cards, lugarInsertar)
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
    }, 200);

}
