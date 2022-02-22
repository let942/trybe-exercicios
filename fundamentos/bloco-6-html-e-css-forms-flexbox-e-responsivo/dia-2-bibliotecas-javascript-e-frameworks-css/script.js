const enviar = document.getElementById('enviar');
const nome = document.getElementById('input-nome-completo');
const email = document.getElementById('input-email');
const textoArea = document.getElementById('texto-area');

// enterrompe botão submit
// enviar.addEventListener('click', function(event){
//   event.preventDefault()
// });
 
function validacao(event) {
  event.preventDefault()

  if(email.value.length < 10 || email.value.length > 50|| nome.value.length < 10 || nome.value.length > 40 || textoArea.value.length > 500){
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }

}


enviar.addEventListener('click', validacao);

