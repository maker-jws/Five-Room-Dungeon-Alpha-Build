
const player = {
    name: "",
    torch: 5,
    heart: 4,
    armor: 3,
    speed: 1,
    color: "red",
    class: "player",
    x: 0, 
    y: 0,
    direction: "",
    checkHealth: function (){

    },
    populate: function(alias, r, c){ 
        this.name = alias;
        this.y = r;
        this.x = c;
        // const playerDiv = $(`<div class="player" id=${alias} y=${this.y} x=${this.x}></div>`); // player
        $(`#cell_${r}_${c}`).addClass('player');
        console.log(`${this.name} joined the game`)
    },
    render(){
        $( "div" ).removeClass( "player" );
        if(!$(`#cell_${this.y}_${this.x}`).hasClass('wall')){
            $(`#cell_${this.y}_${this.x}`).addClass('player');
            console.log(this.y,this.x);
        } else {
            $(`#cell_${this.y+1}_${this.x+1}`).addClass('player')
        }  
    },
    
    move: function(){
        if (this.direction === "up" && this.y>0 ){   
            if($(`#cell_${this.y-1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.y--    
            }     
        } else if (this.direction === "down" && this.y<12){
            if($(`#cell_${this.y+1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.y++    
            }       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.y}_${this.x-1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.x--    
            }          
        }else if (this.direction === "right" && this.x<12){
            if($(`#cell_${this.y}_${this.x+1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.x++    
                
            }    
        }

        //interrupt with options for addInventory or moveMap or Move tunnel 

        this.render();
        return playerPosition = [player.y,player.x] 
    }   
}

//listener for player
$('body').keydown(function(e){
    const direction = event.which;
    if (direction === 87){
       player.direction="up"; 
    } else if (direction === 83) {
        player.direction="down"; 
    } else if (direction === 65) {
        player.direction="left"; 
    } else if (direction === 68) {
        player.direction="right"; 
    } else {
    }
    player.move();
});