// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let num3 = document.getElementById("number3")
const buttons = document.getElementById("buttons")
const playAgain = document.getElementById("play-again-button")
let answer = 0
let score = 0
let operation;


function randomNumber(){
    let x = Math.floor(Math.random()*100)+1
    return x
}

function displayRandomNumber(){
    number1 = randomNumber()
    number2 = randomNumber()
    number3 = updateAnswer(number1,number2)
    num1.innerText = number1
    num2.innerText = number2
    num3.innerText = number3
}
displayRandomNumber();



function updateAnswer(number1,number2){
    let operators = ["+","-","*","/","%"]
    operation = operators[Math.floor(Math.random()*5)] 
    
    if(operation=="+"){
        answer = number1+number2;
    }
    else if(operation=="-"){
        answer = number1-number2;
    }
    else if(operation=="*"){
        answer = number1*number2;
    }
    else if(operation=="/"){
        answer = Math.floor(number1/number2);
    }
    else if(operation=="%"){
        answer = number1%number2;
    }
    return answer
}

buttons.addEventListener('click',(e)=>{
    arithmatic(e.target.id)
})

//Timer functionality
let time = 20
function stopWatch(){
    if(time<=0){
        gameOver()
    }
    time--
    timer.innerHTML = time
}
setInterval(stopWatch,1000)

function arithmatic(s){
    if (s=="plus" && operation=="+" || s=="minus" && operation=="-" || s=="mul" && operation=="*" || s=="divide" && operation=="/" || s=="modulus" && operation=="%"){
        time = 21
        score++
        displayRandomNumber()
    }else{
        gameOver()
    }
}


function gameOver(){
    window.location.href="gameover.html"
    localStorage.setItem("score",score)
}




// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
