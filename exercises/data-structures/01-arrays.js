function analyze(numbers) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number >= 5) {
      total += number;
      count++;
    }
  }

  return [total, count];
}

console.log(analyze([2, 7, 4, 9, 5]));
