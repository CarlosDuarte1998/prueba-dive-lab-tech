//Validacion de formularios

const nombre = document.getElementById('nombre');
const correo= document.getElementById('correo');
const mensaje=document.getElementById('mensaje');
const alerta=document.getElementById('alerta');
const formulario=document.getElementById('formulario')
let warnings="";

formulario.addEventListener("submit", e=>{
  
  let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let entrada=false;
  e.preventDefault();
  if(nombre.value.length<6){
    warnings+="El nombre es muy corto, por favor ingrese un nombre valido <br>";
    entrada=true;
  }
  if (!regexEmail.test(email.value)) {
    warnings+="El correo no es valido<br>";
    entrada=true;
  }
  if (mensaje.value.length<1) {
    warnings+="El campo no debe quedar vacio.";
    entrada=true;
    
  }
  if (entrada) {
    alerta.innerHTML=warnings;
  }
})