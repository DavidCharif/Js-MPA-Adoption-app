import { urlPerros } from '../ulr.js'
import { getData } from './service.js'
import { drawCard, addtoDOM } from './vista.js'
import {containerGato} from '../gatos/vista.js'

export let contenedorPerro
let dataPerros
export const getResPerros = async (textoCategorias) => {
  if (dataPerros == null) {
    dataPerros = await getData(urlPerros)
  }
  /*  contenedorData.style.transform = 'translateY(0px)'
  contenedorData.style.opacity = '100%' */
  /* drawCard(dataPerros, textoCategorias) */
  contenedorPerro = drawCard(dataPerros)
  addtoDOM(contenedorPerro, containerGato, textoCategorias)
}

