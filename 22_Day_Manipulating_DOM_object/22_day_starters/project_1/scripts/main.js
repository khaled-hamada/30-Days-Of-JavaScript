function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

let element
let division = document.createElement('table')
division.className="numbers-div"
division.style.width= (6 * 50) +"px"
division.style.height= (20 * 50) +"px"
// division.style.backgroundColor="green"
// console.log(division)
let currentrow
document.body.appendChild(division)

        for (let i = 1; i <= 20; i++) {
            currentrow = document.createElement('row')
            currentrow.style.margin= ( 4) +"px"
            currentrow.style.padding= ( 4) +"px"
            currentrow.style.textAlign="center"
            for(let j = 1; j <= 6; j++){
                element = document.createElement('td')
                element.style.width= ( 50) +"px"
                element.style.height= ( 50) +"px"
                element.style.margin= ( 4) +"px"
                element.style.padding= ( 25) +"px"
                element.style.textAlign="center"
                element.style.color="white"
                element.style.fontSize="30px"
                let num = ( j  + (6 * (i-1))) 
                element.textContent = num
                
                if(isPrime(num))
                     element.style.backgroundColor="red"
                else if(num % 2 === 0)
                    element.style.backgroundColor="green"
                else if(num % 2 === 1)
                    element.style.backgroundColor="yellow"
                //console.log(division)
                // document.body.appendChild(division)
                currentrow.appendChild(element)
                // orderedList.innerHTML  += ` <li> ${i} </li> `
            }
             division.appendChild(currentrow)
            
        }
       