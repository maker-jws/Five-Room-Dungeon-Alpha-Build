const freeSpace = !$("div").hasClass('wall'); 

const player = {
    name: "",
    torch: 3,
    heart: 4,
    armor: 2,
    speed: 100,
    inventory: ["crumbs", "dog teeth",  "chewing gum(chewed)"],
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
    attack(){ //renders an attack in the players current direction(on a delay related tied to player speed )
        var character = this;
        if (this.attackdir==="up"){ //modify player.direction to attackDir created by attackListener 
            setTimeout(
            function() { 
                $(`#cell_${character.map}_${character.y-1}_${character.x}`).addClass('playerAttacked')
        }, 1);
            
            setTimeout(function() { console.log(`${character.name} finishes his attack`)
            $( "div" ).removeClass( "playerAttacked" );
            }, this.speed*3);
        
            this.render()   
            
        } else if (this.attackdir==="down"){
            setTimeout(
                function() { 
                    console.log(`${character.name} attacks at his front`);
                    $(`#cell_${character.map}_${character.y+1}_${character.x}`).addClass('playerAttacked')
    
            }, 1);
                setTimeout(function() { console.log(`${character.name} finishes his attack`)
                $( "div" ).removeClass( "playerAttacked" );
                }, this.speed*3);
            this.render()   
        } else if (this.attackdir==="left"){
            setTimeout(
            function() { 
                console.log(`${character.name} attacks at his front`);
                $(`#cell_${character.map}_${character.y}_${character.x-1}`).addClass('playerAttacked')

        }, 1);
            setTimeout(function() { console.log(`${character.name} finishes his attack`)
            $( "div" ).removeClass( "playerAttacked" );
            }, this.speed*3);
            this.render()  

        } else if (this.attackdir==="right"){
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
        setTimeout(function(){ // controls player speed by determining its update 
            $( "div" ).removeClass( "player" );
            if(!$(`#cell_${character.map}_${character.y}_${character.x}`).hasClass('wall')){ //prevents the player 
                $(`#cell_${character.map}_${character.y}_${character.x}`).addClass('player');
            } else {
                $(`#cell_${character.map}_${character.y+1}_${character.x+1}`).addClass('player')} 
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
            //checktile for treasure 
            //checktile for monster >> this.attack()
            //checktile for lock
    },
    checkEnemy(){}, //if attackdirection has class Enemy // game.battle.
    checkLock(){}, //if return false (do nothing ie continue movement if true initiate picklock)
    checkWall(){}, //if return false (do nothing ie continue movement if true initiate picklock)
    move: function(){ //adjusts 
        if (this.direction === "up" && this.y>0 ){   
            if($(`#cell_${this.map}_${this.y-1}_${this.x}`).hasClass('wall')===true) {
                console.log('you inspect the wall'); //checkWall()
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
                //check if locked  // 
                this.x--
                
            }
            else{
                this.x--    
            }          
        }else if (this.direction === "right" && this.x<columns){
            if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('wall')===true) {
                console.log('you inspect the wall'); //check
            }else if($(`#cell_${this.map}_${this.y}_${this.x+1}`).hasClass('door')===true){
                this.x++ 
                //check if locked
            } else{
                this.x++    
                
            }    
        }
        // console.log(player.map,player.y,player.x);
        this.render();
    }   
}

//listener for player
$('body').keypress(function(e){      //controls player movement & listens for interact keys: [f q]
    const keyed = event.which;
    // console.log(event.which)
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
    } else if (keyed === 102 ||  keyed === 113 ) { //triggers attack in attack direction
        player.interact();
        console.log(keyed)
        return keyed;
    } else {}
    
});
$('body').keydown(function(e){  //controls player attack
    const keyed = event.which;
    // console.log(event.which)
    if (keyed === 38){
       player.attackdir="up";
       player.attack(); 
    } else if (keyed === 40) {
        player.attackdir="down"; 
        player.attack()
    } else if (keyed === 37) {
        player.attackdir="left";
        player.attack(); 
    } else if (keyed === 39) {
        player.attackdir="right";
        player.attack();
    } else {}
});