let timer;
let counter=1;
let timeOut = false;


const gameClock =  {
    minute: 0,
    second: 0,
    ms: 0,
    changeClock: function(end){
       this.ms++
    //    $(`#ms`).text(` milliseconds: ${gameClock.ms} `)
       $(`#second`).text(`\t seconds: ${gameClock.second} `);
       $(`#minute`).text(`\t minutes: ${gameClock.minute}`); 
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
    $(`#playerCol`).hide();
    $(`#wrapper`).hide();
    setup();
    createMonsters();
}

function displayPlayerInfo(){
    $(`#playerName`).text(`${player.name}'s Stats`);
    player.displayItems();
    $(`#playerInventory`).text(`${player.inventory} in your bag`);   
}

function setup(){
    const $startClock = $("<button class=clock id=start>Start Game</button>");
    const $timerDisplay = $("<div class=clock id=display> <span class=clock id=minute> 00 </span> <span class=clock id=second> XX </span></div>");
    $(`#startButton`).append($startClock);
    $(`#wrapper`).show();
    $('#start').click( function () {
        parseMap();
        player.populate("buddy",0,23,1);
        $(`#playerCol`).show();
        $(`#timerDisplay`).append($timerDisplay); 
        displayPlayerInfo()
        $startClock.remove();
        
        const timer = setInterval(function(){
            gameClock.changeClock(99);
            counter++;
            if (counter%66===0){
                for(let i=0;i<gameEnemies.length;i++){
                    setTimeout(function(){ 
                        // gameEnemies[i].choosePath();
                        },30);  
                    }
            }
            },1);}    
    );
    return timer;    
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
