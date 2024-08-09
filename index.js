//function lit() {

//  var mensaje_encriptado = btoa(nose);
//  var mensaje_desencriptado = atob(loro);
//}
//<input class="tula" type="text" id="masa">
function usuario() {
  var player = document.getElementById("playera");
  player.innerHTML = localStorage.getItem("name");
}

usuario()

function lit() {
  var nose = document.getElementById("AAA").value;
  var loro = document.getElementById("masa");
  var mensaje = btoa(nose);
  loro.innerHTML = mensaje;
  console.log(mensaje); 
}

function lete() {
  var sise = document.getElementById("ALA").value;
  var orol = document.getElementById("moso");
  var mensajito = atob(sise);
  orol.innerHTML = mensajito;
  console.log(mensajito); 
}




