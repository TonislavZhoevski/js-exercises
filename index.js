/* import { ds } from "./exercises/01-arrays.js";

ds.push("A");
ds.push("B");
ds.push("C");

const removedItem = ds.pop();

ds.pop();
ds.pop();

console.log("Целият обект след второто pop: ", ds);
 */
// 1. FOR LOOP (Идеален, когато знаеш ТОЧНО колко пъти ще въртиш)
console.log("--- FOR LOOP ---");
for (let i = 0; i < 3; i++) {
  console.log("For loop step: ", i);
}

// 2. WHILE LOOP (Идеален, когато въртиш ДОКАТО дадено условие е истина)
console.log("--- WHILE LOOP ---");
let count = 0;
while (count < 3) {
  console.log("While loop step: ", count);
  count += 1; // МНОГО ВАЖНО: ако забравиш това, цикълът става безкраен!
}

// 3. DO...WHILE LOOP (Гарантира, че ще се изпълни ПОНЕ ВЕДНЪЖ, дори условието в началото да е грешно)
console.log("--- DO WHILE LOOP ---");
let number = 5;
do {
  console.log("Do-While runs on!: Value: ", number);
  number += 1;
} while (number < 3); // 5 НЕ Е по-малко от 3, но тялото ВЕЧЕ се е изпълнило веднъж!
