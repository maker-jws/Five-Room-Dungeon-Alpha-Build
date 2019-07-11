let tileCounter=0;
const doorLocations ={};
const tunnelLocations ={};
const mapPack = [
    [
    // 0 1 2 3 4 5 6 7 8 9 10 11 12
    [  1,1,1,1,1,1,10,10,1,1,1, 1, 1], //0
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //1
    [  1,0,0,0,1,0,0,0,1,0,0 ,0 ,1], //2
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //3
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //4
    [  11,0,0,0,1,0,0,0,13,0,0 ,0 ,1], //5
    [  11,0,0,0,1,0,4,0,1,0,0 ,0 ,1], //6
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //7
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //8
    [  1,0,0,3,0,0,0,0,0,0,0 ,0 ,1], //9
    [  1,0,0,0,1,0,1,0,1,0,5 ,0 ,1], //10
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //11
    [  1,1,1,1,1,1,12,12,1,1,1 ,1 ,1] //12
], [
    // 0 1 2 3 4 5 6 7 8 9 10 11 12
    [  1,1,1,1,1,1,1,1,1,1,1, 1, 1], //0
    [  1,0,0,0,0,0,3,0,0,0,0 ,0 ,1], //1
    [  1,0,1,0,1,0,0,0,1,0,0 ,1 ,1], //2
    [  1,0,0,0,0,1,1,1,0,0,0 ,0 ,14], //3
    [  1,0,0,0,1,1,5,1,1,0,0 ,0 ,14], //4
    [  1,0,0,1,1,0,0,0,1,0,0 ,0 ,14], //5
    [  1,0,0,1,1,1,3,1,1,0,0 ,0 ,14], //6
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //7
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //8
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //9
    [  1,0,1,0,1,1,1,1,1,0,1 ,0 ,1], //10
    [  1,0,4,0,1,0,0,0,0,0,0 ,0 ,1], //11
    [  1,1,1,1,1,15,15,1,1,1 ,1 ,1] //12
], [
    // 0 1 2 3 4 5 6 7 8 9 10 11 12
    [  1,1,1,1,1,1,16,16,1,1,1, 1, 1], //0
    [  1,0,1,1,0,0,0,0,1,1,0 ,0 ,1], //1
    [  1,0,1,1,1,0,0,0,1,1,0 ,0 ,1], //2
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //3
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //4
    [  1,1,1,1,1,1,1,1,17,0,0 ,0 ,1], //5
    [  1,1,1,1,1,1,1,1,1,0,0 ,0 ,1], //6
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //7
    [  1,0,0,0,1,1,0,0,0,0,0 ,0 ,1], //8
    [  1,0,0,3,1,1,0,0,1,1,1 ,0 ,1], //9
    [  1,0,0,0,1,0,1,0,1,1,1 ,0 ,1], //10
    [  1,0,1,0,0,0,0,0,0,0,0 ,0 ,1], //11
    [  1,1,1,1,1,1,18,18,1,1,1 ,1 ,1] //12
]
]
//basic gridParser 
// go item by item in the array 
function parseMap (map){
    let R = 0;
    let C = 0;
    let n = ``
    for(let r=0; r<map.length; r++){
        R++
        const row = $('<div class=row></div>');
        for(let c=0;c<map[r].length;c++){
            C++
            const cell = $('<div class=cell></div>')
            cell.attr('id',`cell_${r}_${c}`); //--may not need to identify specific cells with id when you have x/y); 
            cell.attr('y',r);
            cell.attr('x',c);
            if (map[r][c]===1){
                //wall 
                cell.addClass('wall');
            } else if (map[r][c]===0){
                //floor
                cell.addClass('floor');
            } else if (map[r][c]>=10){
                let L = `cell_${r}_${c}`
                doorLocations[`${map[r][c]}`]=[r,c,L,name] ;
                cell.addClass('door');

            }else if (map[r][c]===3){
                //tunnel
                // let L = `cell_${r}_${c}`
                // tunnelLocations[`${map[r][c]}`]=[r,c,L] ;
                cell.addClass('tunnel');
            }else if (map[r][c]===4){
                //treasure
                // cell.addClass('arrow-right');
                cell.addClass('treasure');
            } else if (map[r][c]===5){ 
                //goal
                cell.addClass('goal');
            }
            else {cell.text('?')}  // when designing maps put void as a class option
            row.append(cell);      
    }
    $('#grid-holder2').append(row);
}
}


function displayMap(){
    const liveMap = [1,1,1]
    for(let m=0;m<liveMap.length;m++){
        if (liveMap[m]===1){
            const map1 = parseMap(mapPack[m]);
            liveMap[0]=0;
        } else if (liveMap [m]===1){
            const map2 = parseMap(mapPack[m]);
            liveMap[1]=0;
        } else if (liveMap [m]===1){
            const map3 = parseMap(mapPack[m]);
            liveMap[2]=0;
        }
    }
}




