 // Obtener referencias 
 const $formulario = document.querySelector("#formulario"),
 $nombre = document.querySelector("#nombre"),
 $correo = document.querySelector("#correo");
 $comentarios =document.querySelector("#comentarios")
$formulario.onsubmit = evento => {
 evento.preventDefault();
 const nombre = $nombre.value,
     correo = $correo.value;
    

    //Finalmente, si llegó hasta aqui, se envia el form.
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();

 
 $formulario.submit();
};