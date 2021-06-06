// const url = 'https://restcountries.eu/rest/v2/all' // countries api
// const data_2 = fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => data)
//   .catch(error => console.log(error)) // handling error if something wrong happens

// console.log(data_2)



// const square = async function (n) {
//   return n * n
// }

// async function do_square(n) {
//   res = await  square(n)
//   console.log(res)
//   return res
// }

// let res = do_square(10)
// console.log(res.__proto__[PromiseResult])



const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


fetch(catsAPI).then( response => response.json()).then(data =>{
    // for(const ele of data){
    //     console.log(`name : ${ele.name}`)
    // }
    handleData(data)
} ).catch(error => console.log(error))

function handleData(data){

    console.log(data[0])
}
console.log("waiting for data fro fetch")
// Read the countries API using fetch and print the name of country, capital, languages, population and area.