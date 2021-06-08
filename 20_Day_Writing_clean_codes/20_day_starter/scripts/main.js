

// // declaring an array variable
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// // iterating an array using regular for loop
// let len = names.length;
// for(let i = 0; i < len; i++){
//     console.log(names[i].toUpperCase())
// }


// // iterating an array using for of
// for( const name of names) {
//     console.log(name.toUpperCase())
// }

// // iterating array using forEach 
// names.forEach((name) => name.toUpperCase())
// console.log(names)

// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
//   isMarried: true
// }
// for(const key in person) {
//     console.log(key)
// }


// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

