const gameEnemies = [];
const options = ["up", "up","up","right","right", "right", "down","down","left","left", "up","right","down","left"];
const choices = options.slice();
const statArray = [
    {name:"goblin", 
    hp:2, 
    color:"lightgreen",
    cell: 20,
    row: 20,
    map:0
    }
    ,
    {name:"hobgoblin",
     hp:3,
     color: "brown",
     cell: 10,
     row:6,
     map:0
    
    },

     {name:"orc",
      hp:5,
      color:"darkgreen",
      cell: 18,
      row: 6,
      map:0
    },
    
    {name:"ooze",
    hp:5,
    color:"darkblue",
    cell: 22,
    row: 18,
    map:0
  }
]

class Enemy {
    constructor(stats) {
        this.name = stats.name;
        this.heart = stats.hp;
        this.armor = 2;
        this.speed = 20;
        this.color = stats.color;
        this.x = stats.cell; 
        this.y = stats.row;
        this.map = stats.map;
        this.origin =[stats.map, stats.row,stats.cell]; // was going to be used for a patrol function;
        this.direction = "";
        this.attackdir = ""; 
        this.distance;
        this.render();
    }
    attack(direction){
        console.log(`${this.name} attacks ${player.name}!`);
        this.attackdir = direction; 
        console.log('distance>>>',this.distance)
        console.log('attackDir>>>',this.attackdir);     
        //trigger Battle Calculation
        setTimeout(function(){
            //setups the direction of the attack and adds class 
        if (this.attackdir === "up"){
            console.log('this is triggering')
            $('div.player').css("background-color","red");  
            this.attackdir=""  
        } else if (this.attackdir === "down"){
            $('div.player')[0].addClass("enemyAttacked")
            this.attackdir=""
        } else if(this.attackdir === "left"){
            $('div.player')[0].addClass("enemyAttacked")
            this.attackdir=""
        } else if(this.attackdir === "right"){
            $('div.player')[0].addClass("enemyAttacked")
            this.attackdir=""
        } 
        
        }, this.speed);       
        // clears attack tiles
        setTimeout(function() { console.log(`${this.name} finishes his attack`)
        $( "div" ).removeClass( "enemyAttacked" );
        
        }, this.speed*20); 
        
    };

    choosePath(){ 
            const path = options[Math.floor(Math.random()*options.length)]; //path random but if it read through options in order and returned path      
            this.direction = path;
            this.move();
            this.render();
    }
    move(){
        $(`#cell_${this.map}_${this.y}_${this.x}`).removeClass(`enemy ${this.name}`);
        $(`#cell_${this.map}_${this.y}_${this.x}`).attr('style',"");
        
        if (this.direction === "up" && this.y>0){   
            if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('wall') || $(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('enemy')  || $(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('player')){
            } else{
                this.y--}     
        } else if (this.direction === "down" && this.y<rows){
            if( $(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('wall') || $(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('enemy') || $(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('player')) { 
            } else{
                this.y++}       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('wall') || $(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('enemy') || $(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('player')) { 
            } else{
                this.x--}          
        }else if (this.direction === "right" && this.x<columns){
            if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('wall') || $(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('enemy') || $(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('player')) {
            console.log()
            } else{
                this.x++}
        }
        this.position = [this.map,this.y,this.x]
    };
    render(){
        
            $(`#cell_${this.map}_${this.y}_${this.x}`).addClass(`enemy ${this.name}`);
            $(`#cell_${this.map}_${this.y}_${this.x}`).css("background-color",` ${this.color}`); 
    };        
};
// $player.attr('draggable','true'); https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart
function createMonsters(num){
    for (let i=0; i<statArray.length; i++){
        const monster = new Enemy(statArray[i]);
        gameEnemies.push(monster);
        console.log(`${statArray[i].name} created!`)
    }
}

function checkEnemyDistance(){
    for(let i=0;i<gameEnemies.length;i++){
        const distanceX = player.x-gameEnemies[i]['x'];
        const distanceY = player.y-gameEnemies[i]['y'];
        const vector = [distanceY, distanceX];
        gameEnemies[i]['distance'] = vector; 
        if(vector[0]!==0 && vector[0]>-2 && vector[1]==0 ){  
            gameEnemies[i].attack("up") 
            // console.log(`'distanceX',${distanceX},'distanceY',${distanceY} ,"vector",${vector}, ${gameEnemies[i].name}`)
        }
        // if(distanceX===0 && (distanceY>-2)){  
        //     gameEnemies[i].attack("down") 
        //     // console.log(`'distanceX',${distanceX},'distanceY',${distanceY} ,"vector",${vector}, ${gameEnemies[i].name}`)
        // } 
        }            
}

$('body').click(function(){
    console.log(event.target)
});
   