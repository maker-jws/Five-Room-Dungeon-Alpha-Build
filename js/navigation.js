const doorLocations =[];
const matchingDoors = [];
const tunnelLocations ={};
const liveMap = [1,1,1];
let currentMap; 

function parseMap(){
    let n=0;
    for (let m=0;m<mapPack.length;m++){
        for(let r=0; r<mapPack[m].length; r++){
            const row = $('<div class=row></div>');
            for(let c=0;c<mapPack[m][r].length;c++){
                let D = `${mapPack[m][r][c]}`
                const cell = $('<div class=cell></div>');
                cell.attr('id',`cell_${m}_${r}_${c}`); //--may not need to identify specific cells with id when you have x/y); 
                cell.attr('map', `map ${m}`);
                cell.attr('y',r);
                cell.attr('x',c);
                if (mapPack[m][r][c]===1){ //wall 
                    cell.addClass('wall');
                } else if (mapPack[m][r][c]===0){ //floor
                    cell.addClass('floor');
                } else if (mapPack[m][r][c]>=10){ //door
                    n++
                    doorLocations.push(["door:",D,r,c,m])
                    cell.addClass('door');
                }else if (mapPack[m][r][c]===3){ //tunnel
                    cell.addClass('tunnel');
                }else if (mapPack[m][r][c]===4){//treasure
                    cell.addClass('treasure');
                } else if (mapPack[m][r][c]===5){ //goal
                    cell.addClass('goal');
                }
                else {cell.text('?')}  // when designing maps put void as a class option
                row.append(cell);      
            }   
        $(`#grid-holder${m}`).append(row);
    }
}
}

 // this loop will only run if doorMatch is set to true - when the player enters a door 
function findMatch(){
}




// console.log(doorLocations);
//     for(let m=1;m<=Object.keys(doorLocations).length;m++){
//        let mostCommon = doorLocations[0];
//        if (doorLocations[m][name]===mostCommon[name]){
//            const newMatch=doorLocation.slice(doorLocations[m])
//             mostCommon = doorLocations[m]
//     }
// } 
// function checkDoor(){
//     const name = 1;
//     const y = 2;
//     const x = 3;
//     const map = 4;
//     const doorA = doorLocations.slice();
    
//              //store the door "number" the player is in as 
// }
// }   
// return doorA;
// }

// for (let i=1;i<Object.keys(doorLocations).length+1;i++){ //search all doors in object
//     //supposed to store player information about door entered 'door A'
//     if(doorA[i][y]===player.y && doorA[i][x]===player.x && doorA[i][map]===player.map){ 
//         // if a door matches player y,x then change doorMatch to true;
        
//         console.log(doorA, 'door a after entering door.');
//         console.log(`You entered door ${doorLocations[i][name]}`);

// for (let m=1;m<Object.keys(doorLocations).length;m++){
//     const doorB = doorLocations[m].slice();
//      console.log(doorB, 'door b before check of map change');
//     if(player.direction === "up" && doorB[name] === doorA[name] && doorB[y] && doorA[map] !== doorB[map]){

//         player.populate(player.name,doorB[map],doorB[y],doorB[x])
       
//      } else if(player.direction === "down" && doorB[name] === doorA[name] && doorA[map] !== doorB[map]){
//         player.populate(player.name,doorB[map],doorB[y],doorB[x])
       
//      } else if(player.direction === "left" && doorB[name] === doorA[name] && doorA[map] !== doorB[map] ){
//         player.populate(player.name,doorB[map],doorB[y],doorB[x])
       
//      } if(player.direction === "right" && doorB[name] === doorA[name] && doorA[map] !== doorB[map]){
//         //if player direction is right AND  door b name is the same as door a name  AND doorB map is not the same as doorA map. 
//         player.populate(player.name,doorB[map],doorB[y],doorB[x])
        
        
//      }
// }   
// console.log(doorA,'a',doorB, 'b');
// doorA.length=0;
// doorB.length=0;
// console.log(doorA,'a',doorB, 'b');