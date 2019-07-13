const gameEnemies = [];
const options = ["up", "up","up","right","right", "right", "down","down","left","left", "up","right","down","left"];
const choices = options.slice();
const statArray = [
    {name:"goblin", 
    hp:2, 
    color:"lightgreen",
    cell: 21,
    row:19,
    map:0
    }
    ,
    {name:"hobgoblin",
     hp:3,
     color: "brown",
     cell: 21,
     row:20,
     map:0
    
    },

     {name:"orc",
      hp:5,
      color:"darkgreen",
      cell: 21,
      row:21,
      map:0
    }
    
]

class Enemy {
    constructor(stats) {
        this.name = stats.name;
        this.heart = stats.hp;
        this.armor = 2;
        this.speed = 1;
        this.color = stats.color;
        this.x = stats.cell; 
        this.y = stats.row;
        this.map = stats.map;
        this.origin =[stats.map, stats.row,stats.cell]; // was going to be used for a patrol function;
        this.direction = ""; 
        this.position;
        this.render();
    }
    attack(){
        console.log(`${this.name}attacks!`); 
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
            if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('wall')===true || $(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('enemy')===true){
            } else{
                this.y--}     
        } else if (this.direction === "down" && this.y<rows){
            if( $(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('wall')===true || $(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('enemy')===true) { 
            } else{
                this.y++}       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('wall')===true || $(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('enemy')===true) { 
            } else{
                this.x--}          
        }else if (this.direction === "right" && this.x<columns){
            if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('wall')===true || $(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('enemy')===true){
            } else{
                this.x++}
        }
        
        this.position = [this.map,this.y,this.x]
        return this.position;   
    };
    render(){
        $(`#cell_${this.map}_${this.y}_${this.x}`).addClass(`enemy ${this.name}`);
        $(`#cell_${this.map}_${this.y}_${this.x}`).css("background-color",` ${this.color}`);
    };        
};

// $player.attr('draggable','true'); https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart

function createMonsters(){
    for (let i=0; i<statArray.length; i++){
        const monster = new Enemy(statArray[i]);
        gameEnemies.push(monster);
        console.log(`${statArray[i].name} created!`)
    }
}

