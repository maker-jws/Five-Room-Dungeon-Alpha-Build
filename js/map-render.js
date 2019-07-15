const doorLocations =[];
let rows=0;
let columns=0;
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
                columns++      
            } 
            rows++         
        $(`#grid-holder${m}`).append(row);
    }
}
}
