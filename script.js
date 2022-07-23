function generarLink() {
  let urlBase = "https://api.whatsapp.com/send?phone=";
  let numero = document.getElementById("numero-contacto").value;
  let parametroMensaje = "&text=";
  let mensaje = document.getElementById("mensaje-contacto").value;
  mensaje = encodeURIComponent(mensaje);
  let url = urlBase + numero + parametroMensaje + mensaje;

  document.getElementById("probar").setAttribute('href', url);
  document.getElementById("link").setAttribute('href', url);
  document.getElementById("link").innerHTML = url;
  document.getElementById("link").value = url;
}

function copiarLink(link) {
  navigator.clipboard.writeText(link)

  document.getElementById("copiado").innerHTML = "Copiado al portapapeles";

  setTimeout(() => {
    document.getElementById("copiado").innerHTML = "";
  }
    , 3000);
}