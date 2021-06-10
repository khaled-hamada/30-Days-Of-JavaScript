document.querySelector("#firstName").addEventListener('input', (e) =>{
    let value = document.querySelector("#firstName").value;
    let test
    try {
        test = value.match(/[A-Za-z0-9]+/gi)[0]
    }
    catch(e){
        test =""
    }
    
    let div = document.querySelector("#first")
    if((test.length !== value.length) || test.length < 3 ){
     
      let error = document.querySelector("#firstNameError")
      if(!error){
        error = document.createElement("p")
        error.style.color = 'yellow'
        error.id = "firstNameError"
      }
      error.textContent = "name must be alpha and contains 3-16 chars"
      
      div.appendChild(error)  
    }else{
        let error = document.querySelector("#firstNameError")
        if(error){
            div.removeChild(error)
        }
    } 
})

// for e-mail
document.querySelector("#Email").addEventListener('input', (e) =>{
    let value = document.querySelector("#Email").value;
    let test
    try {
        test = value.match(/[A-Za-z0-9]+@[A-Za-z0-9]+[.]{1}[A-Za-z0-9]+/gi)[0]
    }
    catch(e){
        test =""
    }
    
    let div = document.querySelector("#e-mail")
    if((test.length !== value.length) || test.length < 3 ){
     
      let error = document.querySelector("#emailError")
      if(!error){
        error = document.createElement("p")
        error.style.color = 'red'
        error.id = "emailError"
      }
      error.textContent = "email must be like this example@example.com"
      
      div.appendChild(error)  
    }else{
        let error = document.querySelector("#emailError")
        if(error){
            div.removeChild(error)
        }
    } 
})