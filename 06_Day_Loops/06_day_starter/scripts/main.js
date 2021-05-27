// console.log(countries)
// // alert('Open the console and check if the countries has been loaded')
// numbers=[10,11]
// let index =1
// for(const num of numbers){
//     console.log(num)
//     numbers.push(num + index++)
//     if (index >= 100)
//         break
// }
// let string=""
// for(let i=1 ; i<=15 ; i++){
//     for(let j = 1; j <= i ;j++){
//         string += "#"
//     }
//     console.log(string)
//     string=""
// }

// // let number = prompt("enter a number to generate a random id of chars = number you will enter")

// // code_length = parseInt(number)
// for(let i = 0 ; i <= 100 ; i += 5){
//     code_string = ""
//     code_length= i
//     while( code_length > 0){
//         let rand_num = Math.floor(Math.random() *128)
//         while(rand_num < 48 || (rand_num > 57 && rand_num < 65) || (rand_num > 90 && rand_num < 97)  || rand_num > 122){
//             rand_num = Math.floor(Math.random() *128)
//         }
        
//         rand_char = String.fromCharCode(rand_num)
//         code_string += rand_char
//         code_length--


//     }
//     console.log(`random id of length ${parseInt(code_length)}is ${code_string} , length is ${code_string.length}`)
// }