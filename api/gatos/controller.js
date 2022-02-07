import { urlGatos } from '../ulr.js'
import { drawCard, addtoDOM, insertDetail } from './vista.js'
import { getData } from './service.js'

import { addEvents, pagPrincipal } from '../../componentes/principal.js'
import { openDetail } from '../../componentes/detalle.js'
import { containerPerro } from '../perros/vista.js'
let contenedorGato
let dataGatos
let i = 0
export const getResGatos = async (textoCategorias, data, lugarInsertar) => {
  if (dataGatos == null) {
    dataGatos = await getData(urlGatos)
  }
  contenedorGato = drawCard(dataGatos)
  addtoDOM(contenedorGato, containerPerro, textoCategorias)
  if (i === 0) {
    addEvents(data, lugarInsertar)
    i++
  }
}

export const getDetailCat = async (id, lugarInsertar) => {
  dataGatos = await getData(urlGatos)
  console.log('data', dataGatos)
  let data = dataGatos[id - 1]

  let fragmentHtml = openDetail(data)

  insertDetail(fragmentHtml, lugarInsertar)
  setTimeout(() => {
    let arrow = document.getElementById('backArrow')
    arrow.onclick = () => pagPrincipal()
  }, 200)
}
