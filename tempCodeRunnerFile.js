const conversor = (string) => {
  let valor = 0;
  let potencia = string.length - 1;
  for (let i = 0; i < string.length; i += 1) {
    valor += (Number(string[i]) * (2 ** potencia));
    potencia -= 1
  }
  return valor
}

console.log(conversor('101'))