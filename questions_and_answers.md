<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>'greeting' (in 1<sup>st</sup> line) and 'greetign' (in 2<sup>nd</sup> line) are two different variable. 'greetign' (in 2<sup>nd</sup> line) is not declared but it's value is assigned with empty object and it consoled in 3<sup>rd</sup> line. Since, javascript allows assign variable without declaration with var, let or const, the result will be an empty object (Option A).</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The function 'sum' called with two arguments. They are - 1 (number type), "2" (string type). When javascript tries to add a number with a string, it does concatenation operation with them. For this behavior, the the result will be "12" (Option C).</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>A variable 'food' initialized with different types of foods. Since, food[0] is "🍕", the value of 'info' variable will be ' favoriteFood: "🍕" '. Again the value of 'favoriteFood' changed in third line, which is a part of info object. That means, on change occurs in food object. So, the food variable is same as initialized when it consoled. So, the answer is Option A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>A function 'sayHi' initialized with a parameter 'name'. But it is called with no arguments. So, the value of 'name' parameter is 'undefined'. We know that, if a variable or function parameter doesn't get any value, it will be treated as 'undefined'. So, the answer will be 'Hi there, undefined' (Option B).</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here is a forEach array iterator iterated on 'nums' array. In the callback function of forEach, if the 'num' of 'nums' is true, then count will be increased by 1. Since the 0 is false and 1, 2, 3 are true, the value of 'count' will be 3 after the iteration end. So, consoled value of count is 3 (Option C).</i>

</p>
</details>
