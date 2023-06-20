
const jokesContainer = document.getElementById('jokes-container')
const newJoke = document.querySelector('#new-joke')

newJoke.addEventListener('click',function(){
    callToAPI()
})

function displayOnTheScreen(joke){
    const jokeText = joke.value
    jokesContainer.innerText = jokeText
}

async function callToAPI(){
    try{
    const req =  await fetch('https://api.chucknorris.io/jokes/random?name=Mario&category=dev')
    const res =  await req.json()
    displayOnTheScreen(res)

    }catch(e){
        console.error()
    }
}


