
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


// get elements from the DOM
// get the value from dom elements
// add events listeners
//know how functions works
// we need to know how to pass data in function 
// async await.
// use interpolation ``

// if
// for loop
// HOF
// const var
// objects and data types

