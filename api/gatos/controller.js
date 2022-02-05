import { urlGatos } from '../ulr.js'
import { drawCard, addtoDOM } from './vista.js'
import { getData } from './service.js'
import { containerPerro } from '../perros/vista.js'
let contenedorGato
let dataGatos
export const getResGatos = async (textoCategorias) => {
  if (dataGatos == null) {
    dataGatos = await getData(urlGatos)
  }
  contenedorGato = drawCard(dataGatos)
  addtoDOM(contenedorGato, containerPerro, textoCategorias)
}
