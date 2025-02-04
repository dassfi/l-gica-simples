let alfabeto = [
  { letra: "a", numero: 1 },
  { letra: "b", numero: 2 },
  { letra: "c", numero: 3 },
  { letra: "d", numero: 4 },
  { letra: "e", numero: 5 },
  { letra: "f", numero: 6 },
  { letra: "g", numero: 7 },
  { letra: "h", numero: 8 },
  { letra: "i", numero: 9 },
  { letra: "j", numero: 10 },
  { letra: "k", numero: 11 },
  { letra: "l", numero: 12 },
  { letra: "m", numero: 13 },
  { letra: "n", numero: 14 },
  { letra: "o", numero: 15 },
  { letra: "p", numero: 16 },
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
