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
    playerAction: function(){
        if($(`#cell_${this.y}_${this.x}`).hasClass('wall')===true) {
            console.log('you inspect the wall');
            console.log()
            
        } else{
        $( "div" ).removeClass( "player" );
        $(`#cell_${this.y}_${this.x}`).addClass('player');}
        }
    ,
    move: function(){
        if (this.direction === "up" && this.y>0 ){
                this.y--
                this.playerAction();
        } else if (this.direction === "down" && this.y<12){
                this.y++
                this.playerAction();
        }else if (this.direction === "left" && this.x>0){
                this.x--
                this.playerAction();
        }else if (this.direction === "right" && this.x<12){
                this.x++
                this.playerAction();} 
    }   
}
player.populate("buddy",2,10);
console.log(player)
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
    player.direction="";
});


 

// const enemy = class {
//     constructor(type, hp ,color) {
//         this.name = type;
//         this.heart = 4;
//         this.armor = 2;
//         this.speed = 1;
//         this.color = "magenta";
//         this.x = 0; 
//         this.y = 0;  
//     }
//     render (){
//         const monster = $(`<div class="cell enemy" id=${this.name}></div>`);
//         monster.attr('x',this.x);
//         monster.attr('y',this.y);
//         console.log(monster);
//         $('#cell_2_10').addClass('enemy');
//         console.log(`${this.name} joined the game`)
//     }

//     attack () {
//         console.log(`${this.name} attacks!`)
//         //create attack object 
//             //if player clicks on cell that is not "floor"
//             //change class to playerattack 
//       }
//     move(directionection){
//         $( "div" ).removeClass( "player" )
        
        
//         $(directionection).addClass("player")

//         //if statements for move 
//         // $("div").click(function location(event){
//         // const loc = event.target
//     } 
// }

 // populates player at specific location // add door coordinates later 

// $('body').on('click',player.move());


// $player.attr('draggable','true'); https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondragstart