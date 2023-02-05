const url = `https://api.adviceslip.com/advice`

const boton = document.querySelector('button')

const body = document.querySelector('body')

const div = document.querySelector('div')



boton.addEventListener('click', async (even) => {
    even.preventDefault()
    await fetch(url)
    .then((res) => res.json())
    .then((x) => {
        console.log(x)
        let advice = x.slip.advice
        let newPar = document.createElement('p')
        newPar.textContent = advice
        div.append(newPar)
        newPar.addEventListener('mouseover', () => {
            //e.preventDefault()
            newPar.style.textDecoration = 'underline'
        })
        newPar.addEventListener('mouseout', () => {
            //e.preventDefault()
            newPar.style.textDecoration = 'line-through'
        })

    })
    .catch((e) => {
        console.log(e)
    })
})

const newDiv = document.createElement('div')

newDiv.setAttribute('class', 'second')

// const second = document.querySelector('.second')
newDiv.innerHTML = 
`<h1>Search for an Specific Advice Category</h1>
<input type= "text" placeholder = "category">
<button class= "search">SEARCH</button>`

body.append(newDiv)

let boton2 = document.querySelector('.search')
let inp = document.querySelector('input')

boton2.addEventListener('click', async (e) =>{
    e.preventDefault()
    let g = inp.value
    await fetch(
        `${url}/search/${g}`
    )
    .then((res) => res.json())
    .then((x) =>{
        console.log(x)
        let slips = x.slips
        for (let slip of slips){
            let advice1 = slip.advice
            let newPar = document.createElement('p')
            newPar.textContent = advice1
            newDiv.append(newPar)
            newPar.addEventListener('mouseover', () => {
                //e.preventDefault()
                newPar.style.textDecoration = 'underline'
            })
            newPar.addEventListener('mouseout', () => {
                //e.preventDefault()
                newPar.style.textDecoration = 'line-through'
            })
        }
    
    })
    .catch((e) =>{
        console.log(e)
    })
})

let line = document.createElement('hr')

newDiv.prepend(line)





