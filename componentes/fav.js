import { footerGenerator } from './footer.js';
import { addEvents, pagPrincipal } from './principal.js';
let containerFav
let cards
let contenedor

export const goToFav = (container) => {
  let data = JSON.parse(localStorage.getItem('fav'));
  container.innerHTML = ''
  container.innerHTML = `
  <div id="contenedorPrincipal">
    <div id="boxTitulo">
      <h3 id="tituloPrincipal"> Mascotas Favoritas </h3>
    </div></div>`
    if(data != null){
      let contenedores = drawCard(data)
      contenedor = document.getElementById('contenedorPrincipal')
     
      console.log('contenedoresDibujados', contenedores);
      contenedor.appendChild(contenedores)
    } else {
      console.log('No hay favs');
    }

  
  setTimeout(() => {
    footerGenerator(container,3)
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
    console.log("Ya estamos aca");
  })
  ContainerProfile.addEventListener('click', (e) => {
    console.log('Profile')
  })
  console.log('Esperos todo se haya impreso bien');
  }, 50);

  addEvents(cards, contenedor)
  
}

const drawCard = (data) => {
  
    let contenedorDataNew = document.createElement('div')
    let divIzq = document.createElement('div')
    let divDer = document.createElement('div')
    divIzq.setAttribute('id', 'contenedorIzquierda')
    divDer.setAttribute('id', 'contenedorDerecha')
    contenedorDataNew.setAttribute('id', `contenedorFav`)
    contenedorDataNew.style.translate = '2s'
    let i = 1
    data.forEach((each) => {
      let {nombre, raza, urlImg} = each
      i % 2 ? divIzq.innerHTML += `
      <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover; " data-value="${i}">
      <div id="textCard">
      <div data-value="${i}" id="nombre">${nombre}</div>
      <div data-value="${i}" id="raza">${raza}</div>
      </div>
      </div>
      ` : divDer.innerHTML += `
      <div class="card" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${urlImg}); background-size: cover;" data-value="${i}">     
      <div id="textCard">
      <div id="nombre" data-value="${i}">${nombre}</div>
      <div id="raza" data-value="${i}">${raza}</div>
      </div>
      </div>
      `
      i++
    })
    contenedorDataNew.append(divIzq, divDer)
    containerFav = contenedorDataNew
    cards = document.getElementsByClassName('card')
    console.log('cards', cards);
    
    return containerFav
  }
