// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

const display = "30 days of full stack development by khaled bn osman".toUpperCase()
setInterval(()=> {
    // console.log(hexaColor())
    let displayDiv = document.querySelector('#display-div')
    // displayDiv.style.backgroundColor = hexaColor()
    displayDiv.innerHTML = ""
    for(const char of countries ){
        let c = document.createElement('span')
        c.style.color = hexaColor()
        c.style.fontSize = "15px"
        c.textContent = `${char.name} => ${char.languages}`
        displayDiv.appendChild(c)
    }
},1000)
// console.log(display)
