// Home

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const productosBancarios = [
  {
    producto: "Solicitá tu cuenta 100% gratis",
    onBoarding: "Completá el formulario",
    descripción: "Recibí y activá tu tarjeta"
  },
  {
    producto: "Cuida lo que más queres",
    onBoarding: "Seguros de hogar y tecno",
    descripción: "¡Enterate más aqui!"
  },
  {
    producto: "Préstamos",
    onBoarding: "Acreditación inmedita en cuenta",
    descripción: "¡Sin trámites, sin moverte!"
  },

]

const contenedor = document.querySelector(".productosBancarios");

function productosNmbAHTML(productosBancarios) {
  for (let i = 0; i < productosBancarios.length; i++) {
    const productos = document.createElement("div");
    productos.className = "productosBancarios"
    productos.innerHTML = `
        <div>
            <h2>${productosBancarios[i].producto}</h2>
            <p> ${productosBancarios[i].onBoarding}</p>
            <p> ${productosBancarios[i].descripción}</p>
            
        </div>
    `
    contenedor.appendChild(productos)

  }
}
productosNmbAHTML(productosBancarios)