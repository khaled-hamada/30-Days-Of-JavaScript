// function greetings(name = 'Peter', last_name) {
//   let message = `${name} -- ${last_name}, welcome to 30 Days Of JavaScript!`
//   return message
// }

// console.log(greetings())
// console.log(greetings('Asabeneh',"Peter"))
function modifyArray(arr){
  if (arr.length >= 5){
    arr[4] = arr[4].toUpperCase()
    return arr
  }
  else{
    return "item not found"
  }
}

console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
