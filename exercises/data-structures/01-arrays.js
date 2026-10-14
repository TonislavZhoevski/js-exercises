const numbers = [12, 5, 8, 20, 3, 17];

function findSmallest(numbers) {
  let smallestNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNum) {
      smallestNum = numbers[i];
    }
  }
  return smallestNum;
}

const answer = findSmallest(numbers);
console.log(answer);
