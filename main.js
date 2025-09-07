let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false;
let chanceArea = document.getElementById("chance-area")

playButton.addEventListener("click", play)
resetButton.addEventListener("click",reset)
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play(){
    let userValue = userInput.value;

    chances--;
    chanceArea.textContent = `남은 기회:${chances}번`;
    console.log

    console.log("chance", chances)
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!"
    } else if (userValue > computerNum){
        resultArea.textContent = "DOWN!!!"
    }else{
        resultArea.textContent = "맞추셨습니다!!!"
    }
    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }
}
function reset(){
    userInput.value = "";
    pickRandomNum()
    resultArea.textContent = "결과값이 여기 나옵니다!"
}
pickRandomNum();