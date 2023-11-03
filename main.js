// captura o button e o input no Dom
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(input.value)
})

// impede e notifica o usuário se algo diferente de zero ou um for inserido
input.addEventListener('input', () => {
  let value = input.value;
  if(!(/[0-1]/.test(Number(value[value.length - 1])))) {
    input.value = value.slice(0, value.length - 1)
    window.alert('Somente é permitido inserir zero ou um')
  }
})