//  const button = document.querySelector('button')
//       button.addEventListener('click', e => {
//         let w = parseFloat(document.querySelector("#weight").value)
//         let h = parseFloat(document.querySelector("#height").value)
//         console.log(h , w)
//         if((!h) || (!w) || h < 0 || w < 0){
//             alert("enter your weight and height")
//         }
//         else {
//                  const BMI = w / ((h /100) **2)
//                 let resultHeader  = document.querySelector("h4")
//                 if(!resultHeader)
//                     resultHeader = document.createElement("h4")
//                 resultHeader.innerHTML = `your BMI is ${BMI.toFixed(2)} `
//                 let division = document.querySelector(".wrapper")
//                 division.appendChild(resultHeader)
//         }
       
//       })
// localStorage.setItem("data", JSON.stringify([10,17,22,33]))
// document.querySelector('#weight').addEventListener('input', e =>{
//     let val = parseFloat(document.querySelector('#weight').value)
//     data = JSON.parse(localStorage.getItem("data"))
//     if (data.includes(val))
//         console.log(`data array :${data} contains: ${val} ` )
//     document.querySelector('#height').value = val
// })
// document.querySelector('#weight').addEventListener('blur', e =>{
//     let w = parseFloat(document.querySelector("#weight").value)
//         let h = parseFloat(document.querySelector("#height").value)
//         console.log(h , w)
//         if((!h) || (!w) || h < 0 || w < 0){
//             alert("enter your weight and height")
//         }
//         else {
//                  const BMI = w / ((h /100) **2)
//                 let resultHeader  = document.querySelector("h4")
//                 if(!resultHeader)
//                     resultHeader = document.createElement("h4")
//                 resultHeader.innerHTML = `your BMI is ${BMI.toFixed(2)} `
//                 let division = document.querySelector(".wrapper")
//                 division.appendChild(resultHeader)
//         }
// })

// document.body.addEventListener('keypress', e => {
//         console.log(e.keyCode)
//       })