const $body = document.body;

document.addEventListener("DOMContentLoaded", ()=> {
    $body.setAttribute("data-theme", "noche");
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

        if(e.target.dataset.id == 7){
            let contrasena = 1001944317;
            let input = parseInt(prompt("Introduce la contraseña"));

            if(contrasena === input){
                removerSection();
                crearSection($body.querySelector(".contenedor"))
                mapearProyecto(e.target.dataset.id, null)
            }
        } else {
            removerSection();
            crearSection($body.querySelector(".contenedor"))
            mapearProyecto(e.target.dataset.id, null)

        }

    }

    if(e.target.matches(".btn-theme")){
        //const elementos = document.querySelectorAll("[data-theme]");
        /*elementos.forEach(el => {
            el.style.background = "#DADAD9";
            el.style.color = "#000";
        })
        console.log(elementos)*/

        document.querySelector("body").style.background = "#f2f2f2";
        document.querySelector("aside").style.background = "#fff";
        document.querySelector("aside").style.boxShadow = "0 0 3px #000";
        document.querySelector("aside .titulo").style.background = "#292F36";
        document.querySelectorAll("aside .contenedor-links .link").forEach(link => link.style.color = "#000");
        document.querySelector("aside .contenedor-redes").style.backgroundColor = "#292F36"
        document.querySelector("header").style.boxShadow = "0 0 3px #000";
        document.querySelector("footer .contenedor").style.backgroundColor = "#292F36";
        document.querySelector(".section .contenedor-botones").style.background = "#292F36"
    }


})

document.addEventListener("mouseover", e => {
    if(e.target.matches(".btn")){
        e.target.style.background = "#CD4450";
    }

    if(e.target.matches(".red-social")){
        e.target.style.filter = "drop-shadow(0 0 1px #0370B7)";
    }
})

document.addEventListener("mouseout", e =>{
    if(e.target.matches(".btn")){
        e.target.style.background = "#B51A2B";
    }

    if(e.target.matches(".red-social")){
        e.target.style.filter = "none";
    }
});


function crearHeader(elemento){
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const contenedorLinks = document.createElement("div");
    contenedorLinks.style.display = "flex";
    contenedorLinks.style.gap = "15px";

    //<a style="cursor: pointer; padding: 5px 10px; background: #000117aa; color: #DADAD9; border-radius: 10px;"> Acerca de </a>
    contenedorLinks.innerHTML = `
        <a class="btn-theme" style="background: #000117aa; padding: 5px; border-radius: 50%; cursor: pointer;"> 🌞 <a>
    `


    header.style.height = "80px";
    header.style.width = "100%";
    header.style.display = "flex";
    header.style.justifyContent = "space-around";
    header.style.alignItems = "center";
    header.style.background = "#0370B7";

    h1.style.color = "#000117";
    h1.textContent = "Portafolio";
    h1.style.textAlign = "center";

    header.appendChild(h1);
    header.appendChild(contenedorLinks);

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
    titulo.classList.add("titulo");
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
    contenedorRedes.classList.add("contenedor-redes")
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
                a.classList.add("red-social");
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
    section.style.overflowY = "scroll"
    section.style.justifyContent = "center";
    section.style.position = "relative";
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
    contenedorBotones.classList.add("contenedor-botones")
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
    $body.querySelector(".section").appendChild(crearFooter());
}

function crearFooter(){
    const footer = document.createElement("footer");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const contenedorDatos = document.createElement("div");
    const contenedorImagen = document.createElement("div");
    const imagen = document.createElement("img");
    const contenedorListaDatos = document.createElement("div");
    const listaDatos = document.createElement("ul");

    div.style.width = "100%";
    div.style.height = "350px";
    div.classList.add("contenedor")
    div.style.background = "#0006";
    div.style.bottom = "-350px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "flex-start";
    div.style.color = "#DADAD9";

    h2.style.margin = "30px 0";
    h2.textContent = "Contacto"

    contenedorDatos.style.display = "flex";
    contenedorDatos.style.justifyContent = "center";
    contenedorDatos.style.alignItems = "center";
    contenedorDatos.style.gap = "30px";

    contenedorImagen.style.width = "300px";

    imagen.src = "./img/footer/foto.jpg";
    imagen.alt = "Foto";
    imagen.style.width = "100%";
    imagen.style.borderRadius = "10px";

    div.appendChild(h2);
    div.appendChild(contenedorDatos);

    fetch("./assets/data.json")
        .then(res => res.json())
        .then(json => {
            json.datosFooter.forEach(elemento => {
                const li = document.createElement("li");
                const strong = document.createElement("strong");
                const span = document.createElement("span");

                strong.textContent = `${elemento.titulo}:`;
                span.textContent = elemento.valor;
                span.style.marginLeft = "3px";

                li.appendChild(strong);
                li.appendChild(span);

                listaDatos.appendChild(li);
            })
        })
    
    listaDatos.style.display = "flex";
    listaDatos.style.flexDirection = "column";
    listaDatos.style.gap = "15px"

    contenedorDatos.appendChild(contenedorImagen);
    contenedorImagen.appendChild(imagen);
    contenedorDatos.appendChild(contenedorListaDatos);
    contenedorListaDatos.appendChild(listaDatos);

    footer.style.width = "100%";
    footer.style.height = "350px";
    footer.style.position = "absolute"
    footer.style.background = "#34495E60";
    footer.style.bottom = "-350px";

    footer.appendChild(div);

    return footer;
}

function mapearDatosFooter(){
    let lista = "";
    fetch("./assets/data.json")
        .then(res => res.json())
        .then(json => {
            json.datosFooter.forEach(elemento => {
                console.log(elemento)
                lista = `<li> <strong> ${elemento.titulo}: </strong> ${elemento.valor} </li>`
            })
        })
        
        return lista;
        
}

function removerSection(){
    const section = document.querySelector(".section");
    const elementoPadre = section.parentElement;

    elementoPadre.removeChild(section);
}


/** RESPOSIVE DESIGN */
const mql = window.matchMedia("(max-width: 320px)");
/*function aplicarMediaQuery(mql){
    console.log(mql)
    if(mql.matches){
        document.querySelector("aside").style.width = "100%"
        document.querySelector("aside").style.position = "absolute";
        document.querySelector("aside").style.top = "0";
        document.querySelector("aside").style.bottom = "0"
        document.querySelector(".contenedor").style.flexDirection = "column";
        document.querySelector(".contenedor").style.gap = "30px"
    }else {
        document.querySelector(".contenedor").style.flexDirection = "row"
        document.querySelector("aside").style.width = "30%";
        document.querySelector("aside").style.position = "none";
    }
}*/