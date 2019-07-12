let timer;
let counter=1;
let timeOut = false;

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
        timeOut = true;
        endGame();
      } else {}
}
}
function startGame(){
    const $startClock = $("<button class=clock id=start>Start Game</button>");
    const $timerDisplay = $("<div class=clock id=display> <span class=clock id=minute> 00 </span> <span class=clock id=second> XX </span> <span class=clock id=ms >XX</span></div>");
    $(`#grid-holder2`).append($startClock);
    $('#start').click( function () {
        parseMap();
        player.populate("buddy",0,6,1);  
        $startClock.remove();
        $(`#timerDisplay`).append($timerDisplay)
        const timer = setInterval(function(){
            gameClock.changeClock(99);
            counter++;
            //controls monster movement 
            if (counter%300===0){
                for(let i=0;i<gameEnemies.length;i++){
                    // gameEnemies[i].choosePath();
                    // console.log(gameEnemies[i].direction);
                } 
                } //if statement for check player alive after an attack is made () 
            },1); 
        }
    );    
}

function endGame(){
    console.log('game over');
    clearInterval(timer);
    //clear map()
    //create modal with current time - 
    //reason for game over 
        if  (timeOut === true){
            alert('time has run out');
        } else if (player.hp<0){
            alert('Your player has succumb to their injuries');
        } 
        
};

startGame();

createMonsters();

