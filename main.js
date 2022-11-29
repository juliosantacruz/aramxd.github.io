const menu = document.getElementById("navbar");
const indicador = document.getElementById("indicador");
const secciones = document.querySelectorAll(".seccion");

//console.log(secciones);

// TAMANIO DE LA BARRA INDICADOR DEL MENU
let indicadorSize = menu.querySelector("a").offsetWidth;
// console.log(`el ancho del boton es de ${indicadorSize} px`)
indicador.style.width = indicadorSize + "px";
indicador.style.transform = `translate(${indicadorSize}px)`;

let indexSeccionActiva;

// OBSERVER (HACE TRACK A LA PAGINA PARA MOVER EL INDICADOR DE BOTON)

const observer = new IntersectionObserver(
  (entradas, observer) => {
    entradas.forEach((entrada) => {
      //console.log(entrada.target.id);
      if (entrada.isIntersecting) {
        // console.log(entrada.target)
        //OBTENEMOS LA SECCION QUE ESTA ENTRANDO A PANTALLA
        //CREAMOS UN ARREGLE CON [...SECCIONES] Y USAMOS EL METODO INDEXOF
        indexSeccionActiva = [...secciones].indexOf(entrada.target);

        //MULTIPLICAMOS EL ANCHO DEL INDICADOR POR EL INDICE DE LA SECCION
        indicador.style.transform = `translateX(${
          indicadorSize * (indexSeccionActiva + 1)
        }px)`;
      }
    });
  },
  {
    rootMargin: "-80px 0px 0px 0px",
    threshold: 0.2,
  }
);

// agregamos observer para el hero
observer.observe(document.getElementById("welcome-section"));

// ASIGNAMOS EL OBSERVADOR A CADA UNA DE LAS SECCIONES
secciones.forEach((seccion) => observer.observe(seccion));

//EVENTO PARA CUANDO LA PANTALLA CABIE DE TAMANIO
const onResize = () => {
  //cuando la pantalla cambia de lugar el ancho del indicador se recalcula
  indicadorSize = menu.querySelector("a").offsetWidth;

  //cmbiamos el tamanio del indicador
  indicador.style.width = indicadorSize + "px";

  //cambiamos la nueva posicion
  indicador.style.transform = `translateX(${
    indicadorSize * indexSeccionActiva
  }px)`;

  //
};
window.addEventListener("resize", onResize);

// Aqui esta la logica del formulario de contacto
const ContactFormButton = document.getElementById("ContactFormButton");
const ContactForm = document.getElementById("contactFormCard");
const SubmitContactFormButton = document.getElementById('submitContactFormButton')
const closeIcon = document.querySelector('.closeIcon')


// logica para cerrar modal con icono de cierre
closeIcon.addEventListener('click', ()=>{
    ContactForm.classList.toggle("spread");
})




// logica para abrir modal de contacto
ContactFormButton.onclick = () => {
  ContactForm.classList.toggle("spread");
};

// Accion de envio de formulario
SubmitContactFormButton.onclick = ()=>{
    SubmitContactForm()
}


// Logica para envio de formulario
function SubmitContactForm() {
  var formdata = new FormData();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  

  formdata.append("full_name", name);
  formdata.append("email", email);
formdata.append("message", message)
   
  const formError = document.getElementById("formError");

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://p01--restapi--qzvdk8qp7kvm.code.run/test/api/v1/portcontact",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

    const inputs = document.querySelectorAll(
        "#name, #email, #message"
      );
    
      inputs.forEach((input) => {
        input.value = "";
      });

      ContactForm.classList.toggle("spread");
      animationMessage()

}

function animationMessage(){
  const notification = document.getElementById('notification')
  const notificacionBar = document.getElementById('progress')

  notification.style.animation = 'fade 5s linear forwards'
  notificacionBar.style.animation = 'progressBar 3s .25s linear forwards'
}

const devtoUrl = 'https://dev.to/api/articles?username=julio_santacruz'
async function DevToPosts(URL){
  const response = await fetch(URL)
  const DevToPosts = await response.json()


  if(response.status !== 200){
    console.log(response.status)
  }else{
    DevToPosts.forEach(post=>{
      //console.log(post)
      createCard(post)
    })
    
    
    
  }

}


function createCard(element){
  const devtoList = document.getElementById('DevToPost')

  const linkCard = document.createElement('a')
  linkCard.href=element.url
  linkCard.target='_blank'
  linkCard.className='project'
  devtoList.append(linkCard)

  const Card = document.createElement('article')
  // Card.className = 'project'
  linkCard.append(Card)

  const projectCard = document.createElement('div')
  projectCard.className='project-card project-card-shadow'
  Card.append(projectCard)

  const cardContent = document.createElement('div')
  cardContent.className='project-card-content'
  projectCard.append(cardContent)


  const cardImage = document.createElement('div')
  cardImage.className='project-card-img center-img'
  const leCardImage = document.createElement('img')
  leCardImage.src= element.social_image

  cardImage.append(leCardImage)
  projectCard.append(cardImage)

  const cardTitle = document.createElement('h3')
  cardTitle.innerText=element.title
  cardTitle.className='project-tile'
  projectCard.append(cardTitle)

  const cardFooter = document.createElement('div')
  cardFooter.className='project-card-footer-devto'
  projectCard.append(cardFooter)

  const cardFooterText =document.createElement('p')
  const cardFooterTags = element.tag_list.toString()
  const cardTagsList = cardFooterTags.replace(/,/g," - ")
  cardFooterText.innerText=`tags: ${cardTagsList}`
  cardFooter.append(cardFooterText)

}


DevToPosts(devtoUrl)