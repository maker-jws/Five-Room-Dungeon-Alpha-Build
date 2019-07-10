const enemy = class {
    constructor(type, hp ,color, r,c) {
        this.name = type;
        this.heart = hp;
        this.armor = 2;
        this.speed = 1;
        this.color = color;
        this.x = c; 
        this.y = r; 
        this.origin =[r,c];
        this.currentDirection = ""; 
        this.populate();
        this.choosePath();
    }
    populate(){
        const monster = $(`<div class="cell enemy" id=${this.name}></div>`);
        monster.attr('x',this.x);
        monster.attr('y',this.y);
        console.log(monster);
        $(`#cell_${this.y}_${this.x}`).addClass('enemy');
        this.render();
        // return this.choosePath(this.origin[0],this.origin[1])
    }
    attack(){
        console.log(`${this.name}attacks!`);
        //create attack object  
      }; 
    choosePath(){
        const options = ["up","down","left","right"];
        const path = options[Math.floor(Math.random()*options.length)];
        console.log(`I am choosing ${path}`);
        this.currentDirection = path; 
        this.render();  
    };
    move(){

    };
    render(){
        $( "div").removeClass("enemy");
        $(`#cell_${this.y}_${this.x}`).addClass("enemy");
        this.choosePath(); // every time if(gameClock%97===0) it moves it should call 'render' and then choose a new path 
    };
         
}

//type, hp ,color, r,c
// const goblin = new enemy("goblin",2,"green",5,3);
// setTimeout(goblin.choosePath, 1000); 



// $player.attr('draggable','true'); https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart