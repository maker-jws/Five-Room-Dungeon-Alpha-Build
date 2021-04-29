const freeSpace = !$("div").hasClass('wall');
const player = {
    name: "",
    torch: 3,
    heart: 4,
    armor: 2,
    speed: 20,
    inventory: [],
    x: 0,
    y: 0,
    map: 0,
    direction: "",
    attackdir: "",
    searching: false,
    checkHealth: function () {
        if (this.health <= 0) {
            endGame();
        }
    },
    populate: function (alias, m, r, c) {
        this.name = alias;
        this.y = r;
        this.x = c;
        this.map = m;
        $(`#cell_${m}_${r}_${c}`).addClass('player');
        console.log(`${this.name} joined the game`);
        console.log(this);
    },
    attack(direction) { //renders an attack in the players current direction(on a delay related tied to player speed )
        const character = this
        this.attackdir == direction;
        if (direction == "up") {
            $(`#cell_${character.map}_${character.y - 1}_${character.x}`).addClass(`playerAttacked`);
            if ($(`#cell_${character.map}_${character.y - 1}_${character.x}`).hasClass('enemy')) {
                console.log('a hit')
            }
        } else if (direction == "down") {
            $(`#cell_${character.map}_${character.y + 1}_${character.x}`).addClass(`playerAttacked`);
            if ($(`#cell_${character.map}_${character.y + 1}_${character.x}`).hasClass('enemy')) {
                console.log('a hit')
            }
        } else if (direction == "left") {
            $(`#cell_${character.map}_${character.y}_${character.x - 1}`).addClass(`playerAttacked`);
            if ($(`#cell_${character.map}_${character.y}_${character.x - 1}`).hasClass('enemy')) {
                console.log('a hit')
            }
        } else if (direction === "right") {
            $(`#cell_${character.map}_${character.y}_${character.x + 1}`).addClass(`playerAttacked`);
            if ($(`#cell_${character.map}_${character.y}_${character.x + 1}`).hasClass('enemy')) {
                console.log('a hit')
            }
        } else { }

        // Clears the class added by player attack
        setTimeout(function () {
            console.log(`${character.name} finishes his attack`);
            $('div').removeClass('playerAttacked');
        }, this.speed * 20);
    },
    render(newClass) {
        let character = this;
        setTimeout(function () { // controls player speed by determining its update 
            $("div").removeClass(newClass);
            if (!$(`#cell_${character.map}_${character.y}_${character.x}`).hasClass('wall')) { //prevents the player 
                //put in for loop based on range if 2 add class to div with x === character.x-2
                $(`#cell_${character.map}_${character.y}_${character.x}`).addClass(newClass);

            } else {
                $(`#cell_${character.map}_${character.y + 1}_${character.x + 1}`).addClass(newClass)
            }
        }, this.speed);

    },
    addDisplayItems() {
        $(`#playerHP`).empty();
        $(`#playerTorch`).empty()
        $(`#playerSpeed`).empty()

        for (let h = 1; h <= this.heart; h++) {
            const heartBox = $(`<div class="cell heartBox" heartNum ="${h}"></div>`)
            $(`#playerHP`).append(heartBox);
        }
        for (let t = 1; t <= this.torch; t++) {
            const torches = $(`<div class="cell torches" torchNum ="${t}"></div>`)
            $(`#playerTorch`).append(torches);
        }
        for (let s = 1; s <= this.speed / 10; s++) {
            const boots = $(`<div class="cell speedBoots" speed ="${s}"></div>`)
            $(`#playerSpeed`).append(boots);
        }
    },
    interact() {
        if ($('.player').hasClass('treasure')) {
            console.log('you find some treasure');
            $(`#gameMessage`).empty();
            $(`#gameMessage`).text(`....you found treasure`);
            addInventoryItem(1);

            player.torch = player.torch + (Math.floor(Math.random() * 3) - 1); //add torch
            $('.player').removeClass('treasure'); // clears the treasure from the board

        } else if ($('.tunnel').hasClass('player')) {
            $(`#gameMessage`).text('...you descend into the tunnel...');
            const oldTunnel = $('.tunnel')[0]['id'];
            const newTunnel = $('.tunnel')[0]['id'];
            $(oldTunnel).removeClass('player');
            player.populate(player.name, player.map, 16, 8);
            //populate player at tunnel that is not player.tunnel
        } else { $(`#gameMessage`).empty() }; // empties the 
        //checktile for monster >> this.attack()
        //checktile for lock
    },
    pathIsClear(direction, y, x) {
        if (this.direction = direction && (!$(this.y + y).hasClass("wall" || "enemy" || "locked") || (this.x + x).hasClass("wall" || "enemy" || "locked"))) {
            return 1;
        }
        return null;
    },
    move: function () { //adjusts 
        if (this.direction === "up" && this.y > 0) {
            if ($(`#cell_${this.map}_${this.y - 1}_${this.x}`).hasClass('wall') === true) {
                console.log('you inspect the wall'); //checkWall()
            } else if ($(`#cell_${this.map}_${this.y - 1}_${this.x}`).hasClass('door') === true) {
                this.y--
                //check if locked
            } else {
                this.y--
            }
        } else if (this.direction === "down" && this.y < rows) {
            if ($(`#cell_${this.map}_${this.y + 1}_${this.x}`).hasClass('wall') === true) {
                console.log('you inspect the wall');
            } else if ($(`#cell_${this.map}_${this.y + 1}_${this.x}`).hasClass('door') === true) {
                this.y++
                //check if locked
            } else {
                this.y++

            }
        } else if (this.direction === "left" && this.x > 0) {
            if ($(`#cell_${this.map}_${this.y}_${this.x - 1}`).hasClass('wall') === true) {
                console.log('you inspect the wall');
            } else if ($(`#cell_${this.map}_${this.y}_${this.x - 1}`).hasClass('door') === true) {
                //check if locked  // 
                this.x--

            }
            else {
                this.x--
            }
        } else if (this.direction === "right" && this.x < columns) {
            if ($(`#cell_${this.map}_${this.y}_${this.x + 1}`).hasClass('wall') === true) {
                console.log('you inspect the wall'); //check
            } else if ($(`#cell_${this.map}_${this.y}_${this.x + 1}`).hasClass('door') === true) {
                this.x++
                //check if locked
            } else {
                this.x++
            }
        }
        // console.log(player.map,player.y,player.x);
        this.render('player');
    }
}

// requires #playerInventory Id. 
function addInventoryItem(num) {
    $('#playerInventory').empty();
    // console.log(player.inventory)
    function randomItem() {
        for (let i = 0; i < num; i++) {
            const newItem = randomTreasure.splice(Math.floor(Math.random() * randomTreasure.length - 1), 1);
            player.inventory.push(newItem);
            // console.log(player.inventory);
        }
    }
    randomItem();
    // else (player.inventory.push("The Dungeon has been sacked"))
    $(`#playerInventory`).empty()
    for (let i = 0; i < player.inventory.length; i++) {
        const dispItem = $(`<button class=playerItem id=${i}></button>`)
        dispItem.text(player.inventory[i])
        $('#playerInventory').append(dispItem);
    }
}

//listener for player
$('body').keypress(function (e) {      //controls player movement & listens for interact keys: [f q]
    const keyed = e.which;
    if (keyed === 119) {
        player.direction = "up";
        player.move();
    } else if (keyed === 115) {
        player.direction = "down";
        player.move();
    } else if (keyed === 97) {
        player.direction = "left";
        player.move();
    } else if (keyed === 100) {
        player.direction = "right";
        player.move();
    }
});

$('body').keydown(function (e) {  //controls player attack
    const keyed = e.which;
    // console.log(event.which)
    if (keyed === 38) {
        player.attack("up");
    } else if (keyed === 40) {
        player.attack("down")
    } else if (keyed === 37) {
        player.attack("left");
    } else if (keyed === 39) {
        player.attack("right");
    } else { }

});

$('#playerInventory').click(function (e) {
    const chooser = Math.floor(Math.random() * 20) + 1
    if (chooser > 0 && chooser <= 5) {
        gameClock.second += 20;
    } else if (chooser > 5 && chooser < 10) {
        player.torch++
    } else if (chooser >= 10 && chooser < 15) {
        player.speed += 10;
    } else if (chooser >= 15) {
        player.heart++
    }
    e.target.remove();
});

