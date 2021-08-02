// Generate number from 1-100
function generateNumber(){
    return Math.trunc(Math.random()*100) + 1 ; 
}
// Checks if input==num
function checkNum(inputNum,correctNum){
    if(inputNum!=correctNum){return false;}
    else{return true;}
}
// Gets hint
function getHint(inputNum, correctNum){
    if(inputNum>correctNum){return `Too High !`;}
    else{return `Too Low !`;}
}
//Checks score
function lose(scoreCounter)
{
    if(scoreCounter!=0){return false;}
    else{return true;}
}

// Query Selectors
let randomNumber = generateNumber();
let score = document.querySelector('.score-text'); 
let scoreCounter = document.querySelector('.score-text').textContent;
let highScore = document.querySelector('.highscore-text');
const hintText = document.querySelector('.hint-text');
let questionText = document.querySelector('.question-text');
let guessingHistory = document.querySelector('.history');
let checkBox = document.querySelector('.check-box');
let inputBox = document.querySelector('.input-box');


// Main Logic
document.querySelector('.check-box').addEventListener('click', function (){
    const inputNumber = Number(document.querySelector('.input-box').value) ;
    console.log(randomNumber);

    if(questionText.textContent!='?')
    {
        //Reset colors
        document.body.style.background = "linear-gradient(to top right, #9198e5, #f78773, #ffaf8a)" ;
        checkBox.style.backgroundColor = "skyblue";
        checkBox.style.border = "2px solid yellow";


        //Reset counters/text
        scoreCounter = 10 ; 
        score.textContent = 10; 
        questionText.textContent = '?' ;
        inputBox.value = '';
        hintText.textContent = `Let's start Guessing...`;
    

        //Generates New Number
        randomNumber = generateNumber();
    }

    // Empty Input or NAN
    else if(inputNumber=='' || !Number(inputNumber) || inputNumber>100 || inputNumber<1){
        hintText.textContent = `Invalid input` ;  
    }

    // If number matches
    else if(checkNum(inputNumber,randomNumber)){

        // Updates Score/text
        hintText.textContent = `👍 Correct!`;
        if(Number(highScore.textContent)<Number(scoreCounter)){highScore.textContent = scoreCounter ; }
        questionText.textContent = inputNumber ;
        scoreCounter = 10;
        score.textContent = 10;

        // Updates color
        questionText.style.background = 'pink';
        document.body.style.background = "linear-gradient(to top right,#4f705e,#62e39c)" ;
        checkBox.style.background = "grey";
        checkBox.style.border = "1px solid transparent" ; 

    }  

    // If incorrect
    else{
        hintText.textContent = getHint(inputNumber,randomNumber) ;
        scoreCounter--;
        
        if(lose(scoreCounter)) {
            hintText.textContent = 'You lost.......' ; 
            scoreCounter = 10 ; 
            score.textContent = 10; 
            randomNumber = generateNumber() ; 
        }
        
        
    }
    score.textContent = scoreCounter ;
}
)


// Play/Reset button 
document.querySelector('.reset').addEventListener('click',function(){

    //Reset colors
    document.body.style.background = "linear-gradient(to top right, #9198e5, #f78773, #ffaf8a)" ;
    checkBox.style.backgroundColor = "skyblue";
    checkBox.style.border = "2px solid yellow"

    //Reset counters/text
    scoreCounter = 10 ; 
    score.textContent = 10; 
    inputBox.value = '';
    hintText.textContent = `Let's start Guessing...`;

    //Generate new number
    randomNumber = generateNumber();

})


