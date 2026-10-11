const numbers = [12, 5, 8, 20, 5, 3];

/* console.log(numbers.includes(20));
console.log(numbers.includes(7)); */

/* console.log(numbers.indexOf(5)); */

const part = numbers.slice(1, 4);

/* console.log(part);
console.log(numbers); */

const removed = numbers.splice(1, 2);

/* console.log(removed);
console.log(numbers); */

const removedOne = numbers.splice(2, 1);

/* console.log(removedOne);
console.log(numbers); */

/* console.log("Before: ", numbers); */

numbers.push(99);
/* console.log("push: ", numbers); */

const last = numbers.pop();
/* console.log("pop removed: ", last);
console.log("After pop: ", numbers); */

const first = numbers.shift();
/* console.log("shift removed: ", first);
console.log("After shift: ", numbers);
 */
numbers.unshift(7);
