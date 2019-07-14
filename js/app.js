let timer;
let timelimit;
let counter=10;
let timeOut = false;
let monsterInterval =500;
let here = $(`div.player`).attr('id');  
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
    return timer;
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

       setTimeout(player.interact,10); //updates interaction 1/sec
       setTimeout(checkEnemyDistance,monsterInterval*6);
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
                setTimeout(checkEnemyDistance);
                gameEnemies[i].choosePath();
                },10);  
            }
    }
}        
function addInventoryItem(){

}

function battle(attacker, attacked){
    console.log(`${attacker} moves to attack ${attacked}`)
}
const checkSquare = {
    target: $('#buddy').hasClass('player'),
    num: 0,
    getSquare(){
        let square = this
        const selected = square.target
        console.log(selected);   
        // const selectedID = $(selected).attr('id');
        // const selectedClass = $(selected).attr('class'); //stores class information  
        
}
};

 // console.log('same row') 
 // console.log('same column') 
 // console.log(vector, `<<monster${i}`);
 // console.log(gameEnemies[i]['distance'], `<<monster${i} distance`);