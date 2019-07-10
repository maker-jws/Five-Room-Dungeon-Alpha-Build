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
    
    populate: function(alias, r, c){
        this.name = alias;
        const $player = $(`<div class="cell player" id=${this.name}></div>`);
        this.y = r;
        this.x = c;
        $player.attr('y', r);
        $player.attr('x', c);
        $(`#cell_${this.y}_${this.x}`).addClass('player');
        console.log(`${this.name} joined the game`)
    },
    
    render(){
        $( "div" ).removeClass( "player" );
        $(`#cell_${this.y}_${this.x}`).addClass('player');
    },
    move: function(){
        if (this.direction === "up" && this.y>0 ){   
            if($(`#cell_${this.y-1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.y--    
                this.render();
            }     
        } else if (this.direction === "down" && this.y<12){
            if($(`#cell_${this.y+1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.y++    
                this.render();
            }       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.y}_${this.x-1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.x--    
                this.render();
            }          
        }else if (this.direction === "right" && this.x<12){
            if($(`#cell_${this.y}_${this.x+1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else{
                this.x++    
                this.render();
            }    
        } 
    }   
}
// player.populate("buddy",2,10);
// console.log(player)

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
        console.log('this is not a direction')
    }
    player.move();
});