// Teste de Lógica - IZI:

// for (let i = 1; i <= 50; i++) {
//   /* verifica-se primeiro os números que são múltiplos de ambos*/
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//    /* agora analisa-se apenas os números que são múltiplos de 3 ou de 5 separadamente */
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//    /* por fim exibe-se os números restantes ou que não se encaixam nas condições */
//   } else {
//     console.log(i);
//   }
// }

/* 

============================================================================================================================================

*/

// Teste de Lógica - NATTY:

/* as duas variáveis com os dois números iniciais são declaradas fora do loop for */
// let a = 0;
// let b = 1;

// /* declarei um array para ter uma estrutura mais organizada na hora de exibir os valores */
// let fibonacci = [a, b];

// // loop for para realizar as iterações e definir a lógica
// for (let i = 2; i < 40; i++) {
//   let c = a + b;
//   /*  utilizei o método de array .push() que adiciona cada novo número ao final da lista */
//   fibonacci.push(c);
//   a = b;
//   b = c;
// }

// // exibe todos os valores armazenados no array
// console.log(fibonacci);

/* 

=============================================================================================================================================

*/

// Teste de Lógica - FAKE NATTY:

// crio uma funçao que receba os dados de entrada (input)
// function formula1(input) {
//   let lines = input.trim().split("\n");
//   let index = 0;

//   // crio um array vazio para armazenar todas as linha de saída
//   let resultadosFinais = [];

//   // crio um loop para rodar cada caso de teste até chegar na condição de parada
//   while (true) {
//     // G => número de corridas & P => número de pilotos
//     let [G, P] = lines[index++].split(" ").map(Number);
//     // crio uma condição para interromper a execução do loop
//     if (G === 0 && P === 0) break;

//     // crio um vetor multidimensional para guardar os resultados das corridas
//     let resultados = [];

//     for (let i = 0; i < G; i++) {
//       let line = lines[index++].split(" ").map(Number);
//       resultados.push(line);
//     }

//     // crio uma variável S para ler os sistemas de pontuação
//     let S = Number(lines[index++]);

//     // crio um loop for para percorrer cada sistema de pontuação
//     for (let s = 0; s < S; s++) {
//       // leio a linha com o sistema de pontuação
//       let pontuacaoLinha = lines[index++].split(" ").map(Number);

//       // o primeiro número indica quantas posições recebem pontos
//       let K = pontuacaoLinha[0];

//       // os demais números são os pontos dados para as posições
//       let pontos = pontuacaoLinha.slice(1);

//       // crio um vetor para somar os pontos de cada piloto
//       let scores = new Array(P + 1).fill(0);

//       // percorro cada corrida e adiciono os pontos conforme o sistema atual
//       for (let corrida = 0; corrida < G; corrida++) {
//         for (let pos = 0; pos < K; pos++) {
//           let piloto = resultados[corrida][pos];
//           if (piloto !== undefined) {
//             scores[piloto] += pontos[pos];
//           }
//         }
//       }

//       // descubro o maior número de pontos armazenados no Array scores
//       let maiorPontuacao = Math.max(...scores);

//       // crio um vetor para armazenar os campeões
//       let campeoes = [];

//       for (let i = 1; i <= P; i++) {
//         if (scores[i] === maiorPontuacao) {
//           campeoes.push(i);
//         }
//       }

//       // armazena o resultado (uma linha por sistema de pontuação)
//       resultadosFinais.push(campeoes);
//     }
//   }

//   // imprimo o resultado dos campeões em uma linha
//   console.log(resultadosFinais.join("\n"));
// }

// // forneço dados de entrada
// const input = `
// 1 3
// 3 2 1
// 3
// 5 5 3 1 0
// 3 10 5 1
// 2 25 18
// 0 0
// `;

// // chamada da função
// formula1(input);
