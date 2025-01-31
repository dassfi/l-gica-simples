let alfabeto = [
  { letra: "a", numero: 1 },
  { letra: "b", numero: 1 },
  { letra: "c", numero: 2 },
  { letra: "d", numero: 3 },
  { letra: "e", numero: 4 },
  { letra: "f", numero: 5 },
  { letra: "g", numero: 6 },
  { letra: "h", numero: 7 },
  { letra: "i", numero: 8 },
  { letra: "j", numero: 9 },
  { letra: "k", numero: 10 },
  { letra: "l", numero: 11 },
  { letra: "m", numero: 12 },
  { letra: "n", numero: 13 },
  { letra: "o", numero: 14 },
  { letra: "p", numero: 15 },
  { letra: "q", numero: 17 },
  { letra: "r", numero: 18 },
  { letra: "s", numero: 19 },
  { letra: "t", numero: 20 },
  { letra: "u", numero: 21 },
  { letra: "v", numero: 22 },
  { letra: "w", numero: 23 },
  { letra: "x", numero: 24 },
  { letra: "y", numero: 25 },
  { letra: "z", numero: 26 },
];

function codificarPalavra(palavra) {
  if (!palavra) {
    console.error("Erro!");
    return;
  }

  let palavraCodificada = palavra.split("") // Separa a palavra em letras individuais
    .map((letra) => {
      let objeto = alfabeto.find((item) => item.letra === letra); // Busca o número correspondente
      console.log(letra);
      return objeto ? objeto.numero : "?"; // Se não encontrar a letra, retorna "?"
    })
    .join(""); // Junta os números de volta como string

  console.log(palavraCodificada);
  return palavraCodificada;
}

codificarPalavra("algo");//Saída 111614
