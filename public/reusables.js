const footer = document.createElement("template");
const header = document.createElement("template");

// header.innerHTML = `
// <header class="whole-header-container" id="top">
// <section class="header-container max-width relative flex main-box">
//   <div class="logo-container">
//     <img class="logo" src="./assets/logo.png" alt="logo" />
//   </div>
//   <nav class="menu">
//     <ul>
//       <li><a href="#que-es">¿Qué es Dupin?</a></li>
//       <li><a href="#beneficios">Beneficios</a></li>
//       <li><a href="#como-funciona">¿Cómo funciona?</a></li>
//       <li><a href="#planes">Planes</a></li>
//       <!-- <li><a href="#clientes">Clientes</a></li> -->
//       <li><a href="#contacto" class="main-button">Contacto</a></li>
//     </ul>
//     <button class="close" id="close-menu">
//       <span class="iconify" data-icon="cil:plus"></span>
//     </button>
//   </nav>
//   <div class="buttons">
//     <a href="https://www.app.dupin.com" target="_blank" class="second-button">Iniciar sesión</a>
//     <a class="main-button">Registrarse</a>
//   </div>
//   <div class="burguer">
//     <img src="./assets/icons/menu.png" alt="" />
//   </div>
// </section>
// </header>
// `;

header.innerHTML = `
<header class="whole-header-container" id="top">
<section class="header-container max-width relative flex main-box">
  <div class="logo-container">
    <img class="logo" src="./assets/logo.png" alt="logo" />
  </div>
  <nav class="menu">
    <ul>
      <li><a href="#que-es">¿Qué es Dupin?</a></li>
      <li><a href="#beneficios">Beneficios</a></li>
      <li><a href="#como-funciona">¿Cómo funciona?</a></li>
      <li><a href="#planes">Planes</a></li>
      <!-- <li><a href="#clientes">Clientes</a></li> -->
      <li><a href="#contacto" class="main-button">Contacto</a></li>
    </ul>
    <button class="close" id="close-menu">
      <span class="iconify" data-icon="cil:plus"></span>
    </button>
  </nav>
  <div class="buttons">
    <a href="https://www.app.dupin.com" target="_blank" class="second-button">Iniciar sesión</a>
    <button class="btn btn-1">Registrarse</button>
  </div>
  <div class="burguer">
    <img src="./assets/icons/menu.png" alt="" />
  </div>
</section>
</header>
`;

footer.innerHTML = `
<footer class="whole-footer-container">
<section class="footer-container max-width relative main-box">
  <div class="logo-container">
    <img src="./assets/images/logo-2.png" alt="dupin" class="logo" />
  </div>
  <nav>
    <ul>
      <li>
        <a href="#que-es">¿Qué es Dupin?</a>
      </li>
      <li>
        <a href="#beneficios">Beneficios</a>
      </li>
      <li>
        <a href="#como-funciona">¿Cómo funciona?</a>
      </li>
      <li>
        <a href="#planes">Planes</a>
      </li>
      <!-- <li>
        <a href="#clientes">Clientes</a></li>
       -->
      <li><a href="#contacto" class="main-button">Contacto</a></li>
    </ul>
  </nav>
  <nav>
    <ul>
      <li><a href="https://www.app.dupin.com" target="_blank">Iniciar sesión</a></li>
      <li><a class="main-button">Registrarse</a></li>
      <li><a href="./pages/terminos-y-condiciones.html">Términos y condiciones</a></li>
      <li><a href="./pages/politica-de-privacidad.html">Política de privacidad</a></li>
      <li><a href="./pages/transferencia-internacional-de-datos.html">Transferencia internacional de datos personales</a></li>
    </ul>
  </nav>
  <a class="go-up"><b>Volver arriba</b></a>
  
</section>
<div class="copyright">
  <span class="current-year">©  ${new Date().getFullYear()} Dupin – All rights reserved</span>
</div>
</footer>
`;

document.body.prepend(header.content);
document.body.appendChild(footer.content);

const contactForm = document.querySelector(".whole-contact-container");
const mainButtons = document.getElementsByClassName("main-button");
Array.from(mainButtons).forEach((btn) => {
  btn.addEventListener("click", function () {
    contactForm.style.display = "flex";
  });
});
const closeContact = document.querySelector("#close-contact");
closeContact.onclick = () => {
  contactForm.style.display = "none";
};
const menuLinks = document.querySelectorAll(".menu a");
Array.from(menuLinks).forEach((link) => {
  link.addEventListener("click", function () {
    menu.classList.remove("open-menu");
  });
});

// despliegue menu
let menu = document.querySelector(".menu");
let burguer = document.querySelector(".burguer");
let closeMenu = document.querySelector("#close-menu");
burguer.onclick = () => {
  menu.classList.add("open-menu");
};
closeMenu.onclick = () => {
  menu.classList.remove("open-menu");
};

//cosas del footer
const goBackUp = document.querySelector(".go-up");
goBackUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
