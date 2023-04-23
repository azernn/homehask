//task1 fixed
// function registerCustomer(lastName, firstName, email) {
//   const result = `${email} - ${lastName} ${firstName}`;
//   return result;
// }

// //task2 also fixe
// function deliveryCost() {
//   const distance = prompt("Enter the distance in km:");
//   const totalCost = 5 + (distance * 0.25);
//   return totalCost;
// }
// deliveryCost();

//task3 
// function product() {
//     const productName = ("Enter product name");
//     const unitePrice = ("Enter unite price");
//     const quantity = ("Enter quantity");
//     const participates =("Participates in the promotion or not ");
//     const discount = unitePrice * 0.1
//     if (quantity >= 5) {
//       return (discount);
//     }
//     const discount2 = unitePrice * 0.15;   
// const bothDiscount = unitePrice * 0.25
//     if (participates == "yes") {
//        return (discount2);

//     } else if (participates == "no") {
//        return console.log(unitePrice)
//     }else{
//         return (bothDiscount)
//     }
// }
// product();


//task4 fixed
// function suggestTable(numGuests) {
//   let tableSize;
//   if (numGuests <= 2) {
//     tableSize = "small table";
//   } else if (numGuests <= 4) {
//     tableSize = "medium table";
//   } else if (numGuests <= 8) {
//     tableSize = "large table ";
//   } else {
//     return "Sorry, we are not able to accommodate your group in one table.";
//   }
//   return `${tableSize}`;
// }


//task5
// function numbers() {
// const num1 = ("Enter first number: ");
// const num2 = ("Enter second number: ");
// const num3 = ("Enter third number: ");

// if(num1 >= num2 && num1 >= num3) {
//     if (num2> num3) {
//         return(num1 + "," + num2 + "," + num3 )
//     }else{
//        return(num1 + ","  + num3 + "," + num2)
//     }
// }
// else if (num2 >= num1 && num2 >= num3) {
//     if (num1>num3) {
//         return(num2+ ","  + num1 + "," + num3)
//     }else{
//         return(num2+ ","  + num3 + "," + num1)
//     }
// }
// else {
//     return(num3 + "," + num2 + "," + num1)
// }
// }
// numbers();


//task6 not done yet 
// task 6
// function check(customer) {
//     const { name, age, numOrders, orderAmounts } = customer;
//     const total = orderAmounts.reduce((acc, cur) => acc + cur, 0);
  
//     if (age >= 60 || (numOrders >= 4 && total >= 100)) {
//       return ${name}true;
//     } else {
//       return ${name}  false ;
//     }
//   }
//   const customer = {
//     name: "Allahverdi",
//     age: 65,
//     numOrders: 5,
//     orderAmounts: [30, 20, 40, 10, 25]
//   };
  
//   console.log(check(customer));


//task7 done it with input 
// document.getElementById("button").addEventListener("click", function () { 
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
//         return (onesPlace[input]);  
//       }  
//       if (input >= 10 && input < 20) {  
//         return (specialNumbers[input]);  
//       }  
//     const onesDigit = input % 10;  
//         if (onesDigit === 0) {  
//           return ( specialNumbers[input[0]+"0"]);  
            
//         } else {  
//             return (`${specialNumbers[input[0]+"0"]} ${specialNumbers[input[1]]}`)  
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
  // function deposit(initialAmount, years, interestRate) {
  //   let amount = initialAmount;
  //   for (let i = 0; i < years; i++) {
  //     amount += amount * (interestRate / 100);
  //   }
  //   return alert(amount);
  // }
  // deposit();
//task11 
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
 //task12
// function sumOfDigits(code) {
//   let sum = 0;
//   while (code > 0) {
//     sum += code % 10;
//     code = (code - (code % 10)) / 10;
//   }
//   return sum;
// }

