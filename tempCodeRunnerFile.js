function smallestCommons(arr) {
  let maior = arr[0] > arr[1] ? arr[0] : arr[1];
  let menor = arr[0] > arr[1] ? arr[1] : arr[0];
  let bool = true;
  let j = maior + 55;
  while (bool) {
    if(verifyDivisors(menor, maior, j) == 1) {
      bool = false;
    }
    j += 1
  }
  return j;
}


function verifyDivisors(inicio, fim, num) {
  for(let i = inicio; inicio <= fim; i += 1) {
    if (num % i !== 0) {
      return 0
    }
  }
  return 1
}

console.log(smallestCommons([1,5]));