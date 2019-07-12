const gameEnemies = [];

statArray = [
    {name:"goblin", 
    hp:2, 
    color:"lightgreen",
    cell: 5,
    row:1}
    ,
    {name:"hobgoblin",
     hp:3,
     color: "brown",
     cell: 5,
     row:2},

     {name:"orc",
      hp:5,
      color:"darkgreen",
      cell: 5,
      row:3}
    
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
        this.origin =[stats.row,stats.cell]; // was going to be used for a patrol function;
        this.direction = ""; 
        this.position;
        this.render();
    }
    attack(){
        console.log(`${this.name}attacks!`); 
      }; 
    choosePath(){ 
        const options = ["up","down","left","right"];
        const path = options[Math.floor(Math.random()*options.length)]; //path random but if it read through options in order and returned path      
        this.direction = path; 
        this.move();
    };
    move(){
        $(`#cell_${this.y}_${this.x}`).removeClass(`enemy ${this.name}`);
        $(`#cell_${this.y}_${this.x}`).attr('style',"");
        if (this.direction === "up" && this.y>0){   
            if( $(`#cell_${this.y-1}_${this.x}`).hasClass('wall')===true || $(`#cell_${this.y-1}_${this.x}`).hasClass('enemy')===true){
            } else{
                this.y--}     
        } else if (this.direction === "down" && this.y<12 ){
            if( $(`#cell_${this.y+1}_${this.x}`).hasClass('wall')===true || $(`#cell_${this.y+1}_${this.x}`).hasClass('enemy')===true) {
            } else{
                this.y++}       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.y}_${this.x-1}`).hasClass('wall')===true || $(`#cell_${this.y}_${this.x-1}`).hasClass('enemy')===true) {
            } else{
                this.x--}          
        }else if (this.direction === "right" && this.x<12){
            if($(`#cell_${this.y}_${this.x+1}`).hasClass('wall')===true || $(`#cell_${this.y}_${this.x+1}`).hasClass('enemy')===true){
            } else{
                this.x++}
        }
        
        this.render();
        this.position = [this.y,this.x]
        return this.position;   
    };
    render(){
        $(`#cell_${this.y}_${this.x}`).addClass(`enemy ${this.name}`);
        $(`#cell_${this.y}_${this.x}`).css("background-color",` ${this.color}`);
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

