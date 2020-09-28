const wordEl=document.getElementById("word");
const wrongLettersEl=document.getElementById("wrong-letters");
const playAgainBtn=document.getElementById("play-again");
const popup=document.getElementById("popup-container");
const notification=document.getElementById("notification-container");
const finalMessage=document.getElementById("final-message");

const figureParts=document.querySelectorAll('.figure-part');

 const words=['application','programming','interface','wizard'];

 const selectedWord=words[Math.floor(Math.random()*words.length)];
 console.log(selectedWord);
//  const correctLetters=[];
 const correctLetters=["w","i","z","a","r","d"];
 const wrongLetters=[];
//Show hidden word
 function displayWord() {
     wordEl.innerHTML=`${selectedWord.split('').map(letter=>`<span class="letter">${correctLetters.includes(letter)? letter :""}</span>`).join("")}`;
     const innerWord=wordEl.innerText.replace(/\n/g, "");
    //  console.log(wordEl.innerText,innerWord);
    if (innerWord===selectedWord) {
        finalMessage.innerHTML=`Congratulations! You won! &#128522;`;
        popup.style.display="flex";
        
    }
     
 }
// Update the Wrong Letters
function updateWrongLettersEl() {
    console.log('Update wrong');
    
}
//  show Notification
function  showNotification() {
    console.log("show Notification");
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 2000);
}

//  Keydown letter press
window.addEventListener("keydown",e=>{
    console.log(e.keyCode);
    if(e.keyCode>=65 && e.keyCode<=90){
        // console.log(123);
        const letter=e.key;
        if(selectedWord.includes(letter)){//letter in selectedWord (true)
            if (!correctLetters.includes(letter)) {//letter is not in correctLetters 
                correctLetters.push(letter)//push letter in correctLetters array
                displayWord();
            }else{
                showNotification();
            }

        }else{
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLettersEl()
                
            }

        }
    }

})
 displayWord();
