//task1
// function customer() { 
//     const lastName = prompt("Enter your lastName:"); 
//     const firstName =  prompt("Enter your firstName:"); 
//     const email =  prompt("Enter your email"); 
//     const customerString = `${email} - ${lastName} ${firstName}`; 
//     return  customerString; 
// } 
// const customerInfo =  customer(); 
// console.log(customerInfo);


//task2
// function customer() { 
//     const kilometres = prompt("Enter kilometres"); 
// return 5 + kilometres * 0.25  
// } 
// const customerInfo =  customer(); 
// console.log(customerInfo);


//task3
// function product() {
//     const productName = prompt("Enter product name");
//     const unitePrice = prompt("Enter unite price");
//     const quantity = prompt("Enter quantity");
//     const participates = prompt("Participates in the promotion or not ");
//     const discount = unitePrice * 0.1
//     if (quantity >= 5) {
//         console.log(discount);
//     }
//     const discount2 = unitePrice * 0.15;   
//     if (participates == "yes") {
//         console.log(discount2);

//     } else if (participates == "no") {
//         console.log(unitePrice)
//     }
// }
// product();


//task4
// function tables(  ){ 
//     const guestNumber = prompt("enter guests number ") 
//      const small = "small table" 
//      const medium = "medium table" 
//      const large = "large table" 

//    if (guestNumber<=2) { 
//      console.log(small)} 
//      if (guestNumber<= 4 ) { 
//        console.log(medium)} 
//      if (guestNumber<=8){ 
//        console.log(large) 
//      } 

//      }
//      tables();


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
//     if (mum1>num3) {
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


//task6
// function informations() {
//     const costumerName = prompt("Enter your name");
//     const costumerAge = prompt("Enter your age");
//     const ordersNumber = prompt("Enter number of your order");
//     const ordersAmount  = prompt("Enter amound of your order");
//     if (ordersAmount>=100 && ordersNumber>=4 && costumerAge>60 ) {
//         console.log("Receives a discount")
//     }else{
//         console.log("Do not receive a discount")
//     }
// }
// informations();


//task7
// function conditions() {
//      const lenght =parseInt(prompt("Enter lenght"));
//      const width = parseInt(prompt("Enter width")) ;
//      const height = parseInt(prompt("Enter height "));
//    const weight = prompt("Enter weight");
//       const deleveryDistance = prompt("Enter delevery distance");
//      const sum = lenght + width +height;
    
// if (sum < 150 && lenght < 100 && width < 100 && height < 100 && weight < 10 
//           && deleveryDistance < 10 && deleveryDistance > 3
//       ) {
//        console.log("Order accepted");
//       } else {
//         console.log("Order couldn't accept")
//     }
// }
//  conditions();


//task8
function textNumbers() {
    const input = prompt('Enter number');
    const onesPlace = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const tensPlace = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    //const text = (`${tensPlace[input]}${onesPlace[input]}`)
    const specialNumbers = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    if (input < 10) {
        console.log(onesPlace[input])
    }
    if (input >= 10 && input < 20) {
        console.log(specialNumbers[input])
    }
    const onesDigit = input % 10;
    const tensDigit = (input - onesDigit) / 10;
    
    if (onesDigit === 0) {
      return tensPlace[tensDigit];
    }
}
textNumbers();