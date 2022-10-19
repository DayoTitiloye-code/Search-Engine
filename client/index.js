function getChar(char){
    const name = document.querySelector('#name')
    const description = document.querySelector('#description')
    const btnSingle = document.querySelector('#single')

    btnSingle.addEventListener('click', (e) =>{
        e.preventDefault()
        name.textContent = char.name
        description.textContent = char.description
    })
}

fetch('http://localhost:3000/characters/3')
    .then(response => response.json())
    .then(char =>{
        console.log(char)
        getChar(char)
    })
