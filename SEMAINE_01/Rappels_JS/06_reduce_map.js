const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (const number of numbers) sum += number;

console.log(sum);

console.log(numbers.reduce((acc, curr) => acc + curr));

numbers.reduce((acc, curr) => {
  console.log(acc, curr);

  return acc + curr;
}, 100);

/**
 * 01 Exercice
 *
 * multipliez par 10 chaque valeur de numbers
 */

/**
 * 02 Exercice
 *
 * Faites la somme des valeurs suivantes à l'aide d'un reduce
 */

const notes = [{ s: 10 }, { s: 19 }, { s: 20 }];
