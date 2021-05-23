
let month = prompt("Enter a month name").toLowerCase()


console.log(month)


switch(month){
    case 'Janurary':
        console.log(`${month} is 31 days`)
        break 
    case 'february':
    case 'feb':
    case'f':
        let year = new Date().getFullYear()
        if ((year % 4 == 0) || (year % 100 == 0)) {
             console.log(`${month} is 29 days`)
        }
        else{
             console.log(`${month} is 28 days`)
        }
        break 
   
    default :
        console.log("it is not a number ")
        break 

}

