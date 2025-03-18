/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

Tasks
  1. I feel as if the code is a little too vague. Using a, b, c, d has no real descriptive naming for the variables which could conflict on what the value has to do with the code, especially as the code get long and more complex, or if someone else had to work and edit the code, they will get confused
      There is no curly braces at d indicating that variable is could be an obect.

  2. let name = "Alice";
     let numberItems = 5;
     let price = 20;
     let shopping = {name + "bought" + number + "items for $" + price + "."};
  console.log(shopping);
  output = Alice bought 5 items for $20.

  3. let firstName = "Alice";
     let lastName = "Wonderland";
     let numberItems = 5;
     let price = 20;
     let shopping = {firstName +''+lastName + "bought" + number + "items for $" + price + "."};

if (price<=20) {
     console.log("Happy Face");
   } else {
     console.log("Sad Face");
   }

   console.log(shopping);

   output = Alice Wonderland bought 5 items for $20. Happy Face.
   
