//  "use strict";
// // 15% if billsValue is between 50 and 300 and if different tips should be 20%

// // write a function calcTip
// //Count the number of pairs in an array having sums that are evenly divisible by a given number.
// // array = [[1,2],[3,5],[6,7]] => 1 + 2 % 2 === 0 that means 

const array = [[1,2],[3,5],[6,7]]
 for(let i = 0; i < array.length; i++){
   array[i].map((element)=> console.log("check",element))


 }
 const jonas = {
     firstName: "Wale",
     lastName: "Abbey",
     job: "Programmer",
     location: "New York",
     age: 20
    }
    
 const interestedIn = prompt("What do you want to know about me? ")
 const returnValue =jonas[interestedIn.toLocaleLowerCase()] ? `${jonas[interestedIn].toLocaleLowerCase()}`:`${prompt("What do you want to know about me? ")}`
 console.log(returnValue)

// const calcTip = (billsValue)=>{

//  if(billsValue >=50 && billsValue <=300 ){
//      return billsValue * 0.15
//  }else{
//      return billsValue * 0.2
//  }

// }
// const bills = [125,555,44]
// const arrayTipsValue = [calcTip(125),calcTip(555),calcTip(44)]
// const arrayTotalValue = [calcTip(125) + bills[0],calcTip(555) + bills[1],calcTip(44) + bills[2]]
// console.log("bills value and tips",arrayTotalValue)
// console.log("tips value",arrayTipsValue)
// //func tutorial!
// // Date 1 44 23 71 ==> Dolphins, koalas ====> 65 54 49
// // function to calculate Average of 3 scores
// let calcAverage = (num1,num2,num3)=>{
    
//    let result = (num1 + num2 + num3)/3
//    return result
// }
// function checkWinners(num1,num2,num3){
//     const avgDolhins = calcAverage(num1,num2,num3)
//     const avgKoalas= calcAverage(num1,num2,num3)
//     return avgDolhins >= 2* avgKoalas ? `Dolphins Win ${avgDolhins}`:`Koalas Win ${avgKoalas}`
   

// }
// console.log(checkWinners(44,23,71))
// console.log(checkWinners(65,54,49))
// //Create two function for different work
// // Create a function to count assigned the numbers of repeated character in this string
// // character  
// //{c:2,h:1,a:2,r:2,t:1,e:1}
     
// function countNumbersOfCharacter(string){
//   // create an object 
//   const result = [];
//   // iterate over the character  => string.length == 9
//   // i = 0 0< 9 yes 
//   for(let i = 0; i < string.length; i++){
      
//      let char = string[i].toLowerCase() // char is c because string have index of 0 which is the first letter of character
//      if(result[char] > 0){
//         result[char]++; 

//      }else{
//          result[char] = 1;
//      }
    
// }
// return result;
// }
// console.log(countNumbersOfCharacter("Ajagunna"))

//Reverse words in a string 
// example reverse characters
// characters => 

// function reserverWordInString(word){
//     let string = []
//  // iterate over the words
//  for( let i = word.length-1; i >=0; i--)  string.push(word[i])

//    return string.join("")

// }
// console.log(reserverWordInString("characters"))  // sretcarahc
// function reverseNum(num){
//     let newArray = []
//   for (let i = num.length-1; i >=0; i--){
//      newArray.push(num[i])
    
//   }
//   return newArray

// }
// console.log(reverseNum([1,2,3,4,5,6,7,8,9]))


// // passing array to a function

// function calculateArray(years){
  
  
//  let age = 2021 - years;
//  return age;

// }
// const arrayOfYear = [2000,2001,2002,2003,2004]
// const arr = [calculateArray(arrayOfYear[0]),calculateArray(arrayOfYear[1]),calculateArray(arrayOfYear[2]),calculateArray(arrayOfYear[3]),calculateArray(arrayOfYear[4])]
// console.log(arr)



