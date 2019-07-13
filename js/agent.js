const player = {
    name: "",
    torch: 3,
    heart: 4,
    armor: 2,
    speed: 60,
    inventory: ["crumbs"],
    x: 0, 
    y: 0,
    map: 0,
    direction: "",
    attackdir: "",
    lastLocation: [undefined,undefined],
    
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
    attack(){
        var character = this;
        if (player.direction==="up"){
            setTimeout(
            function() { 
                $(`#cell_${character.map}_${character.y-1}_${character.x}`).addClass('playerAttacked')
        }, 1);
            
            setTimeout(function() { console.log(`${character.name} finishes his attack`)
            $( "div" ).removeClass( "playerAttacked" );
            }, this.speed*3);
        
            this.render()   
            
        } else if (player.direction==="down"){
            setTimeout(
                function() { 
                    console.log(`${character.name} attacks at his front`);
                    $(`#cell_${character.map}_${character.y+1}_${character.x}`).addClass('playerAttacked')
    
            }, 1);
                setTimeout(function() { console.log(`${character.name} finishes his attack`)
                $( "div" ).removeClass( "playerAttacked" );
                }, this.speed*3);
            this.render()   
        } else if (player.direction==="left"){
            setTimeout(
            function() { 
                console.log(`${character.name} attacks at his front`);
                $(`#cell_${character.map}_${character.y}_${character.x-1}`).addClass('playerAttacked')

        }, 1);
            setTimeout(function() { console.log(`${character.name} finishes his attack`)
            $( "div" ).removeClass( "playerAttacked" );
            }, this.speed*3);
            this.render()   
        } else if (player.direction==="right"){
            setTimeout(
                function() { 
                    console.log(`${character.name} attacks at his front`);
                    $(`#cell_${character.map}_${character.y}_${character.x+1}`).addClass('playerAttacked')
    
            }, 1);
                setTimeout(function() { console.log(`${character.name} finishes his attack`)
                $( "div" ).removeClass( "playerAttacked" );
                }, this.speed*3);
            this.render()   
        } else {console.log(`${this.name} attacks`);}   
    },
    render(){
        let character=this
        setTimeout(function(){
            $( "div" ).removeClass( "player" );
            if(!$(`#cell_${character.map}_${character.y}_${character.x}`).hasClass('wall')){
                $(`#cell_${character.map}_${character.y}_${character.x}`).addClass('player');
            } else {
                $(`#cell_${character.map}_${character.y+1}_${character.x+1}`).addClass('player')
            } 
        }, this.speed);
         
    },
    addDisplayItems(){
        for (let h=1;h<=this.heart;h++){
            const heartBox = $(`<div class="cell heartBox" heartNum ="${h}"></div>`)
            $(`#playerHP`).append(heartBox); 
        }
        for (let t=1;t<=this.torch;t++){
            const torches = $(`<div class="cell torches" torchNum ="${t}"></div>`)
            $(`#playerTorch`).append(torches); 
        }
    },
    interact(){

    },
    move: function(){
        if (this.direction === "up" && this.y>0 ){   
            if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('door')===true){
                this.y--
                //check if locked
            } else{
                this.y--    
            }     
        } else if (this.direction === "down" && this.y<rows){
            if($(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else if($(`#cell_${this.map}_${this.y+1}_${this.x}`).hasClass('door')===true){
                this.y++ 
                //check if locked
            } else{
                this.y++    
            }       
        }else if (this.direction === "left" && this.x>0){
            if($(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            } else if($(`#cell_${this.map}_${this.y}_${this.x-1}`).hasClass('door')===true){
                this.x--
                //check if locked
            }
            else{
                this.x--    
            }          
        }else if (this.direction === "right" && this.x<columns){
            if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('wall')===true) {
                console.log('you inspect the wall');
            }else if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('door')===true){
                this.x++ 
                //check if locked
            } else{
                this.x++    
                
            }    
        }
        console.log(player.map,player.y,player.x);
        this.render();
    }   
}

//listener for player
$('body').keypress(function(e){
    const keyed = event.which;
    console.log(event.which)
    if (keyed === 119){
       player.direction="up";
       player.move(); 
    } else if (keyed === 115) {
        player.direction="down"; 
        player.move();
    } else if (keyed === 97) {
        player.direction="left";
        player.move(); 
    } else if (keyed === 100) {
        player.direction="right";
        player.move();
    } else if (keyed === 102 ||  keyed === 113 ) {
        player.attack();
    } else {}
    
});