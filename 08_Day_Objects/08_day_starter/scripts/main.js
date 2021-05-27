 let check_string= 'khaled hamada mansour khaled hamada mansour khaled hamada mansour khaled hamada mansour '.repeat(1000000)
let words={}

let words_arr = check_string.split(' ')
// console.log(words_arr)
for(let i =0 ; i<words_arr.length ; i++){
    
    word = words_arr[i]
    
    if(words[word]){
        words[word] += 1
    }
    else{
        words[word] = 1 
    }
    // console.log(word)
}

//console.log(words)
for(key of Object.keys(words)){
    console.log(`word: ${key} , count : ${words[key]} `)
}
