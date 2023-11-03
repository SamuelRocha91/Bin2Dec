// captura o button e o input no Dom
const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const resultado = conversor(input.value);
  p.innerText = `${input.value} em decimal equivale a ${resultado}`
  input.value = '';
})

// impede e notifica o usuário se algo diferente de zero ou um for inserido
input.addEventListener('input', () => {
  let value = input.value;
  if(!(/[0-1]/.test(Number(value[value.length - 1])))) {
    input.value = value.slice(0, value.length - 1)
    window.alert('Somente é permitido inserir zero ou um')
  }
})

// cria a lógica de conversão do binário para decimal
const conversor = (string) => {
  let valor = 0;
  let potencia = string.length - 1;
  for (let i = 0; i < string.length; i += 1) {
    valor += (Number(string[i]) * (2 ** potencia));
    potencia -= 1
  }
  return valor
}
