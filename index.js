// //  "use strict";

const bills = [22,295,176,440,37,105,10,1100,86,52]

const calcTip = (bill)=>{

 return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2

}
const tips = []
const totals= []
for(let i = 0; i < bills.length; i++){

  tip = calcTip(bills[i])
  tips.push(tip)
  totals.push(bills[i] + tip)
}
console.log(tips,totals,bills)
//50 and 300
// const bills = [22,295,176,440,37,105,10,1100,86,52]
const arr = [22,295,176,440,37,105,10,1100,86,52]
const calcTip = (bills)=>{
    const tips = []
    const totals = []
   for(let i = 0; i < bills.length; i++){
     if(bills[i] >=50 && bills[i] <=300){
         tips.push(bills[i] * 0.15 )
         totals.push(bills[i] + bills[i] * 0.15)
     }else{
         tips.push(bills[i]* 0.2)
         totals.push(bills[i] + bills[i] * 0.2)
     }
      
   }
   return tips, totals
}

console.log(calcTip(bills))

const calcAverage = (arr)=>{
  let sum = 0
  for(let i = 0; i < arr.length; i++){
     sum +=arr[i]/arr.length
  }
  
  return sum 
}
console.log(calcAverage(arr))

const markObject ={
 fullName: "Mark Miller",
 mass: 78,
 height:1.69,

 calcMark: function(){

   this.IBM = this.mass/(this.height * this.height)
   return this.IBM
 }
}
const johnObject ={
    fullName: "John Smith",
    mass: 92,
    height:1.95,
   
    calcJohn: function(){
   
      this.IBM = this.mass/(this.height * this.height)
      return this.IBM
    }
   }
  
 if(markObject.calcMark() > johnObject.calcJohn()){

    //"John's BMI (28.3) is Higher than Mark's (23.9)!"
   console.log(`${markObject.fullName}'s BMI (${markObject.calcMark()}) is Higher than ${johnObject.fullName}'s (${johnObject.calcJohn()})!`)

 }else{

    console.log(`${johnObject.fullName}'s BMI (${johnObject.calcJohn()}) is Higher than ${johnObject.fullName}'s (${markObject.calcMark()})`)

 }

// Write a function that iterate half way the characters

function countHalfWay(string){
    arrayCount = []
   for(let i = 0; i < string.length/2; i++){
   arrayCount.push(string[i])

   }
   return arrayCount.join(" ")

}

console.log("calculate Half way",countHalfWay("characters"))

function countHalfWay(string){
    arrayCount = []
   for(let i = (string.length - 1)/2; i >= 0; i--){
   arrayCount.push(string[i])

   }
   return arrayCount.join(" ")

}

console.log("calculate Half way",countHalfWay("characters"))


const arrOf = [[1,2],[4,8],[9,12],[15,60]]

for()




// 15% if billsValue is between 50 and 300 and if different tips should be 20%

// write a function calcTip
//Count the number of pairs in an array having sums that are evenly divisible by a given number.
// array = [[1,2],[3,5],[6,7]] => 1 + 2 % 2 === 0 that means 

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
//How to add element to an object using both dot notation and bracket notation!

const calcTip = (billsValue)=>{

 if(billsValue >=50 && billsValue <=300 ){
     return billsValue * 0.15
 }else{
     return billsValue * 0.2
 }

}
const bills = [125,555,44]
const arrayTipsValue = [calcTip(125),calcTip(555),calcTip(44)]
const arrayTotalValue = [calcTip(125) + bills[0],calcTip(555) + bills[1],calcTip(44) + bills[2]]
console.log("bills value and tips",arrayTotalValue)
console.log("tips value",arrayTipsValue)
//func tutorial!
// Date 1 44 23 71 ==> Dolphins, koalas ====> 65 54 49
// function to calculate Average of 3 scores
let calcAverage = (num1,num2,num3)=>{
    
   let result = (num1 + num2 + num3)/3
   return result
}
function checkWinners(num1,num2,num3){
    const avgDolhins = calcAverage(num1,num2,num3)
    const avgKoalas= calcAverage(num1,num2,num3)
    return avgDolhins >= 2* avgKoalas ? `Dolphins Win ${avgDolhins}`:`Koalas Win ${avgKoalas}`
   

}
console.log(checkWinners(44,23,71))
console.log(checkWinners(65,54,49))
//Create two function for different work
// Create a function to count assigned the numbers of repeated character in this string
// character  
//{c:2,h:1,a:2,r:2,t:1,e:1}
     
function countNumbersOfCharacter(string){
  // create an object 
  const result = [];
  // iterate over the character  => string.length == 9
  // i = 0 0< 9 yes 
  for(let i = 0; i < string.length; i++){
      
     let char = string[i].toLowerCase() // char is c because string have index of 0 which is the first letter of character
     if(result[char] > 0){
        result[char]++; 

     }else{
         result[char] = 1;
     }
    
}
return result;
}
console.log(countNumbersOfCharacter("Ajagunna"))

Reverse words in a string 
example reverse characters
characters => 

function reserverWordInString(word){
    let string = []
 // iterate over the words
 for( let i = word.length-1; i >=0; i--)  string.push(word[i])

   return string.join("")

}
console.log(reserverWordInString("characters"))  // sretcarahc
function reverseNum(num){
    let newArray = []
  for (let i = num.length-1; i >=0; i--){
     newArray.push(num[i])
    
  }
  return newArray

}
console.log(reverseNum([1,2,3,4,5,6,7,8,9]))


// passing array to a function

function calculateArray(years){
  
  
 let age = 2021 - years;
 return age;

}
const arrayOfYear = [2000,2001,2002,2003,2004]
const arr = [calculateArray(arrayOfYear[0]),calculateArray(arrayOfYear[1]),calculateArray(arrayOfYear[2]),calculateArray(arrayOfYear[3]),calculateArray(arrayOfYear[4])]
console.log(arr)

challenge 
let jonas ={
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
}
// "Jonas has 3 friends,and his best friend is called Michael"
console.log(jonas.friends.length)

const result = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
console.log(result)

const jonas ={
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear:1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,
    calc: function(){

      this.age = 2037 - this.birthYear 
      return this.age
    }
}
 
 // "Jonas is a 46-year old teacher,and he has a driver's license"
 
 console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job},and he has ${jonas.hasDriversLicense? "a":"no"}driver's license`);



const calc = function(birthYear){

  age = []
 for(let i =0; i < birthYear.length; i++){
  const newAge = 2037 - birthYear[i]
   age.push(newAge)
 }
 return age

}
const years = [1991,2007,1969,2020]
console.log(calc(years))


// arrayNumber = [1,2,3,4,5,6,7,8,9]

// reverse 8,7,6,5,4,3,2,1,0

//arrayNumber.length - 1 === 8