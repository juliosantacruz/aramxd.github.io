const menu = document.getElementById('navbar');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

console.log(secciones)

// TAMANIO DE LA BARRA INDICADOR DEL MENU
let indicadorSize = menu.querySelector('a').offsetWidth;
// console.log(`el ancho del boton es de ${indicadorSize} px`)
indicador.style.width = indicadorSize + 'px'
indicador.style.transform = `translate(${indicadorSize}px)`


let indexSeccionActiva;

// OBSERVER (HACE TRACK A LA PAGINA PARA MOVER EL INDICADOR DE BOTON)

const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        console.log(entrada.target.id)
        if (entrada.isIntersecting) {
            // console.log(entrada.target)
            //OBTENEMOS LA SECCION QUE ESTA ENTRANDO A PANTALLA
            //CREAMOS UN ARREGLE CON [...SECCIONES] Y USAMOS EL METODO INDEXOF
            indexSeccionActiva = [...secciones].indexOf(entrada.target)


            //MULTIPLICAMOS EL ANCHO DEL INDICADOR POR EL INDICE DE LA SECCION
            indicador.style.transform = `translateX(${(indicadorSize * (indexSeccionActiva+1))}px)`
        }
    })

}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: .2
})

// agregamos observer para el hero
observer.observe(document.getElementById('welcome-section'))

// ASIGNAMOS EL OBSERVADOR A CADA UNA DE LAS SECCIONES
secciones.forEach(seccion => observer.observe(seccion))


//EVENTO PARA CUANDO LA PANTALLA CABIE DE TAMANIO
const onResize = () => {
    //cuando la pantalla cambia de lugar el ancho del indicador se recalcula
    indicadorSize = menu.querySelector('a').offsetWidth;

    //cmbiamos el tamanio del indicador
    indicador.style.width = indicadorSize + 'px'

    //cambiamos la nueva posicion
    indicador.style.transform = `translateX(${(indicadorSize * indexSeccionActiva)}px)`


    //

}

window.addEventListener('resize', onResize)
 