let app = document.getElementById('app')
let header = document.getElementById('header')
let span = document.createElement('span')
span.innerText = 'dist is ook wel tof'
paragraph.appendChild(span)
// let paragraphFromPage = document.getElementsByTagName('p')

// console.log(paragraphFromPage)

let paragraph = document.createElement('p')


console.log(paragraph)

app.appendChild(paragraph)
paragraph.innerText = 'dit is tof!' 
paragraph.setAttribute('id','par-1')
console.log(header.getAttribute('id'))

header.remove()

