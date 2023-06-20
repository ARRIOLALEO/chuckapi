
const jokesContainer = document.getElementById('jokes-container')
const newJoke = document.querySelector('#new-joke')
// you will need to get hat id of the imput

newJoke.addEventListener('click',function(){
    callToAPI()
})

function displayOnTheScreen(joke){
    const jokeText = joke.value
    jokesContainer.innerText = jokeText
}

async function callToAPI(){
    try{
        // you need to add the value of the input
    const req =  await fetch('https://api.chucknorris.io/jokes/random?name=Mario&category=dev')
    const res =  await req.json()
    displayOnTheScreen(res)

    }catch(e){
        console.error()
    }
}


