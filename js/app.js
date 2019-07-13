let timer;
let timelimit=3;
let counter=1;
let timeOut = false;
startGame(1);


function setup(){
    const $startClock = $("<button class=clock id=start>Start Game</button>");
    const $timerDisplay = $("<div class=clock id=display> Time Remaining:  <span class=clock id=minute></span> || <span class=clock id=second></span> || <span class=clock id=ms></span></div>");
    
    $(`#startButton`).append($startClock);
    $(`#wrapper`).show();
    $('#start').click( function () {
        $startClock.remove();
        parseMap();
        player.populate("buddy",0,23,1);
        updateGameInfo()
        $(`#playerCol`).show();
        $(`#timerDisplay`).append($timerDisplay); 
            
        const timer = setInterval(function(){
            gameClock.changeClock(10);
            counter++;
            if (counter%66===0){
                for(let i=0;i<gameEnemies.length;i++){
                    setTimeout(function(){ 
                        // gameEnemies[i].choosePath();
                        },250);  
                    }
            }
            },12);}    
    );    
}

function startGame(timed){
    timelimit = timed;
    $(`#playerCol`).hide();
    $(`#wrapper`).hide();
    setup();
    createMonsters();
}

const gameClock =  {
    minute: timelimit,
    second: 00,
    ms: 100,
    changeClock: function(){
       this.ms--
       $(`#ms`).text(`${gameClock.ms} `)
       $(`#second`).text(`   ${gameClock.second} `);
       $(`#minute`).text(`   ${gameClock.minute}`); 
       if (this.ms <=0){
       this.ms=100;
       this.second--;
      } else if (this.second<0){
        this.second = 59;
        this.minute--;
      } else if (this.minute<0){
        timeOut = true;
        endGame();
      } else {}
}
}

function updateGameInfo(){
    $(`#playerName`).text(`${player.name}'s Stats`);
    player.addDisplayItems();
    $(`#playerInventory`).text(`${player.inventory} in your bag`);   
}


function endGame(){
    console.log('game over');
    
    //clear map()
    //create modal with current time - 
    //reason for game over 
        if  (timeOut === true){
            clearInterval(timer);
            alert('time has run out');
        } else if (player.hp<0){
            alert('Your player has succumb to their injuries');
        } 
        
};



