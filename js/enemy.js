const enemy = class {
    constructor(type, hp ,color,r,c) {
        this.name = type;
        this.heart = hp;
        this.armor = 2;
        this.speed = 1;
        this.color = color;
        this.x = c; 
        this.y = r;
        this.origin =[r,c]; // was going to be used for a patrol function;
        this.direction = ""; 
        this.position;
    }
    populate(x,y){
        $(`#cell_${y}_${x}`).addClass('enemy');
    }
    attack(){
        console.log(`${this.name}attacks!`); 
      }; 
    choosePath(){ 
        const options = ["up","down","left","right"];
        const path = options[Math.floor(Math.random()*options.length)];
        this.direction = path; 
        this.move();
    };
    move(){
        if (this.direction === "up" && this.y>0 ){   
            if($(`#cell_${this.y-1}_${this.x}`).hasClass('wall')===true) {
            } else{
                this.y--}     
        } else if (this.direction === "down" && this.y<12){
            if($(`#cell_${this.y+1}_${this.x}`).hasClass('wall')===true) {
            } else{
                this.y++}       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.y}_${this.x-1}`).hasClass('wall')===true) {
            } else{
                this.x--}          
        }else if (this.direction === "right" && this.x<12){
            if($(`#cell_${this.y}_${this.x+1}`).hasClass('wall')===true) {
            } else{
                this.x++}
        } 
        this.render();
        this.position = [this.y,this.x]
        return this.position;   
    };
    render(){
        $( "div").removeClass("enemy");
        $(`#cell_${this.y}_${this.x}`).addClass("enemy");
    };
         
};

// $player.attr('draggable','true'); https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart