const $body = document.body;

document.addEventListener("DOMContentLoaded", ()=> {

    crearHeader($body);
    crearContenedor($body);
    crearAside($body.querySelector(".contenedor"));
    crearSection($body.querySelector(".contenedor"));
    crearTitulo("h2", "Proyectos", "center", "#0006", $body.querySelector(".contenedor aside"));
    crearLinks($body.querySelector(".contenedor aside"));
    contenerAsideRedes($body.querySelector(".contenedor aside"));
    mapearProyecto(1)
});


document.addEventListener("click", e =>{
    if(e.target.matches(".link")){
        removerSection();
        crearSection($body.querySelector(".contenedor"))
        mapearProyecto(e.target.dataset.id, null)
    }


})

document.addEventListener("mouseover", e => {
    if(e.target.matches(".btn")){
        e.target.style.background = "#CD4450";
    }
})

document.addEventListener("mouseout", e =>{
    if(e.target.matches(".btn")){
        e.target.style.background = "#B51A2B";
    }
})

function crearHeader(elemento){
    const header = document.createElement("header");
    const h1 = document.createElement("h1");

    header.style.height = "80px";
    header.style.width = "100%";
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.background = "#0370B7";

    h1.style.color = "#000117";
    h1.textContent = "Portafolio de Proyectos";
    h1.style.textAlign = "center";

    header.appendChild(h1)

    elemento.appendChild(header);
}


function crearContenedor(elemento){
    const div = document.createElement("div");
    div.style.display = "flex";
    div.classList.add("contenedor");
    div.style.width = "100%";
    div.style.height = "calc(100vh - 80px)";
    elemento.appendChild(div);
}

function crearAside(elemento){
    const aside = document.createElement("aside");
    aside.style.width = "30%";
    aside.style.height = "calc(100vh - 80px)";
    aside.style.background = "#34495E60";
    aside.style.display = "flex";
    aside.style.flexDirection = "column";
    aside.style.justifyContent = "flex-start";
    aside.style.alignItems = "center";
    aside.style.gap = "10px";
    aside.style.position = "relative";

    elemento.appendChild(aside);
}

function crearTitulo(etiqueta, texto, alineacion, colorFondo, elemento){
    const titulo = document.createElement(etiqueta);
    titulo.textContent = texto;
    titulo.style.textAlign = alineacion;
    titulo.style.color = "#DADAD9";
    titulo.style.width = "100%"
    titulo.style.height = "80px";
    titulo.style.display = "flex";
    titulo.style.justifyContent = "center";
    titulo.style.alignItems = "center";
    titulo.style.background = colorFondo;

    elemento.appendChild(titulo);
}

function crearLinks(elemento){
    const contenedorLinks = document.createElement("div");

    contenedorLinks.style.width = "90%";
    contenedorLinks.style.height = "calc(100vh - 80px - 80px - 60px)"
    contenedorLinks.style.overflowY = "scroll";
    contenedorLinks.classList.add("contenedor-links");

    fetch("./assets/data.json")
        .then(res => res.json())
        .then(json => {
            json.proyectos.forEach((proyecto) => {
                const a = document.createElement("a");
                const img = document.createElement("img");
                img.src = `./img/iconos_links/${proyecto.icono}`;
                img.alt = "Imagen"
                img.style.margin = "0 5px 0 15px";
        
                a.classList.add("link")
                a.style.width = "98%";
                a.style.height = "40px";
                a.style.display = "flex";
                a.style.flexDirection = "row-reverse"
                a.style.alignItems = "center";
                a.style.justifyContent = "left";
                a.style.borderLeft = "3px solid";
                a.style.cursor = "pointer";
                a.style.transition = ".3s ease all"
                a.style.marginBottom = "20px";
                a.textContent = `${proyecto.nombre}`
                a.setAttribute("data-id", proyecto.id)
                a.appendChild(img);
        
                contenedorLinks.appendChild(a);
                elemento.appendChild(contenedorLinks);
            })
        })
}

function contenerAsideRedes(elemento){
    const contenedorRedes = document.createElement("div");
    
    contenedorRedes.style.display = "flex";
    contenedorRedes.style.width = "100%";
    contenedorRedes.style.height = "40px";
    contenedorRedes.style.position = "absolute";
    contenedorRedes.style.bottom = "0"
    contenedorRedes.style.justifyContent = "space-around";
    contenedorRedes.style.alignItems = "center";
    contenedorRedes.style.background = "#0006"

    fetch("./assets/data.json")
        .then(res => res.json())
        .then(json => {
            
            json.redes.forEach(red => {
                const {icon, link} = red;
                const a = document.createElement("a");
                a.classList.add(icon);
                a.href = link;
                a.style.color = "#DADAD9";
                a.style.fontSize = "30px";
                a.style.textDecoration = "none";
                a.setAttribute("target", "_blank")
                contenedorRedes.appendChild(a);
            })
        })
    


    elemento.appendChild(contenedorRedes);
}

function crearSection(elemento){
    const section = document.createElement("section");
    section.classList.add("section");
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.alignItems = "center";
    section.style.justifyContent = "center";
    section.style.width = "70%";
    section.style.height = "calc(100vh - 80px)";
    elemento.appendChild(section);
}

function mapearProyecto(id){
    fetch(`./assets/data.json`)
        .then(res => res.json())
        .then(json => {
            json.proyectos.forEach(proyecto => {
                if(proyecto.id == id){
                    agregarElementosProyecto(proyecto);
                }
            })
        })
}


function agregarElementosProyecto(proyecto){

    const contenedorImagen = document.createElement("div");
    const img = document.createElement("img");
    contenedorImagen.style.width = "90%";
    contenedorImagen.style.maxHeight = "1600px;"
    img.src = `./img/imagenes_links/${proyecto.imagen}`;
    img.style.width = "100%";
    img.style.borderTopRightRadius = "5px";
    img.style.borderTopLeftRadius = "5px";
    contenedorImagen.appendChild(img);

    const contenedorBotones = document.createElement("div");
    contenedorBotones.style.width = "90%";
    contenedorBotones.style.height = "70px";
    contenedorBotones.style.background = "#34495E60";
    contenedorBotones.style.borderBottomRightRadius = "5px";
    contenedorBotones.style.borderBottomLeftRadius = "5px";
    contenedorBotones.style.display = "flex";
    contenedorBotones.style.flexDirection = "row";
    contenedorBotones.style.justifyContent = "space-around";
    contenedorBotones.style.alignItems = "center";


    const btnVerSitio = document.createElement("a");
    btnVerSitio.classList.add("btn");
    btnVerSitio.href = proyecto.link;
    btnVerSitio.textContent = "Ver Sitio";
    btnVerSitio.style.background = "#B51A2B";
    btnVerSitio.style.width = "20%";
    btnVerSitio.style.height = "40px"
    btnVerSitio.setAttribute("target", "_blank");
    btnVerSitio.style.textDecoration = "none";
    btnVerSitio.style.display = "flex";
    btnVerSitio.style.alignItems = "center";
    btnVerSitio.style.justifyContent = "center";
    btnVerSitio.style.borderRadius = "10px";
    btnVerSitio.style.color = "#000117";
    btnVerSitio.style.transition = ".3s ease all";
    btnVerSitio.style.fontWeight = "bold";

    const btnVerRepositorio = document.createElement("a");
    btnVerRepositorio.classList.add("btn");
    btnVerRepositorio.href = proyecto.repositorio;
    btnVerRepositorio.textContent = "Ver Repositorio";
    btnVerRepositorio.style.background = "#B51A2B";
    btnVerRepositorio.style.width = "20%";
    btnVerRepositorio.style.height = "40px"
    btnVerRepositorio.setAttribute("target", "_blank");
    btnVerRepositorio.style.textDecoration = "none";
    btnVerRepositorio.style.display = "flex";
    btnVerRepositorio.style.justifyContent = "center";
    btnVerRepositorio.style.alignItems = "center";
    btnVerRepositorio.style.borderRadius = "10px";
    btnVerRepositorio.style.color = "#000117";
    btnVerRepositorio.style.transition = ".3s ease all";
    btnVerRepositorio.style.fontWeight = "bold";


    contenedorBotones.appendChild(btnVerSitio);
    contenedorBotones.appendChild(btnVerRepositorio);
    $body.querySelector(".section").appendChild(contenedorImagen);
    $body.querySelector(".section").appendChild(contenedorBotones);
    
}

function removerSection(){
    const section = document.querySelector(".section");
    const elementoPadre = section.parentElement;

    elementoPadre.removeChild(section);
}