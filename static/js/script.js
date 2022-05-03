//challenge 1
function ageInDays (){
    var birthYear = prompt('what year were you born');
    var ageInDayss = (2022-birthYear)*365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode('You are'+' ' + ageInDayss + ' ' + 'days of age')
    h3.setAttribute('id','ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h3);

}
function reset (){
    document.getElementById('ageInDays').remove();
}
//challenge 2
function generateCat(){
    var image = document.createElement('img');
    var div =document.getElementById('flex-box-cat');
    image.src = "https://www.animatedimages.org/data/media/209/animated-cat-image-0394.gif";
    div.appendChild(image);
}

//challeng 3
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice', botChoice);
    //alert(botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);

}
function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}
function decideWinner (yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    }
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]){
    if (yourScore===0){
        return{'message': 'you lost!', 'color':'red'};
    }else if (yourScore===0.5){
        return{'message': 'you tied!', 'color': 'yellow'};
    }else{
        return{'message': 'you won', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px '>" + finalMessage['message'] + "</h1"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);  
}

//challenge 4
var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red') {
        buttonsRed();
    }else if (buttonThingy.value === 'green'){
        buttonsGreen();
    }else if (buttonThingy.value ==='reset') {
        buttonColorReset();
    }else if(buttonThingy.value ==='random' ){
        randomColors();
    }
}
function buttonsRed (){
    for ( let i=0; i<all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen (){
    for ( let i=0; i<all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonColorReset (){
    for (i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    
    for(i=0; i<all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
//challenge 5
let blackjackGame = {
    'you': {'scoreSpan':'#your-blackjack-result', 'div':'#your-box','score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div':'#dealer-box','score':0},
   // 'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
};
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']
const hitSound =new Audio('static/sounds/swish.wav');
const cards = new Array('static/images/2.png','static/images/3.png','static/images/4.png','static/images/5.png',
            'static/images/6.png','static/images/7.png','static/images/8.png','static/images/9.png',
            'static/images/10.png','static/images/K.jpg','static/images/J.jpg','static/images/Q.jpg',
            'static/images/A.png')
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit(){
    //let card = randomCard();
   // console.log(card);
   let randomCard = Math.floor(Math.random()*13);;
    showCard(randomCard, YOU);
}

// function randomCard(){
//     let randomIndex = Math.floor(Math.random()*13);
//     return blackjackGame[cards][randomIndex];
// }


function showCard(randomCard, activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = cards[randomCard];
    //cardImage.setAttribute('style', 'height:30px');
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}
function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (i=0; i<yourImages.length; i++){
    yourImages[i].remove()
     }

    for (i=0; i<dealerImages.length; i++){
    dealerImages[i].remove()
    }
     
}

