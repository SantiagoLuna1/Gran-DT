fetch('jugadores.json')
  .then(respuesta => respuesta.json()).then(data => {console.log(data);});