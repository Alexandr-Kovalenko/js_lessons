//              WHiLE
let i = 5;

while (i > 0) {
  // (i > 0) - умова циклу
  console.log(`i = ${i}`);
  i--;
}

//             DO WHILE

let j = 5;

do {
  console.log(`j = ${j}`);
  j--;
} while (j > 0);
// якщо значення j змінити на від'ємне або 0, то цикл виповне одну ітерацію
// якщо б це був вичайний while, то не виповнилося б жодної ітерації
// це їхня головна відмінність

//              FOR

for (let k = 5; k > 0; k--) {
  console.log(`k = ${k}`);
}

//        CONTINUE and BREAK
// скільки разів потрібно розділити 500 пополам, щоб отримати число менше 10?

let number = 500;
let counter = 0;

while (true) {
  if (number < 10) {
    break; // виходимо з цикла
  } else {
    number /= 2;
    counter++;
  }
}

console.log(
  `Щоб отримати чилсо менше 10 нам потрібно 500 розділити пополам ${counter} разів`
);

// вивести в консоль всі непарні числа від 1 до 10
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // зупиняє виповнення ітерації і запускає нову ітерацію
  }
  console.log(i);
}

// continue та break не можуть виповнятися в тернарнику
// Яка сума чисел від N до M включно?

let n = 10;
let m = 100;
let summ = 0;

for (let i = n; i <= m; i++) {
  summ += i;
}

console.log(`Сума від ${n} до ${m} дорівнює ${summ}`);