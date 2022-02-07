let localObj
let resultadoIsInFav
let like
let favlike

/* objLocal.filter((ele) => ele.id == obj.id) */
/*   if (localStorage.length == 0){
   return console.log("Storage Vacio");
 } else {
   objLocal = JSON.parse(localStorage.getItem('fav'));
 } */

/*  objLocal.forEach(element => {
       if(element.id == objLocal.id){
        resultadoIsInFav ='like1'
      } else {
        resultadoIsInFav = 'like'
      }
      console.log('resultadoIsInFav', resultadoIsInFav); */
/*   if(element.includes(obj.id)){
       resultadoIsInFav ='like1'
       console.log('esta en favs');
     } else {
      resultadoIsInFav = 'like'
     }  */
/* if(obj.id == element.id){
       console.log('esta en favs');
      resultadoIsInFav ='like1'
     } else {
      resultadoIsInFav = 'like'
     }  */

/*    }); 
   console.log('res', resultadoIsInFav);
 } */

export const openDetail = (obj) => {
  console.log('resultadoIsInFav', resultadoIsInFav)
  let {
    nombre,
    urlImg,
    genero,
    raza,
    edad,
    personalidad,
    direccion,
    historia,
    publicado,
    tipo
  } = obj

  let docFragment = document.createDocumentFragment()
  let div = document.createElement('div')
  div.setAttribute('id', 'contendedorDetalle')
  div.innerHTML = `
  <div id="PrimeraMitad">
    <div id="imagenDetalle" style="background: url(${urlImg}); background-size: cover">
    <img id="backArrow" src="img/detail/backArray.png">
    </div>
  </div>

  <div id="segundaMitad">
    <div id="bloqueOneDatos">
      <h3 id="textoBloqueOne">${nombre} <img src='img/detail/${genero}.png'></h3>      
      <div id="likeButton"><img id="favButton"></div>
    </div>
    <div id="bloqueTwoDatos">
      <p id="bloqueDosFirst"><img src="img/detail/raza.png">${raza}</p>
      <p id="bloqueDosSecond"><img src="img/detail/edad.png">${edad}</p>
      <p id="bloqueDosThird"><img src="img/detail/map.png">${direccion}</p>
    </div>
    <div id="bloqueThreeDatos">
      <div id="Personalidad">
        <h4>Personalidad</h4>
        <p>${personalidad}</p>
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

  favlike = document.getElementById('favButton')
  docFragment.appendChild(div)

  setTimeout(() => {
    favlike = document.getElementById('favButton')
    like = document.getElementById('likeButton')
    let fav = false
    if (localStorage.length == 0) {
      console.log('vacio')
      favlike.classList.add('click')
      favlike.src = 'img/detail/like.png'
    } else {
      favlike.src = 'img/detail/like.png'
      let objLocal = JSON.parse(localStorage.getItem('fav'))

      /* console.log('first', Object.values(objLocal)); */
      objLocal.forEach((element) => {
        if (element.id == obj.id && element.tipo == obj.tipo) {
          favlike.src = 'img/detail/like1.png'
          console.log('Esta en fav')
          fav = true
        }
      })
    }
    console.log('fav', fav)
    like.onclick = () => {
      if (fav == false) {
        console.log('agregando')
        addToFav(obj)
        favlike.src = 'img/detail/like1.png'
        fav = true
      } else {
        if (localStorage.length != 0) {
          console.log('removiendo')
          if (fav == true) {
            removeFav(obj)
            favlike.src = 'img/detail/like.png'
            fav = false
          }
        }
      }
    }
  }, 200)

  setTimeout(() => {
    isInFav(obj)
  }, 200)
  return docFragment
}

export const addToFav = (obj) => {
  if (localStorage.length == 0) {
    console.log('Local storage vacio')
    let arrayFav = []
    arrayFav.unshift(obj)
    console.log('arrayFav', arrayFav)
    localStorage.setItem('fav', JSON.stringify(arrayFav))
  } else {
    localObj = JSON.parse(localStorage.getItem('fav'))
    localObj.unshift(obj)
    localStorage.setItem('fav', JSON.stringify(localObj))
  }
}

const removeFav = (obj) => {
  let newArray
  localObj = JSON.parse(localStorage.getItem('fav'))
  newArray = localObj.filter((element) => element.id !== obj.id)
  console.log('newArray', newArray)
  localStorage.setItem('fav', JSON.stringify(newArray))
  console.log('Objeto eliminado')
}
const isInFav = (obj) => {
  if (localStorage.length == 0) {
    console.log('vacio')
  } else {
    let objLocal = JSON.parse(localStorage.getItem('fav'))
    favlike = document.getElementById('favButton')
    /* console.log('first', Object.values(objLocal)); */
    Object.values(objLocal).forEach((element) => {
      if (element.id === obj.id) {
        favlike.classList.add('click')
        console.log('Esta en fav')
      } else {
        favlike.classList.remove('click')
      }
    })
  }
}
