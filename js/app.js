let timer;
let counter=1;

const gameClock =  {
    minute: 0,
    second: 0,
    ms: 0,
    changeClock: function(end){
       this.ms++
       $(`#ms`).text(` milliseconds: ${gameClock.ms} `)
       $(`#second`).text(`seconds: ${gameClock.second} `);
       $(`#minute`).text(`minutes: ${gameClock.minute}`); 
        if (this.ms >= 100){
       this.ms=0;
       this.second++;
      } else if (this.second>59){
        this.second = 0;
        this.minute++;
      } else if (this.minute>end){
        console.log('game over');
        clearInterval(timer);
        alert('time has run out');
      } else {}
}
}
function startGame(){
    const $startClock = $("<button class=clock id=start>Start Game</button>");
    const $timerDisplay = $("<div class=clock id=display> <span class=clock id=minute> 00 </span> <span class=clock id=second> XX </span> <span class=clock id=ms >XX</span></div>");
    $(`#grid-holder2`).append($startClock);
    $('#start').click( function () {
        $startClock.remove();
           
        $(`#grid-holder2`).append($timerDisplay)
        const timer = setInterval(function(){
            gameClock.changeClock(99);
            counter++;
            if (counter%500===0){
                goblin.choosePath();
            }
            },1);
            return timer;   
        }
    );    
}
startGame(); // put listener on opening page html;
player.populate("buddy",2,10);
const goblin = new enemy("goblin",2,"green",5,3);
let playerPosition = [player.y,player.x]; // currently only printing the value 