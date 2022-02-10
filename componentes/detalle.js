let localObj

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
  let {
    nombre,
    urlImg,
    genero,
    raza,
    edad,
    Personalidad,
    direccion,
    historia,
    publicado
  } = obj

  let docFragment = document.createDocumentFragment()
  let div = document.createElement('div')
  div.setAttribute('id', 'contendedorDetalle')
  div.innerHTML = /* html */`
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
        <div id="contenedorPersonalidad"></div>
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
    if (localStorage.getItem('fav') === null) {
      /*  console.log('vacio') */
      favlike.classList.add('click')
      favlike.src = 'img/detail/like.png'
    } else {
      favlike.src = 'img/detail/like.png'
      let objLocal = JSON.parse(localStorage.getItem('fav'))

      /* console.log('first', Object.values(objLocal)); */
      objLocal.forEach((element) => {
        if (element.id === obj.id && element.tipo === obj.tipo) {
          favlike.src = 'img/detail/like1.png'
          /*  console.log('Esta en fav') */
          fav = true
        }
      })
    }
    /* console.log('fav', fav) */
    like.onclick = () => {
      if (fav === false) {
        /* console.log('agregando') */
        addToFav(obj)
        favlike.src = 'img/detail/like1.png'
        fav = true
      } else {
        if (localStorage.length != 0) {
          /* console.log('removiendo') */
          if (fav === true) {
            removeFav(obj)
            favlike.src = 'img/detail/like.png'
            fav = false
          }
        }
      }
    }
    let contenedorPersonalidad = document.getElementById('contenedorPersonalidad')
    divPersonalidad(Personalidad,contenedorPersonalidad)
  }, 200)

  setTimeout(() => {
    isInFav(obj)
  }, 200)
  return docFragment
}

export const addToFav = (obj) => {
  if (localStorage.getItem('fav') === null) {
    /* console.log('Local storage vacio') */
    let arrayFav = []
    arrayFav.unshift(obj)
    /* console.log('arrayFav', arrayFav) */
    localStorage.setItem('fav', JSON.stringify(arrayFav))
  } else {
    localObj = JSON.parse(localStorage.getItem('fav'))
    localObj.unshift(obj)
    localStorage.setItem('fav', JSON.stringify(localObj))
  }
}

const removeFav = (obj) => {
  localObj = JSON.parse(localStorage.getItem('fav'))
  let newArray = []
  /*  localObj.forEach((ele) => {
    if (ele.tipo === obj.tipo) {
      console.log('ele.tipo', ele.tipo)
      if (ele.id === obj.id) {
        console.log(ele.nombre, ' se va a remover')
      }
    } else {
      console.log('push')
      newArray.push(ele)
    } */

  localObj.forEach((ele) => {
    if (ele.id === obj.id && ele.tipo === obj.tipo) {
      console.log(ele.nombre, 'este se va a remover')
    } else {
      console.log('push')
      newArray.push(ele)
    }

    /* let newArray = localObj.filter((element) => {
    console.log(element.id !== obj.id && element.tipo === obj.tipo)
    element.tipo !== obj.tipo && element.id !== obj.id
  }) */
    /* console.log('newArray', newArray) */
    /* console.log('Objeto eliminado') */
  })
  localStorage.setItem('fav', JSON.stringify(newArray))
}
const isInFav = (obj) => {
  if (localStorage.getItem('fav') === null) {
    console.log('Local storage vacio')
  } else {
    let objLocal = JSON.parse(localStorage.getItem('fav'))
    favlike = document.getElementById('favButton')
    /* console.log('first', Object.values(objLocal)); */
    Object.values(objLocal).forEach((element) => {
      if (element.id === obj.id) {
        favlike.classList.add('click')
        /* console.log('Esta en fav') */
      } else {
        favlike.classList.remove('click')
      }
    })
  }
}
const divPersonalidad = (arr, containedorPersonalidad) => {
  let imagenes = ['img/caracteristicas/carinoso.png','img/caracteristicas/inquieto.png', 'img/caracteristicas/jugueton.png', 'img/caracteristicas/tierno.png']
  
  arr.map(each =>{
    let i = Math.floor(Math.random()*4)
    console.log(each)
    containedorPersonalidad.innerHTML += /* html */`
      <div class="personalidad">
        <img src=${imagenes[i]}>
        <p>${each}</p>
        
      </div>
    `
    i++
  })
}