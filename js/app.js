let timer;
let timelimit;
let counter=10;
let timeOut = false;
let monsterInterval =300;
$(`#wrapper`).attr('visibility','hidden');
$(`#wrapper`).hide();
startGame(25);

function setup(){
    const $startClockButton = $("<button class=clock id=start>Start Game</button>");
    const $timerDisplay = $("<div class=clock id=display> Time Remaining:  <span class=clock id=minute></span> || <span class=clock id=second></span></div>"); //|| <span class=clock id=ms></span>
    
    $(`#startButton`).append($startClockButton);                        
    $(`#wrapper`).show();
    $('#start').click( function () {
        $startClockButton.remove();                                                
        player.populate("buddy",0,23,1);
        parseMap();
        updateGameInfo() 
        $(`#playerCol`).show();
        $(`#timerDisplay`).append($timerDisplay);    
    });
}

function startGame(timed){
    timelimit = timed;
    $(`#playerCol`).hide();
    setup();
    createMonsters();
    const timer = setInterval(function(){
        gameClock.changeClock(10);
        counter++;
        enemyBehavior();     
        },12); 
}

const gameClock =  {
    minute: timelimit,
    second: 00,
    ms: 100,
    changeClock: function(){
       this.ms--
    //    $(`#ms`).text(`${gameClock.ms} `)
       $(`#second`).text(`   ${gameClock.second} `);
       $(`#minute`).text(`   ${gameClock.minute}`); 
       
       
       if (this.ms <0){
       this.ms=100;
       this.second--;

       setTimeout(player.interact,1); //updates interaction 1/sec
       setTimeout(checkEnemyDistance,1) // checks distance 1/second
       
      } else if (this.second<=0){
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
function enemyBehavior(){
    if (counter%monsterInterval===0){                                 //this could be moved to enemy Behavior
        for(let i=0;i<gameEnemies.length;i++){
            setTimeout(function(){ 
                gameEnemies[i].choosePath();
                },10);  
            }
    }
}
function checkEnemyDistance(){
    for(let i=0;i<gameEnemies.length;i++){
        
        const distanceX = gameEnemies[i]['x']-player.x;
        const distanceY = gameEnemies[i]['y']-player.y;
        const vector = [distanceY, distanceX]
        console.log(vector, `<<monster${i}`);
        if(gameEnemies[i]['x']===player.x){     
        } else if(gameEnemies[i]['y']===player.y){
        }
        }        
}        


function battle(){}
