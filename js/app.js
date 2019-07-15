let timer;
let timelimit;
let counter=10;
let timeOut = false;
let monsterInterval =200;
  
$(`.wrapper`).hide();

startGame(5);

function setup(){
    const $startClockButton = $("<button class=clock id=start>Start Game</button>");
    const $timerDisplay = $("<div class=clock id=display> Time Remaining:  <span class=clock id=minute></span> || <span class=clock id=second></span></div>"); //|| <span class=clock id=ms></span>
    
    $(`#startButton`).append($startClockButton);                        
    $(`.wrapper`).show();
    $('#start').click( function () {
        $startClockButton.remove(); 
        $('#instructions').remove();                                               
        parseMap();
        updateGameInfo()
        createMonsters(1) 
        
        $(`#playerCol`).show();
        $(`#timerDisplay`).append($timerDisplay);    
    });
}
function startGame(timed){
    timelimit = timed;
    $(`#playerCol`).hide();
    player.populate("buddy",0,23,1);
    setup();
    const timer = setInterval(function(){
        gameClock.changeClock();
        enemyBehavior();
        endGame();
        counter++;    
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
       setTimeout(player.interact,10); //updates interaction 1/sec
       setTimeout(checkEnemyDistance,monsterInterval); 
       setTimeout(updateGameInfo,500);
      } else if (this.second<=0){
        this.second = 59;
        this.minute--;
        createMonsters(1)
      } else if (this.minute<0){
        timeOut = true;
      } else {}
}
}
function updateGameInfo(){
    $(`#playerName`).text(`${player.name}'s Stats`);
    player.addDisplayItems(); 
    
}
function endGame(){
    if (player.heart<=0 || player.torch<=0 || timeOut === true){
        console.log('game over');
        $(`#grid-holder0`).hide
        if  (timeOut=true){
            clearInterval(timer);
            alert('time has run out');
            !timeOut;
        } else if (player.hp<0){
            alert('Your player has succumb to their injuries');
        } 
        alert("Your time in the dungeon has ended");
        location.reload();
    }        
};
function enemyBehavior(){   
    
    if (counter%monsterInterval===0){                                 
        for(let i=0;i<gameEnemies.length;i++){
            setTimeout(function(){ 
                setTimeout(checkEnemyDistance);
                gameEnemies[i].choosePath();
                },10);  
            }
    }
}        
function attackRoll(dice){
    let total=0;
    for(let i=0;i<3;i++){
        const roll = Math.floor(Math.random()*dice)+1
        total=total+roll;
    }
    return total;
}
function battle(attacker, attacked,mod="0"){
    console.log(`${attacker} moves to attack ${attacked}`)
    let attackerRolled = attackRoll(6,mod)
    let attackedRolled = attackRoll(6,mod)
    console.log(attackerRolled, "<<attacker",attackedRoller, "<<attacked");  
    if (attackerRolled>=attackedRolled){
        attacked.heart--;
    }
}

//DIAGNOSTIC CLICK EVENT
$('body').click(function(){
    console.log(event.target)
});

