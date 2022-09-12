const secciones = ["banner", "about", "exp", "edu", "skills","proy"];
var preState = "empty";

function darkmode(){

secciones.forEach((item,index,arr) => {
    const sec=document.getElementById(item)
        if(sec.classList.contains("bg-light")){
            sec.classList.replace("bg-light", "bg-dark");
            sec.classList.replace("text-black", "text-white");
            }
            else{
                sec.classList.replace("bg-dark", "bg-light");
                sec.classList.replace("text-white", "text-black");
            }
        });
    }

function toggle(seccion){
    const sec=document.getElementById(seccion)
    if(sec.style.display=="none"){
        sec.style.display="block";
        
    }
    else {
        sec.style.display="none";
        
    }

}

function login(){
    //todo: actualmente no hace nada con el input.
    var elementsArray = document.getElementsByClassName("dropdown-menu");
    elementsArray.registro.style.display="none";
    logbtn=document.getElementById("etiqueta-de-boton-login");
    logbtn.textcontent = 'Logout'
    this.enableEdit();

}

function enableEdit(){
    activar=document.getElementById("BtnActivarSecciones");
    activar.style.display="block";
    document.querySelectorAll("[contenteditable=false]").forEach(el => el.setAttribute("contentEditable", true))

}

function edit(sec){
    editar=document.getElementById(sec);
    editar.setAttribute("contentEditable", "true");
    if (editar.classList.contains("bg-light")){
        editar.classList.replace("bg-light","bg-success");
        preState="bg-light";
    }
    if (editar.classList.contains("bg-dark")){
        editar.classList.replace("bg-dark","bg-success");
        preState="bg-dark";
    }
}

function save(sec){
    editar=document.getElementById(sec);
    editar.removeAttribute("contentEditable");
    editar.classList.replace("bg-success",preState)
}

function del(sec){
    //toggle(sec);
    runme()
}

function runme()
  {
     var sec = document.createElement("section");
     sec.innerHTML = '<b>Title</b><br><br> <small> <ul>  <li></li><br><li></li><br><li></li><br><li></li><br><li></li><br><li></li><br><li></li><br> </ul></small><br>';
     document.getElementById('slides').appendChild(sec);
  }