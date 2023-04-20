//task1 fixed
// document.getElementById("button").addEventListener("click", function () { 
//   event.preventDefault(); 
//   let lastName = document.getElementById("lastname").value; 
//   let firstName = document.getElementById("firstname").value; 
//   let email = document.getElementById("email").value; 
 
 
//   const customerString = `${email} - ${lastName} ${firstName}`; 
//   return console.log(customerString); 
// });

//task2 also fixe
// document.getElementById("button").addEventListener("click", function () { 
//   event.preventDefault(); 
//   let kilometres = document.getElementById("kilometr").value; 
 
// const end =   5 + kilometres * 0.25   
// return console.log(end) 

// })

//task3 
// function product() {
//     const productName = prompt("Enter product name");
//     const unitePrice = prompt("Enter unite price");
//     const quantity = prompt("Enter quantity");
//     const participates = prompt("Participates in the promotion or not ");
//     const discount = unitePrice * 0.1
//     if (quantity >= 5) {
//       return console.log(discount);
//     }
//     const discount2 = unitePrice * 0.15;   
// const bothDiscount = unitePrice * 0.25
//     if (participates == "yes") {
//        return console.log(discount2);

//     } else if (participates == "no") {
//        return console.log(unitePrice)
//     }else{
//         return console.log(bothDiscount)
//     }
// }
// product();


//task4 fixed
// document.getElementById("button").addEventListener("click", function () { 
//   event.preventDefault(); 
//       let guestNumber = document.getElementById("guestsnumber").value  
//        const small = "small table" 
//        const medium = "medium table"  
//        const large = "large table" 
       
//      if (guestNumber<=2) {  
//        return console.log(small)}  
//        if (guestNumber<= 4 ) {  
//          return console.log(medium)}  
//        if (guestNumber<=8){  
//          return console.log(large)  
//        }  
//        } )


//task5
// function numbers() {
// const num1 = prompt("Enter first number: ");
// const num2 = prompt("Enter second number: ");
// const num3 = prompt("Enter third number: ");

// if(num1 >= num2 && num1 >= num3) {
//     if (num2> num3) {
//         console.log(num1 + "," + num2 + "," + num3 )
//     }else{
//        console.log(num1 + ","  + num3 + "," + num2)
//     }
// }
// else if (num2 >= num1 && num2 >= num3) {
//     if (num1>num3) {
//         console.log(num2+ ","  + num1 + "," + num3)
//     }else{
//         console.log(num2+ ","  + num3 + "," + num1)
//     }
// }
// else {
//     console.log(num3 + "," + num2 + "," + num1)
// }
// }
// numbers();


//task6 not done yet 
// function informations() {
// const user = {
//     name: ["Bob"],
//     age: 
//   ordersCount: 5,
//   amountsOfOrders: [100, 45, 200, 5, 23],
// }
// }
// informations();


//task7 done it with input 
// document.getElementById("botton").addEventListener("click", function () { 
//   event.preventDefault(); 
//    let lenght =document.getElementById("lenght").value 
//    let width = document.getElementById("width").value 
//   let height = document.getElementById("height").value 
//   let weight = document.getElementById("weight").value 
//     let deleveryDistance = document.getElementById("distance").value  
//    const sum = +lenght + +width + +height;  

// if (sum < 150 && lenght < 100 && width < 100 && height < 100 && weight < 10  
//         && deleveryDistance < 10 && deleveryDistance > 3  
//     ) {  
//       console.log("Order accepted");  
//     } else {  
//       console.log("Order couldn't accept")  
//   }  
// })


//task8
// document.getElementById("button").addEventListener("click", function () { 
//   event.preventDefault(); 
//       const input = document.getElementById("number").value 
//       const specialNumbers = {  
//         1: "one",  
//         2: "two",  
//         3: "three",  
//         4: "four",  
//         5: "five",  
//         6: "six",  
//         7: "seven",  
//         8: "eight",  
//         9: "nine",  
//         10: "ten",  
//         11: "eleven",  
//         12: "twelve",  
//         13: "thirteen",  
//         14: "fourteen",  
//         15: "fifteen",  
//         16: "sixteen",  
//         17: "seventeen",  
//         18: "eighteen",  
//         19: "nineteen",  
//         20: "twenty",  
//         30: "thirty",  
//         40: "forty",  
//         50: "fifty",  
//         60: "sixty",  
//         70: "seventy",  
//         80: "eighty",  
//         90: "ninety",  
//       };  
//       if (input < 10) {  
//         return console.log(onesPlace[input]);  
//       }  
//       if (input >= 10 && input < 20) {  
//         return console.log(specialNumbers[input]);  
//       }  
//     const onesDigit = input % 10;  
//         if (onesDigit === 0) {  
//           return console.log( specialNumbers[input[0]+"0"]);  
            
//         } else {  
//             return console.log(`${specialNumbers[input[0]+"0"]} ${specialNumbers[input[1]]}`)  
//         }  
//     })
// task9
// document.getElementById("button").addEventListener("click", function () { 
//   event.preventDefault(); 
//   let input = document.getElementById("enter").value 
// let A = "100"  
// for (i = 1 ; i < 1000; i++){  
// if(i % input == 0 ) {  
// console.log(i)}  
// } 

//     })
//task10
// function calculateDepositAmount() { 
//     const initialAmount =parseInt (prompt("Enter the initial amount: ")); 
//     const durationInYears = parseInt(prompt("Enter the duration in years: ")); 
//     const annualInterestRate = parseInt(prompt("Enter the annual interest rate in %: ")); 
   
//     let depositAmount = initialAmount; 
//     for (let i = 0; i < durationInYears; i++) { 
//       const interestAmount = depositAmount * annualInterestRate / 100; 
//       depositAmount += interestAmount; 
//     } 
   
//     console.log( depositAmount); 
//   } 
//   calculateDepositAmount()
//task11 not done yet 
// function getLoyaltyPoints(orderNumber) {
//   let loyaltyPoints = 0;
//   let previousPoints = 0;
//   let currentPoints = 1;

//   for (let i = 1; i <= orderNumber; i++) {
//     if (i <= 2) {
//       loyaltyPoints = 1;
//     } else {
//       loyaltyPoints = previousPoints + currentPoints;
//       previousPoints = currentPoints;
//       currentPoints = loyaltyPoints;
//     }
//   }

//   return loyaltyPoints;
// }