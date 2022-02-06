import { pagPrincipal } from "./principal.js"

export const openDetail = obj => {
  let {nombre,
     urlImg,
     genero,
     raza,
     edad,
     personalidad,
     direccion,
     historia,
     publicado} = obj
  
  let docFragment =  document.createDocumentFragment()
  let div = document.createElement('div')
  div.setAttribute('id','contendedorDetalle')
  div.innerHTML = `
  <div id="PrimeraMitad">
    <div id="imagenDetalle" style="background: url(${urlImg}); background-size: cover">
    <img id="backArrow" src="/img/detail/backArray.png">
    </div>
  </div>

  <div id="segundaMitad">
    <div id="bloqueOneDatos">
      <h3 id="textoBloqueOne">${nombre} <img src='/img/detail/${genero}.png'></h3>      
      <div id="likeButton"><img src="/img/detail/like.png"></div>
    </div>
    <div id="bloqueTwoDatos">
      <p id="bloqueDosFirst"><img src="/img/detail/raza.png">${raza}</p>
      <p id="bloqueDosSecond"><img src="/img/detail/edad.png">${edad}</p>
      <p id="bloqueDosThird"><img src="/img/detail/map.png">${direccion}</p>
    </div>
    <div id="bloqueThreeDatos">
      <div id="Personalidad">
        <h4>Personalidad</h4>
      </div>
      <div id="historia">
        <h4>Historia de ${nombre}</h4>
        <p>${historia}</p>
      </div>
    </div>
    <div id="bloqueContacto">
      <div id="publicacion">
        <img>
        <p>Publicado por</p>
        <p>${publicado}</p>
      </div>
      <div id="botonContacto">
        <button type="button">Contactar</button>
      </div>
    </div> 
  </div>   
  

  `
  docFragment.appendChild(div)
  console.log('docFragment', docFragment);
  
  
  
  return docFragment;


}