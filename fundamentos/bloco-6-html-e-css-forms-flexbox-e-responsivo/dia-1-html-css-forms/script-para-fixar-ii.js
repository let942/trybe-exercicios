//preventDefault()
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function semLink(event) {
  event.preventDefault(); 
};
function semMarcar(event) {
  event.preventDefault();
}
function semDigitar(event) {
  if (event.key !== 'a' ) {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', semLink);
INPUT_CHECKBOX.addEventListener('click', semMarcar)
INPUT_TEXT.addEventListener('keypress', semDigitar)
