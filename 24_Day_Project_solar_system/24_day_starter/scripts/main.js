
// select button and attach event click to it 
document.querySelector("#cal").addEventListener('click', (e) =>{
    let dValue = document.querySelector("#dlist").value;
    // console.log(dValue)
    let mass = parseFloat(document.querySelector("#mass").value) 
    mass = mass != NaN && mass > 0  ? mass : -1 
    if(mass !== -1 && dValue !== 'none'){
        console.log(dValue , "    ", mass)
        let planetSrc = document.querySelector("#planet")
        planetSrc.setAttribute("src", `./images/${dValue}.png`)

       
        let resultDiv = document.querySelector("#resDiv")
        let resultPara = document.createElement("p")
        resultPara.textContent = `Weight of ${mass} at ${dValue} is ${mass * 10}`

        resultDiv.appendChild(resultPara)
        resultDiv.style.color = 'white';
    }
    else if(mass === -1){
        alert("enter correct mass value")
    }
    else if(dValue === "none"){
        alert("select a correct planet")
    }
})