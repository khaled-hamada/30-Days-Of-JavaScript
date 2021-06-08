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

setInterval(()=>{
    let title = document.getElementById('innerYear')
    // let year = title.textContent.match(/\d+/gi)[0]
    // let text = title.textContent.match(/[^\d+]+/gi)[0]
    // console.log(year)
    // console.log(text)
    // // title.innerHTML = 
    title.style.color = hexaColor()
}, 10000)


/// get all list elements and for each of them check status then color
const listItems = document.querySelectorAll('li')
listItems.forEach((element , idx) => {
    //check for done 
    element.style.margin = '3px'
    if(element.textContent.toLowerCase().includes('done')){
        element.style.backgroundColor = 'green'
    }
    else if(element.textContent.toLowerCase().includes('ongoing')){
        element.style.backgroundColor = 'yellow'
    }
    if(element.textContent.toLowerCase().includes('coming')){
        element.style.backgroundColor = 'red'
    }
})
    
