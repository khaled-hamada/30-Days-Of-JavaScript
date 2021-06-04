
// // // // // const callback = function (n){
// // // // //     return n*n
// // // // // }

// // // // // console.log(cube(callback ,10 ))



// // // // // function cube(squareFunc, n){
// // // // //     return squareFunc(n) * n
// // // // // }


// const higherOrder = n =>{
//     const doSomething = m =>{
//         const doWhatever = t =>{
//             return 2*n +3 *m +t
//         }

//         return doWhatever
//     }
//     return doSomething
// }
// do_what_ever  = higherOrder(2)(4)
// console.log(do_what_ever(10))













// // // // const numbers =[1,2,3,4,5]

// // // // const sumArray = arr =>{
// // // //     let sum=0
// // // //     const callback = function (element){
// // // //         sum += element
// // // //     }
// // // //     arr.forEach(callback)
// // // //     return sum
// // // // }
// // // // const sumArray_2 = arr =>{
// // // //     let sum=0
   
// // // //     arr.forEach(function(element){
// // // //         sum += element
// // // //     })
// // // //     return sum
// // // // }
// // // // console.log(sumArray(numbers))
// // // // console.log(sumArray_2(numbers))




// // // // function sayHello(ct) {
// // // //   console.log(`Hello ${ct} ` )
// // // // }
// // // // // setInterval(sayHello, 10000) // it prints hello in every 2 seconds
// // // // for(let i =0 ; i< countries.length ; i++){
// // // //     ct = countries[i]
// // // //     // console.log(ct)
// // // //     setInterval(sayHello(ct.name), 3000) 
// // // // }


// // // for(let i =1 ; i<=25;i++){
// // //     const retValue =( function(a,b){
// // //     console.log(`${a} * ${b} = ${a*b} `)
// // //     return a*b
// // // })
// // // // retValue(i, (((i * i) -i) / i) +i)

// // // console.log(retValue)
// // // }


// // // // Higher order function returning an other function
// // // const higherOrder = n => {
// // //   const doSomething = m => {
// // //     const doWhatEver = t => {
// // //       return 2 * n + 3 * m + t
// // //     }
// // //     return doWhatEver
// // //   }

// // //   return doSomething
// // // }
// // // console.log(higherOrder(2)(5)(10))

// // // const numbers = [1, 2, 3, 4]

// // // function sumArray(arr) {
// // //   let sum = 0
 
// // //   arr.forEach(function(element) {
// // //     sum += element
// // //   })
// // //   return sum

// // // }
// // // let sum = 0
// // // let sum_2 =  numbers.forEach(function(element) {
// // //     sum += element
// // //   })
// // // console.log(sum_2)

// // // arr = [1,2,3]
// // // // arr.forEach(function (element, index, arr) {
// // // //   console.log(index, element, arr)
// // // // })
// // // // // The above code can be written using arrow function
// // // // arr.forEach((element, index, arr) => {
// // // //   console.log(index, element, arr)
// // // // })
// // // // The above code can be written using arrow function and explicit return
// // // arr.forEach((element, index) => console.log(index, element))

// // let sum = 0;
// // const numbers = [1,2,3,4,5];
// // numbers.forEach(num => sum += num)
// // numbers.forEach(function(num){
// //   sum+= num
// // })

// // console.log(sum)

// // // function do_x(a = 25){
// // //   console.log(a)
// // // }
// // // do_x(10,1,1,1,23)
// // const squared = (function(n){
// //   return n*n
// // })

// // const cubed_array = numbers.map((ele) => squared(ele)*ele)
// // console.log(cubed_array)


// // const names = ['khaled',"hamada","mansour","mahmoud","ahmed","osman"]
// // const arr_c_ma = names.filter((n) => n.endsWith('d'))
// // console.log(arr_c_ma)

// // const countriesHaveFiveLetters = countries.filter(
// //   (country) => country.name.length <= 5 
// // )
// // console.log(countriesHaveFiveLetters)

// // names_acc = names.reduce((acc, cur) => acc+", "+cur)
// // console.log(names_acc)



// // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook',10]
// // const areAllStr = names.find((name) => name.length >= 10)

// // console.log(areAllStr)






// // const scores = [
// //   { name: 'Asabeneh', score: 95 },
// //   { name: 'Mathias', score: 80 },
// //   { name: 'Elias', score: 50 },
// //   { name: 'Martha', score: 85 },
// //   { name: 'John', score: 100 },
// // ]

// // const score = scores.find((user) => {
// //   return (user.score > 95) && (user.score <= 101 ) 
// // })
// // console.log(score)
// const names = ['Zsabeneh', 'zathias', 'Elias', 'Brook', 102410654210]
// const ages = [24, 22, 25, 32, 35, 18,120,130,97,125,48,90]

// // result = names.findIndex((name) => name.length > 15)
// // console.log(result) // 0

// //  age = ages.findIndex((age) => age < 20)
// // console.log(age) // 5



// // const bools = [true, false, false, false , false, false]

// // const areSomeTrue = bools.some((b) => {
// //   return b === true
// // })

// // console.log(areSomeTrue) //true
// // const areSomeNum = names.some((name) => typeof name === 'number')
// // console.log(areSomeNum) // false
// // names.sort()
// // ages.sort()
// // ages.sort()
// // // console.log(names)
// // console.log(ages)



// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers) // [3.14, 9.81, 37, 100]

// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]







// const users = [
//   { name: 'Asabeneh', age: 150 },
//   { name: 'Brook', age: 50 },
//   { name: 'Eyo', age: 100 },
//   { name: 'Elias', age: 22 },
// ]
// users.sort((a, b) => {
//   if (a.age < b.age) return -1
//   if (a.age > b.age) return 1
//   return 0
// })
// console.log(users) // sorted ascending


// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: '9' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '15' },
// ]

// const prices = products.map((ele) => {
//   if( parseInt(ele.price) >=0){
//     return  parseInt(ele.price)
// }
// else{
//   return 0
// } 
// }).filter(function(ele)
//   {
//     return ele > 0
//   }
// ).reduce(function (acc, cur){
//   return acc+ cur
// },0)
  
// console.log(prices)


/*** 
 * exercise level 3
*/

function mostSpokenLanguages(data , count){
  result = []
  data.forEach(function(element){
    for(language of element.languages ){
         let idx = result.findIndex(
           (res_element) =>  language === res_element.country
           )
         

      if(idx != -1 ) {
          result[idx].count += 1

      }
      else {
          result.push({country:language ,count:1})
        }  
    
   

} 
})
  result = result.sort((a,b) =>{
    if( b.count > a.count )
      return 1
    else if( b.count < a.count )
      return -1
    
    else {
      return a.country.localeCompare(b.country)
    }
      
    
  })
  console.log(result.slice(0,count))
}
mostSpokenLanguages(countries, 15)
