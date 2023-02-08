
function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value
  var trailerFilme = document.getElementById('trailer').value
  var nomeFilme = document.getElementById('nome').value 

if (filmeFavorito.endsWith('jpg') || filmeFavorito.endsWith('png')) {
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href=' + trailerFilme + " target='_blank'>" + "<img src=" + filmeFavorito + ">" + "</a> <p>" + nomeFilme + "</p>"
}else{
  alert('Esse tipo de imagem é inválido')
}

 document.getElementById('filme').value = ''
  document.getElementById('trailer').value = ''
  document.getElementById('nome').value = ''
}  
  
  function removerFilme() {
  listaFilmes.innerHTML= '';
}
