let tileCounter=0;
const mapPack = []
const map1 =[
        // 0 1 2 3 4 5 6 7 8 9 10 11 12
        [  1,1,1,1,1,1,2,2,1,1,1, 1, 1], //0
        [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //1
        [  1,0,0,0,1,0,0,0,1,0,0 ,0 ,1], //2
        [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //3
        [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //4
        [  2,0,0,0,1,0,0,0,2,0,0 ,0 ,1], //5
        [  2,0,0,0,1,0,4,0,1,0,0 ,0 ,1], //6
        [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //7
        [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //8
        [  1,0,0,3,0,0,0,0,0,0,0 ,0 ,1], //9
        [  1,0,0,0,1,0,1,0,1,0,5 ,0 ,1], //10
        [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //11
        [  1,1,1,1,1,1,2,2,1,1,1 ,1 ,1] //12
    ]
const map2 = [
    // 0 1 2 3 4 5 6 7 8 9 10 11 12
    [  1,1,1,1,1,1,1,1,1,1,1, 1, 1], //0
    [  1,0,0,0,0,0,3,0,0,0,0 ,0 ,1], //1
    [  1,0,1,0,1,0,0,0,1,0,0 ,1 ,1], //2
    [  1,0,0,0,0,1,1,1,0,0,0 ,0 ,2], //3
    [  1,0,0,0,1,1,5,1,1,0,0 ,0 ,2], //4
    [  1,0,0,1,1,0,0,0,1,0,0 ,0 ,2], //5
    [  1,0,0,1,1,1,3,1,1,0,0 ,0 ,2], //6
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //7
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //8
    [  1,0,0,4,0,0,0,0,0,0,0 ,0 ,1], //9
    [  1,0,1,0,1,0,1,0,1,0,1 ,0 ,1], //10
    [  1,0,0,0,0,1,1,1,0,0,0 ,0 ,1], //11
    [  1,1,1,0,0,1,2,2,1,1,1 ,1 ,1] //12
];
const map3 = [
    // 0 1 2 3 4 5 6 7 8 9 10 11 12
    [  1,1,1,1,1,1,2,2,1,1,1, 1, 1], //0
    [  1,0,1,1,0,0,0,0,1,1,0 ,0 ,1], //1
    [  1,0,1,1,1,0,0,0,1,1,0 ,0 ,1], //2
    [  1,0,0,0,0,0,0,0,0,0,0 ,0 ,1], //3
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //4
    [  1,1,1,1,1,1,1,1,2,0,0 ,0 ,1], //5
    [  1,1,1,1,1,1,1,1,1,0,0 ,0 ,1], //6
    [  1,0,0,0,1,1,1,1,1,0,0 ,0 ,1], //7
    [  1,0,0,0,1,1,0,0,0,0,0 ,0 ,1], //8
    [  1,0,0,3,1,1,0,0,1,1,1 ,0 ,1], //9
    [  1,0,0,0,1,0,1,0,1,1,1 ,0 ,1], //10
    [  1,0,1,0,0,0,0,0,0,0,0 ,0 ,1], //11
    [  1,1,1,1,1,1,2,2,1,1,1 ,1 ,1] //12
];
//basic gridParser 
// go item by item in the array 
function parseMap (map){
    let R = 0;
    let C = 0;
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
            } else if (map[r][c]===2){
                //door
                cell.addClass('door');
            }else if (map[r][c]===3){
                //tunnel
                cell.addClass('tunnel');
            }else if (map[r][c]===4){
                //treasure
                cell.addClass('arrow-right');
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

parseMap(map1);
// parseMap(map2);
// parseMap(map3);




