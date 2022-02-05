let footerPrincipal
let footerMensajes
let footerFav
let footerProfile
let arrayClass
let footerBase
let ul
const footerFun = () => {
  let footer = document.createElement('footer')
  ul = document.createElement('ul')
  ul.innerHTML = `
  <li class="navLink">      
    <a >
    <div style="display:flex" id="ContainerHome" class="footerContainer">
      <img id="home" src="/img/footer/home.svg">
    </div>
    </a>
  </li>
  <li class="navLink">
    <a href="#news">
      <div style="display:flex" id="ContainerMensajes" class="footerContainer">
        <img src="/img/footer/mensajes.svg">  
      </div>
     </a>
  </li>
  <li class="navLink">
    <a href="#contact">
      <div style="display:flex" id="ContainerFav" class="footerContainer">
        <img src="/img/footer/fav.svg">
      </div>
    </a>
  </li>
  <li class="navLink">
    <a href="#about">
      <div style="display:flex" id="ContainerProfile" class="footerContainer">
        <img src="/img/footer/perfil.svg"></a></li>
      </div>
    </a>
  </li>
  `
  footer.appendChild(ul)
  footerBase = footer
  arrayClass = footerBase.getElementsByClassName('navLink')
  return footerBase
}

const crearFooterActivo = (activeElement) => {
  let li = document.createElement('li')
  li.setAttribute('class', 'navLink')
  if (footerBase != null) {
    switch (activeElement) {
      case 'home':
        li.innerHTML = `<a class="active">
            <div style="display:flex" id="ContainerHome" class="footerContainer">
              <img id="home" src="/img/footer/home.svg">
              <p>Home</p>
            </div>
          </a>`
        break
      case 'messages':
        li.innerHTML = `<a class="active">
            <div style="display:flex" id="ContainerMensajes" class="footerContainer">
              <img src="/img/footer/mensajes.svg" > 
              <p>Mensajes</p>
            </div>
          </a>`
        break
      case 'fav':
        li.innerHTML = `
          <a class="active">
            <div style="display:flex" id="ContainerFav" class="footerContainer">
              <img id="home" src="/img/footer/fav.svg">
              <p>Favoritos</p>
            </div>
          </a> `
        break
      case 'profile':
        li.innerHTML = `
          <a class="active">
            <div style="display:flex" id="ContainerProfile" class="footerContainer">
              <img id="home" src="/img/footer/perfil.svg">
              <p>Perfil</p>
            </div>
          </a>        
        `
        break
    }
    return li
  }
}
const fusionarFooters = (numero, footerBase) => {
  let liFragment

  switch (numero) {
    case 0:
      liFragment = crearFooterActivo('home')
      arrayClass[numero].replaceWith(liFragment)
      footerPrincipal = footerBase
      break
    case 1:
      liFragment = crearFooterActivo('messages')

      arrayClass[numero].replaceWith(liFragment)
      footerMensajes = footerBase
      break
    case 2:
      liFragment = crearFooterActivo('fav')
      arrayClass[numero].replaceWith(liFragment)
      footerFav = footerBase
      break
    case 3:
      liFragment = crearFooterActivo('profile')
      arrayClass[numero].replaceWith(liFragment)
      footerProfile = footerBase
      break
  }
  console.log('footers fusionados')
}
export const footerGenerator = (contenedor, num) => {
  if (
    footerPrincipal == null &&
    footerFav == null &&
    footerMensajes == null &&
    footerProfile == null
  ) {
    console.log('Creando footers')
    for (let i = 0; i < 4; i++) {
      let base = footerFun()
      fusionarFooters(i, base)
    }
  }
  switch (num) {
    case 1:
      contenedor.appendChild(footerPrincipal)
      break
    case 2:
      contenedor.appendChild(footerMensajes)
      break
    case 3:
      contenedor.appendChild(footerFav)
      break
    case 4:
      contenedor.appendChild(footerProfile)
      break
  }
}

/*  <footer>
      <ul>
      <li>
      
      
      <a class="active" href="#home">
      <div style="display:flex" id="ContainerHome" class="footerContainer">
      
      <img id="home" src="/img/footer/home.svg">
      
      </div>
      </a>
      </li>
      <li><a href="#news">
      <div style="display:flex" id="ContainerMensajes" class="footerContainer">
      <img src="/img/footer/mensajes.svg">  
      </div>
      </a></li>
      <li><a href="#contact">
      <div style="display:flex" id="ContainerFav" class="footerContainer">
      <img src="/img/footer/fav.svg">
      </div>
      </a></li>
      <li><a href="#about">
      <div style="display:flex" id="ContainerProfile" class="footerContainer">
      <img src="/img/footer/perfil.svg"></a></li>
      </div>
      </ul>
      </footer> */
