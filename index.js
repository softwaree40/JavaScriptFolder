
//Giving array we need to add two pairs of number which is equal zero and return this numbers.
// Giving array of a number with two pairs if they are even return the numbers
function checkEvenNum(arr){
  let left = 0
  let rigth = arr.length-1
 while(arr[left] < arr[rigth]){

  let evenNumber = (arr[left] + arr[rigth])
    
   if(evenNumber % 2 === 0){
     return [arr[left], arr[rigth]]
   }else if (evenNumber > 0){
      rigth --
   }else{
     left ++
   }
  
 }

 
}
console.log(checkEvenNum([-1,-2,-3,-4,0,1,2,3,4,5,6,7,8]))
// function addPairs(arr){

//  let left = 0
//  let right = arr.length-1   
//  while (left < right){
//    let sum = arr[left] + arr[right]
//    if(sum === 0){

//      return [arr[left],arr[right]]
//    }else if (sum > 0){
//       right -- ;

//    }else{
//      left ++;
//    }
  

//  }

// }
// console.log(addPairs([-1,-2,-3,-4,0,1,2,3,4,5,6,7,8]))




// function squareOfOtherArray(string1,string2){
//  if(string1.length !== string2.length){
//    return false
//  }
//   let lookUp = {}
  
//   for(let i = 0; i < string1.length; i++){
//     lookUp[string1[i]] ? lookUp[string1[i]] +=1 : lookUp[string1[i]] = 1 
//   }

//   for(let i = 0; i < string2.length; i++){
//     if(!lookUp[string2[i]]){
//       return false
//     }else{
//       lookUp[string2[i]] -= 1
//     }

     
//   }
//   return true
// }
// console.log(squareOfOtherArray("zoo","ooz"))

// // Giving two string write a function to reverse one of the string and compared to the other string.


// function reverseComparision(string1,string2){
//  if(string1.length !== string2.length){
//    return false
//  }
//  let lookUp = {}
//   for(let i =string1.length-1; i >= 0 ; i--){
//     lookUp[string1[i]] ? lookUp[string1[i]]+=1 : lookUp[string1[i]] = 1

//   } 
//    for(let i = 0; i <string2.length;i++){

//      if(!lookUp[string2[i]]){
//        return false
//      }else{
//        lookUp[string1[i]] -=1
//      }
//    }
    
//   return true 
// }

// console.log(reverseComparision("wale","wale"))
// console.log(reverseComparision("baby","ybab"))
// console.log(reverseComparision("bab","by"))
// console.log(reverseComparision("",""))
// console.log(reverseComparision([1,2,3,4],[1,2,3,4]))
// console.log(reverseComparision([1,2,3],[1,4,9]))

















// function checkIfThisWordEqual(string1,string2){
//  if (string1.length !== string2.length){
//    return false;
//  }
//  let lookUp = {}   // {m:1,o:2,d:1}
 
 
//  for (let i =0; i < string1.length; i++){

//   lookUp[string1[i]] ? lookUp[string1[i]]+=1 : lookUp[string1[i]] = 1;
//  }
//  for (let i = 0; i < string2.length;i++){
//       if(!lookUp[string2[i]]){
//         return false
//       }else{

//        lookUp[string2[i]]-= 1
//       }
   
//  }
//    return true
 
// }
// console.log(checkIfThisWordEqual("mood", "doom"))
// console.log(checkIfThisWordEqual([1,2,3,5],[1,2,3,6]))







// let newSet = new Set([1,2,5,6,6,8,7,7])
// const [firstValue,secondValue,...others] = newSet
// console.log(firstValue,secondValue,others)

// const mapValue = new Map()
// const objRecieved = mapValue.set("walk","Go to school")
// for( value in Object.keys(objRecieved)){
//   console.log(value)
// }
// function rangeOf([a,b]){
//   return [...a.toString(),...b.toString()]

// }
// console.log(rangeOf(2,10))
// function iterateOver(n){
  
//  for(let i = 0; i<=n; i++){
//    return i++
//  }
  
// }
// console.log(iterateOver(6))


// function same(arr1,arr2){
 
//  if(arr1.length !== arr2.length){
//    return false
//  }
//  let lookupObj = {}
 
//  console.log("New object",lookupObj)
//  for( let i = 0; i < arr1.length; i++){
//    let valueOf = Math.pow(arr1[i],2)
//    console.log("New Values",valueOf)
//    lookupObj[valueOf] ? lookupObj[valueOf]++ : lookupObj[valueOf] = 1
//  }
//   for(let i = 0; i < arr2.length; i++){
//       let valueOf = arr2[i]
//     if(!lookupObj[valueOf]){
      
//       return false
//     }
    
//     else{
//       lookupObj[valueOf]--
//     }
    
//   }
//   return true

// }
// console.log(same([1,2,3],[1,4,9]))







// // let value ={a:2,b:3,c:4}
// // for(let val in value){
// //   console.log(value[val])
// // }




// // function same(arr1,arr2){
// //   // check if the lenght are not equal execution end
// //    if(arr1.length !== arr2.length) {
// //      return false
    
// //     }
// //    let newObj1 = {}
// //    let newObj2 = {}
// //   // create two object to house the key and value
// //  for( let i = 0; i < arr1.length; i++){
// //     let num = arr1[i]
// //     // if the value does exist in the object add 1 else if it does not exist assign 1 
// //     newObj1[num] ? newObj1[num]++ : newObj1[num] = 1
 
// //  }

// //  for( let i = 0; i < arr2.length; i++){
// //   let num = arr2[i]
// //   newObj2[num] ? newObj2[num]++ : newObj2[num] = 1

// // }
// //  // iterate over key in array 1 
// //   for(let key in newObj1){
// //     // check if the square of the key in array 1 is not in array2 return else if it exist continue
// //     if(!(key**2 in newObj2)){

// //       return false
// //     }
// //     if(newObj2[key**2] !== newObj1[key]]){
// //       return false
// //     }
     
// //   }

// //   return true
// // }

// // console.log(same([1,2,3],[1,4,9]))











// const game ={
// team1: "Bayern Munich",
// team2: "Borrussia Dortmund",
// players:[
//   [
//     "Neuer",
//     "Pavard",
//     "Martinez",
//     "Alaba",
//     "Davies",
//     "Kimmich",
//     "Goretzka",
//     "Coman",
//     "Muller",
//     "Gnarby",
//     "Lewandowski"
// ],
// [
//   "Burki",
//   "Schulz",
//   "Hummels",
//   "Akanji",
//   "Hakimi",
//   "Weigl",
//   "Witsel",
//   "Hazard",
//   "Brandt",
//   "Sancho",
//   "Gotze"
// ],

// ],

// Score: "4:0",
// Scored: ["Lewandowski","Gnarby","Lewanowski","Hummels"],
// date: "Nov 9th, 2037",
// odds: {
//   team1: 1.33,
//   x:3.25,
//   team2:6.5,

// },
// }

// const players1 = []
// const players2 = []








// // function cb1(){
// //   console.log("look here");
// // }
// // function cb2(){

// //   console.log("no, look here")
// // }
// // ProcessingInstruction.nextTick(cb2);
// // console.log("no-no, look here");
// // ProcessingInstruction.nextTick(cb1);


// // function findDigits(n) {
// //   let sum = 0
// //   let newArray = []
// //   let newN = n.toString()
// //   for (let i =0; i < newN.length;i++){
// //       newArray.push(newN[i])
// //   }
// //   for(let i = 0; i < newArray.length;i++ ){
// //       if(newArray[i]% n === 0){
// //          sum = sum + newArray[i]
// //       }
// //   }
// //   return sum 
// // }
// // console.log(findDigits(1012))



// ////You are given a two-digit integer n. Return the sum of its digits.

// //Example

// //For n = 29, the output should be
// //addTwoDigits(n) = 11.

// // write a function that iterate over this year and add it together
// // function addUpYears(num){
// //   let sum = 0
// //   let newArrayToSave = []
// //   let numConvertToString = num.toString();
// //    for(let numValue of numConvertToString){

// //       newArrayToSave.push(numValue)

// //    }
   
// //   for(let valueNew of newArrayToSave){

// //     sum+=valueNew++
// //   }
// //   return sum 
// // }
// // console.log(addUpYears(-1))













// // function addTwoDigits(n) {
// //   let num = n.toString();  
// //   let output = []
// //   let sum = 0
// //   for(let i = 0; i < num.length; i++){
// //       output.push(num[i]) 
// //   }
// //   for(let i = 0; i < output.length; i++){
// //       sum = sum + output[i]++
// //   }
// //   return sum 
// // }






// // function calcArrayWithMultiple(array){

// //  let left = 0
// //  let right = array.length-1
// //  while(left < right){
// //    let multiple = array[left] * array[right]
// //    if(multiple === 36){
// //        return (array[left],array[right])
// //    }else if(multiple > 36){
// //        right --
// //    }else{
// //        left ++
// //    }

// //  }




// // }
// // console.log(calcArrayWithMultiple([2,4,5,6,10,5,3,2,8]))









// // function countUniqueValue(array){

// //  left = 0
// //  right= array.length-1

// //  while (left < right){
// //    if(array[left]=== array[right]){}


// //  }


// // }
// // countUniqueValue([1,1,1,1,1,2])

// // function sumZero(array){
// //  let left = 0
// //  let right = array.length-1
 
// //   while(left < right){ 
// //       // 0 < 7 true
// //       let sum = array[left] + array[right] // -4 + 5 = 1
// //       // check if sum is === 0
// //       if(sum === 0){
// //           return ([array[left], array[right]])
// //       }else if(sum > 0){
// //           right --
// //       }else{
// //           left ++
// //       }
       
// //   }

    
// // }
// // sumZero([-4,-3,-2,-1,0,1,2,5])




// // function validAnagram(first,second){

// //  if (first.length !== second.length){
// //      return false;
// //  }


// //  const lookup = {};

// //  for (let i = 0; i < first.length; i++){

// //     let letter = first[i];
// //     // if letter exists, increment,otherwise set to 1
// //     lookup[letter] ? lookup[letter]+=1 : lookup[letter]= 1
// //  }


// //  for(let i = 0; i < second.length; i++){
// //   // can't find letter or letter is zero then it's not an anagram
// //     let letter = second[i];
// //     console.log(letter)
// //     if (!lookup[letter]){
         

// //         return false;
// //     }

//        //else{


// //         lookup[letter]-=1
// //     }

// //  }

// //  return true 
// // }
// // console.log(validAnagram("anagram","nagaram"))

// // // // //  "use strict";

// // // const bills = [22,295,176,440,37,105,10,1100,86,52]

// // // const calcTip = (bill)=>{

// // //  return bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.2

// // // }
// // // const tips = []
// // // const totals= []
// // // for(let i = 0; i < bills.length; i++){

// // //   tip = calcTip(bills[i])
// // //   tips.push(tip)
// // //   totals.push(bills[i] + tip)
// // // }
// // // console.log(tips,totals,bills)
// // // //50 and 300
// // // // const bills = [22,295,176,440,37,105,10,1100,86,52]
// // // const arr = [22,295,176,440,37,105,10,1100,86,52]
// // //  calcTip = (bills)=>{
// // //     const tips = []
// // //     const totals = []
// // //    for(let i = 0; i < bills.length; i++){
// // //      if(bills[i] >=50 && bills[i] <=300){
// // //          tips.push(bills[i] * 0.15 )
// // //          totals.push(bills[i] + bills[i] * 0.15)
// // //      }else{
// // //          tips.push(bills[i]* 0.2)
// // //          totals.push(bills[i] + bills[i] * 0.2)
// // //      }
      
// // //    }
// // //    return tips, totals
// // // }

// // // console.log(calcTip(bills))

// // // const calcAverage = (arr)=>{
// // //   let sum = 0
// // //   for(let i = 0; i < arr.length; i++){
// // //      sum +=arr[i]/arr.length
// // //   }
  
// // //   return sum 
// // // }
// // // console.log(calcAverage(arr))

// // // const markObject ={
// // //  fullName: "Mark Miller",
// // //  mass: 78,
// // //  height:1.69,

// // //  calcMark: function(){

// // //    this.IBM = this.mass/(this.height * this.height)
// // //    return this.IBM
// // //  }
// // // }
// // // const johnObject ={
// // //     fullName: "John Smith",
// // //     mass: 92,
// // //     height:1.95,
   
// // //     calcJohn: function(){
   
// // //       this.IBM = this.mass/(this.height * this.height)
// // //       return this.IBM
// // //     }
// // //    }
  
// // //  if(markObject.calcMark() > johnObject.calcJohn()){

// // //     //"John's BMI (28.3) is Higher than Mark's (23.9)!"
// // //    console.log(`${markObject.fullName}'s BMI (${markObject.calcMark()}) is Higher than ${johnObject.fullName}'s (${johnObject.calcJohn()})!`)

// // //  }else{

// // //     console.log(`${johnObject.fullName}'s BMI (${johnObject.calcJohn()}) is Higher than ${johnObject.fullName}'s (${markObject.calcMark()})`)

// // //  }

// // // // Write a function that iterate half way the characters

// // // function countHalfWay(string){
// // //     arrayCount = []
// // //    for(let i = 0; i < string.length/2; i++){
// // //    arrayCount.push(string[i])

// // //    }
// // //    return arrayCount.join(" ")

// // // }

// // // console.log("calculate Half way",countHalfWay("characters"))

// // // function countHalfWay(string){
// // //     arrayCount = []
// // //    for(let i = (string.length - 1)/2; i >= 0; i--){
// // //    arrayCount.push(string[i])

// // //    }
// // //    return arrayCount.join(" ")

// // // }

// // // console.log("calculate Half way",countHalfWay("characters"))


// // // const arrOf = [[1,2],[4,8],[9,12],[15,60]]






// // // // 15% if billsValue is between 50 and 300 and if different tips should be 20%

// // // // write a function calcTip
// // // //Count the number of pairs in an array having sums that are evenly divisible by a given number.
// // // // array = [[1,2],[3,5],[6,7]] => 1 + 2 % 2 === 0 that means 

// // // const array = [[1,2],[3,5],[6,7]]
// // //  for(let i = 0; i < array.length; i++){
// // //    array[i].map((element)=> console.log("check",element))


// // //  }
// // //  const jonas = {
// // //      firstName: "Wale",
// // //      lastName: "Abbey",
// // //      job: "Programmer",
// // //      location: "New York",
// // //      age: 20
// // //     }
    
// // //  const interestedIn = prompt("What do you want to know about me? ")
// // //  const returnValue =jonas[interestedIn.toLocaleLowerCase()] ? `${jonas[interestedIn].toLocaleLowerCase()}`:`${prompt("What do you want to know about me? ")}`
// // //  console.log(returnValue)
// // // //How to add element to an object using both dot notation and bracket notation!

// // // calcTip = (billsValue)=>{

// // //  if(billsValue >=50 && billsValue <=300 ){
// // //      return billsValue * 0.15
// // //  }else{
// // //      return billsValue * 0.2
// // //  }

// // // }
// // //  bills = [125,555,44]
// // // const arrayTipsValue = [calcTip(125),calcTip(555),calcTip(44)]
// // // const arrayTotalValue = [calcTip(125) + bills[0],calcTip(555) + bills[1],calcTip(44) + bills[2]]
// // // console.log("bills value and tips",arrayTotalValue)
// // // console.log("tips value",arrayTipsValue)
// // // //func tutorial!
// // // // Date 1 44 23 71 ==> Dolphins, koalas ====> 65 54 49
// // // // function to calculate Average of 3 scores
// // //   calcAverage = (num1,num2,num3)=>{
    
// // //    let result = (num1 + num2 + num3)/3
// // //    return result
// // // }
// // // function checkWinners(num1,num2,num3){
// // //     const avgDolhins = calcAverage(num1,num2,num3)
// // //     const avgKoalas= calcAverage(num1,num2,num3)
// // //     return avgDolhins >= 2* avgKoalas ? `Dolphins Win ${avgDolhins}`:`Koalas Win ${avgKoalas}`
   

// // // }
// // // console.log(checkWinners(44,23,71))
// // // console.log(checkWinners(65,54,49))
// // // //Create two function for different work
// // // // Create a function to count assigned the numbers of repeated character in this string
// // // // character  
// // // //{c:2,h:1,a:2,r:2,t:1,e:1}
     
// // // function countNumbersOfCharacter(string){
// // //   // create an object 
// // //   const result = [];
// // //   // iterate over the character  => string.length == 9
// // //   // i = 0 0< 9 yes 
// // //   for(let i = 0; i < string.length; i++){
      
// // //      let char = string[i].toLowerCase() // char is c because string have index of 0 which is the first letter of character
// // //      if(result[char] > 0){
// // //         result[char]++; 

// // //      }else{
// // //          result[char] = 1;
// // //      }
    
// // // }
// // // return result;
// // // }
// // // console.log(countNumbersOfCharacter("Ajagunna"))

// // // // Reverse words in a string 
// // // // example reverse characters
// // // // characters => 

// // // function reserverWordInString(word){
// // //     let string = []
// // //  // iterate over the words
// // //  for( let i = word.length-1; i >=0; i--)  string.push(word[i])

// // //    return string.join("")

// // // }
// // // console.log(reserverWordInString("characters"))  // sretcarahc
// // // function reverseNum(num){
// // //     let newArray = []
// // //   for (let i = num.length-1; i >=0; i--){
// // //      newArray.push(num[i])
    
// // //   }
// // //   return newArray

// // // }
// // // console.log(reverseNum([1,2,3,4,5,6,7,8,9]))


// // // // passing array to a function

// // // function calculateArray(years){
  
  
// // //  let age = 2021 - years;
// // //  return age;

// // // }
// // // const arrayOfYear = [2000,2001,2002,2003,2004]
// // // arr = [calculateArray(arrayOfYear[0]),calculateArray(arrayOfYear[1]),calculateArray(arrayOfYear[2]),calculateArray(arrayOfYear[3]),calculateArray(arrayOfYear[4])]
// // // console.log(arr)

// // // challenge 
// // //  jonas ={
// // //     firstName: "Jonas",
// // //     lastName: "Schmedtmann",
// // //     age: 2037 - 1991,
// // //     job: "teacher",
// // //     friends: ["Michael", "Peter", "Steven"]
// // // }
// // // // "Jonas has 3 friends,and his best friend is called Michael"
// // // console.log(jonas.friends.length)

// // // const result = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// // // console.log(result)

// // //  jonas ={
// // //     firstName: "Jonas",
// // //     lastName: "Schmedtmann",
// // //     birthYear:1991,
// // //     job: "teacher",
// // //     friends: ["Michael", "Peter", "Steven"],
// // //     hasDriversLicense: true,
// // //     calc: function(){

// // //       this.age = 2037 - this.birthYear 
// // //       return this.age
// // //     }
// // // }
 
// // //  // "Jonas is a 46-year old teacher,and he has a driver's license"
 
// // //  console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job},and he has ${jonas.hasDriversLicense? "a":"no"}driver's license`);



// // // const calc = function(birthYear){

// // //   age = []
// // //  for(let i =0; i < birthYear.length; i++){
// // //   const newAge = 2037 - birthYear[i]
// // //    age.push(newAge)
// // //  }
// // //  return age

// // // }
// // // const years = [1991,2007,1969,2020]
// // // console.log(calc(years))


// // // // arrayNumber = [1,2,3,4,5,6,7,8,9]

// // // // reverse 8,7,6,5,4,3,2,1,0

// // // //arrayNumber.length - 1 === 8


// // // write a function to find the maximum value of this array

// // let bills = [22,295,176,440,37,105,10,1100,86,52]
// // // assigned max to be the first number of the array
// // let max = bills[0]
// // const calcMaxOfArray = (arr)=>{
// //  // let iterate over the array for each number
// //   for(let i = 0; i< bills.length; i++){
// //      // check if the new iteration value is greater than the max value we need to assign the new value as max
// //       if(bills[i] > max) max = bills[i]
// //   }
// //   // return the max
// //  return max

// // }

// // let min = bills[0]
// // const calcMinOfArray = (bills) =>{

// //     for(let i = 0; i< bills.length; i++){
// //         // check if the new iteration value is greater than the max value we need to assign the new value as max
// //          if(bills[i] < min) min = bills[i]
// //      }
// //      // return the max
// //     return min



// // }

// // const calcFunOfSubMaxAndMin = ()=>{

// //   return calcMaxOfArray(bills) - calcMinOfArray(bills)


// // }
// // console.log(calcFunOfSubMaxAndMin())
// // function reverseNum(num) {
// //     // reverse the input
// //       return (
// //       parseFloat(
// //         num
// //           .toString()
// //           .split('')
// //           .reverse()
// //           .join('')
// //       ) * Math.sign(num)
// //     )
// //   }
// //   function addReverse(newNum){
// //       // add the reverse input and check if is equal the input giving
// //     if (newNum + reverseNum(newNum) === newNum) return newNum + reverseNum(newNum) 
     
// //   }
// //   addReverse(195)
// //Write a function called same,which accepts two arrays.
// //The function should return true if every value in the array has it's corresponding value
// // squared in the second array.The frequency of the values must be the same.
// //Test Date [123]
// //First write function called same

// // write a function called same
// // which accept two arrays
// //The function should return true if the first array has as it square in the other array=[1,2,3]
// // [1,4,9]
// // function same(arr1,arr2){
// //     firstArray1 = {}
// //     secondArray2= {}
// //     if(arr1.length !== arr2) return false

// //     for(let val of arr1) 
       
    
   
// // }
  
  

// // console.log([1,2,3],[4,1,5])
// //Given Two strings,write a function to determine if the sceond string is an anagram of the first.
// // An anagram is a word,phrase, or name fromed by rearranging the letters of another,such


// // function anagram(string1){
// //   checkFrequency = {}

// //    for( let i = 0; i < string1.length; i++){
// //       let newElement = string1[i].toLowerCase()
// //       checkFrequency[newElement] ? checkFrequency[newElement]++ : checkFrequency[newElement] = 1

// //    }

// //   return checkFrequency
// // }
// // console.log(anagram("Ajagunna"))



// // function countNumberOf(){
// //     let newObj1 = {}
// //     let newObj2 = {}
// //     for(let val of numberOfTime1) {
// //       newObj1[val] ? newObj1[val]++ : newObj1[val] = 1
      
// //     }
// //     for(let val of numberOfTime2) {
// //        newObj2[val] ? newObj2[val]++ : newObj2[val] = 1
// //     }
// //     return (newObj1,newObj2)
// // }
// // console.log(countNumberOf(numberOfTime1,numberOfTime2))


// // let numberOfTime1 = [2,2,4,5,4,6]
// // let numberOfTime2 = [4,4,16,25,16,36]
