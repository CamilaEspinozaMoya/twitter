const boton = document.getElementById('btn');

boton.addEventListener('click', () => {
  //guardo comentario ingresado por el usuario
  let comments = document.getElementById('comment').value;

  //limpiar el textarea
  document.getElementById('comment').value = "";

  //contenedor donde dejare mis comentarios html
  const cont = document.getElementById('cont');

  //crear un div contenedor
  const newComments = document.createElement('div');

  //nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);

  const contenedorElemento = document.createElement ('p');
  contenedorElemento.appendChild(textNewComment);

  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);

})