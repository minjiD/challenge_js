const maxNum = document.querySelector("#maxNum");
const guessNum = document.querySelector("#guessNum");
const btnPlay = document.querySelector("#btnPlay");
const textRes = document.querySelector("p");

btnPlay.addEventListener("click", function(e) {
    // e.preventDefault();
    const maxNumber = Number(maxNum.value);
    const guessNumer = Number(guessNum.value);
    
    if(maxNumber > 0 && guessNumer > 0) {
        if(maxNumber < guessNumer) {
            alert(`Please enter a number less then ${maxNumber}.`);
            
        } else {
            //랜덤 숫자
            let randomNum;
            randomNum = Math.ceil(Math.random() * maxNumber);
            randomNum = Number(randomNum);
            // console.log(typeof(randomNum));

            textRes.innerHTML = `You chose: ${guessNumer}, the machine chose: ${randomNum}.<br>`;
            textRes.style.fontSize = "20px";

            if(guessNumer === randomNum) {
                textRes.innerHTML += `<strong>You won!</strong>`;
            } else {
                textRes.innerHTML += `<strong>You lost!</strong>`;
            }
        }
        
    } else {
        alert("Please enter a number greater then 0.");
    }
    
});