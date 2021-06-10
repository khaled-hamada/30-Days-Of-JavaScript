window.addEventListener('load', e =>{
    

// let rowsNum = ((countries.length) / 6 )
// rowsNum = (rowsNum % 2 === 0) ? rowsNum : parseInt(rowsNum)+1
// console.log(rowsNum)
// let element
// let division = document.createElement('table')
// division.className="numbers-div"
// division.style.width= (6 * 250) +"px"
// division.style.height= (rowsNum * 50) +"px"
// division.style.backgroundColor="green"
// console.log(division)
// let currentrow
// document.body.appendChild(division)

//         for (let i = 1; i <= rowsNum; i++) {
//             currentrow = document.createElement('row')
//             currentrow.style.margin= ( 4) +"px"
//             currentrow.style.padding= ( 4) +"px"
//             currentrow.style.textAlign="center"
//             for(let j = 1; j <= 6; j++){
//                 element = document.createElement('td')
//                 element.style.width= ( 250) +"px"
//                 element.style.height= ( 50) +"px"
//                 element.style.margin= ( 4) +"px"
//                 element.style.padding= ( 4) +"px"
//                 element.style.textAlign="center"
//                 element.style.color="white"
//                 element.style.fontSize="10px"
//                 let idx = ( j  + (6 * (i-1)) -1 ) 
//                 element.textContent = countries[idx]
                
               
//                 if(idx % 2 === 0)
//                     element.style.backgroundColor="green"
//                 else if(idx % 2 === 1)
//                     element.style.backgroundColor="yellow"
//                 //console.log(division)
//                 // document.body.appendChild(division)
//                 currentrow.appendChild(element)
//                 // orderedList.innerHTML  += ` <li> ${i} </li> `
//             }
//              division.appendChild(currentrow)
            
//         }
       



    let det = document.createElement("details")
    let sum = document.createElement("summary")
    let lst = document.createElement("ol")
    sum.textContent = "khaled skills"
    document.body.appendChild(det)
    det.appendChild(sum)
    det.appendChild(lst)
    skills = ["java","python","c","django","html","css","javascript", "postgreSQL","bootstrap"]
    for(const skill of skills){
        lst.innerHTML +=  `<li> ${skill} </li> `
    }


})