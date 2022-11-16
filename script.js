const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)

const formEl = document.getElementById('form')
const scoreEl = document.getElementById('score')
const questionEl = document.getElementById('question')
const inputEl = document.getElementById('input')

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
  score = 0;
}

scoreEl.innerText = 'Score: ' + score

questionEl.innerText = 'What is ' + num1 + ' multiplied by ' + num2 + '?'

const correctAns = num1 * num2

//handle an event, so each time the person click on submit -> function
formEl.addEventListener("submit", ()=>{
  const userAns = +inputEl.value
  if(userAns === correctAns){
    score++
    updateLocalStorage()
  } else {
    score--
    updateLocalStorage()
  }
})

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}

// if(userAns === correctAns){
//   scoreEl++
//   console.log(scoreEl)
// } else{
//   scoreEl--
//   console.log(scoreEl)
// }

