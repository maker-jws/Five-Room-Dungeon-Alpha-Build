
const player = {
    name: "",
    torch: 5,
    heart: 4,
    armor: 3,
    speed: 1,
    x: 0, 
    y: 0,
    map: 0,
    direction: "",
    checkHealth: function (){
    },
    populate: function(alias, m, r, c){ 
        this.name = alias;
        this.y = r;
        this.x = c;
        this.map = m;
        $(`#cell_${m}_${r}_${c}`).addClass('player');
        console.log(`${this.name} joined the game`);
        console.log(this);
    },
    render(){
        $( "div" ).removeClass( "player" );
        if(!$(`#cell_${this.map}_${this.y}_${this.x}`).hasClass('wall')){
            $(`#cell_${this.map}_${this.y}_${this.x}`).addClass('player');
        } else {
            $(`#cell_${this.map}_${this.y+1}_${this.x+1}`).addClass('player')
        }  
    },
    move: function(){
        if (this.direction === "up" && this.y>0 ){   
            if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('door')===true){
                this.y--
                findMatch();    
            } else{
                this.y--    
            }     
        } else if (this.direction === "down" && this.y<12){
            if($(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else if($(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('door')===true){
                this.y++ 
                findMatch();
            } else{
                this.y++    
            }       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else if($(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('door')===true){
                this.x--
                findMatch();
            }
            else{
                this.x--    
            }          
        }else if (this.direction === "right" && this.x<12){
            if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            }else if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('door')===true){
                this.x++ 
                findMatch();
            } else{
                this.x++    
                
            }    
        }

       
        console.log(player.map,player.y,player.x);
        this.render();
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