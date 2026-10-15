// Practical Lab 1 — for Loop
// Lab 1: Display Numbers and Calculate a Sum

// 1. Write a for loop that displays numbers
//    from 1 to 10.

for(let i= 1; i<=10; i++){
    console.log(i);
}

// 2. Write another for loop that displays
//    numbers from 10 to 1.
for (let i=10; i>=1; i--){
    console.log(i);
}

// // 3. Write a for loop that displays odd
// //    numbers from 1 to 15.
for (let i=1; i<=15; i+=2){
    console.log(i);
}

// // 4. Write a for loop that displays
// //    "I love JavaScript" five times.
for (i=1; i<=5; i++){
    console.log("I love JavaScript");
}

// // 5. Write a for loop that displays even
// //    numbers from 2 to 20.
for (i=2; i<=20; i+=2){
    console.log(i);
}

// // 6. Use a for loop to calculate the sum of
// //    numbers from 1 to 10.
// //    Hint: Create a variable named sum with an initial
// //    value of 0. Add each number to sum inside the loop.
// //    Display the final sum after the loop ends.
let sum=0
for (i=1; i<=10; i++){
    sum += i    
}
console.log(sum);

// // 7. Using break:
// //    Write a for loop that counts from 1 to 10.
// //    Stop the loop when the number reaches 6,
// //    without displaying 6.
// //    Expected output: 1, 2, 3, 4, 5.

for(i=1; 1<=10; i++){
    if(i===6){
        break;
    }
    console.log(i);
}

// // 8. Using continue:
// //    Write a for loop that displays numbers from 1 to 10,
// //    but skips 5.
// //    Expected output: 1, 2, 3, 4, 6, 7, 8, 9, 10.
for(i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// // 9. Using break and continue:
// //    Write a for loop that counts from 1 to 15.
// //    Use continue to skip even numbers.
// //    Use break to stop when the number reaches 11,
// //    without displaying 11.
// //    Expected output: 1, 3, 5, 7, 9.

for(i=1; 1<=15; i++){
    if(i%2 == 0){
        continue;
    }
    if (i=== 11){
        break;
    }
    console.log(i);
}