// console.log(countries);
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr[4]['skills'][4])


// const test_arr= Array(25)
// console.log(test_arr) 

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// console.log(firstList) // [1, 2, 3, 4, 5, 6]
// console.log(secondList) // [1, 2, 3, 4, 5, 6]

// console.log(typeof thirdList)



// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook



// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook



// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' ,khaled, '))  // "HTML 




// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice(0,1))            // remove the first item
// console.log(numbers)            // remove the first item
// // const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.splice(1, 3, 7, 8, 9))  //
// console.log(numbers)   

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// const arr = Array()
// arr.push(10)
// arr.push(10)
// arr.push(10)
// arr.push(10)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift("khaled")
// console.log(arr)



// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const number=[1,2,3]
// const fullStack = [frontEnd, backEnd,number]

// const full_2 = [fullStack, fullStack]
// // console.log(full_2)
// // console.log(full_2[0])
// for(let i =0 ; i< full_2.length; i++){
//    for(let j =0 ; j< full_2[i].length; j++){
//         for(let k =0 ; k< full_2[i][j].length; k++){
//             console.log(`i,j,k ${i}, ${j}, ${k} => ${full_2[i][j][k]}`)
//         }
//     }    
// }


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(`ages sorted : ${ages}`)
console.log(`max of ages  : ${Math.max(...ages)}`)


