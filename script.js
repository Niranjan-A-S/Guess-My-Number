let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener("click", handleClick);
document.querySelector(".again").addEventListener("click", restore)

function handleClick() {
    let guessedNumber = Number(document.querySelector(".guess").value)

    //When the input is invalid
    if(!guessedNumber || guessedNumber > 20 || guessedNumber < 1) {
        document.querySelector(".message").textContent = "Not a Valid Number ⛔"


    //When the player wins 
    } else if(guessedNumber === secretNumber){
        highScore = score;
        document.querySelector(".message").textContent = "🎉 You Won";
        document.querySelector("body").style.backgroundColor = "Green"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = guessedNumber;
        document.querySelector(".high-score").textContent = highScore;


    //When the input is high
    } else if(guessedNumber > secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "📈 Nah it's high"
            score--;
            document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "😭 You lose" 
            document.querySelector(".score").textContent = 0
        }

    
    //When the input is low
    } else if(guessedNumber < secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "📈 Nah it's low"
            score--;
            document.querySelector(".score").textContent = score;
        }
       else{
        document.querySelector(".message").textContent = "😭 You lose"
        document.querySelector(".score").textContent = 0
  
       }
    }
}


function restore(){
    score  = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?"
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
}