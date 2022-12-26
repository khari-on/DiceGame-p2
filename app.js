const img= ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png',];


const randDiceOne = Math.floor(Math.random()*img.length);
const randDiceTwo = Math.floor(Math.random()*img.length);

console.log(randDiceOne,randDiceTwo)

const imgOne = document.querySelector('.img1')

const imgTwo = document.querySelector('.img2')
const winMsg = document.querySelector('h1');

imgOne.src=img[randDiceOne];
imgTwo.src=img[randDiceTwo];

if(randDiceOne>randDiceTwo){
  winMsg.innerHTML='🚩Player One Wins!';
  winMsg.classList.add('active');
}else if(randDiceOne<randDiceTwo){
    winMsg.innerHTML='Player Tw0 Wins!🏳‍🌈';
  winMsg.classList.add('player2');
}else{
    winMsg.innerHTML=' 🏳 Draw 🏳';
    winMsg.classList.add('Draw');

}
