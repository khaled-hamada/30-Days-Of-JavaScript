// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         function innerFunction_2() {
//             count++
//             return count
//          }
//         return innerFunction_2
//     }

//     return innerFunction
// }


// const innerFunc = outerFunction()()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


function outerFunction() {
    let count = 0;
    function plusOne(n) {
        count++
        return count * n
    }
    function minusOne(n) {
        count--
        return count / n
    }

    return {
        plusOne:plusOne,
        minusOne:minusOne
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne(4))
console.log(innerFuncs.plusOne(3))
console.log(innerFuncs.plusOne(2))
console.log(innerFuncs.minusOne(10))
