// Prendi tutti gli elementi necessari dal DOM

const button = document.getElementById('button');
const grid = document.getElementById('grid');
const scorePlaceHolder = document.getElementById('score')







// Definisco gli elementi

const row = 10;
const column = 10;
const totalCells = column * row;
const bombNumber = 16;
let score = 0;
let bombs;

let bombed = false;





// ! Funzioni ----------------------------------------------------------------------

const createCell = () => {

    const cell = document.createElement('div');
    cell.className = 'cell';

    return cell;
}


const bomb = () => {

    let bombList = [];
    while(bombList.length <= bombNumber){
        let random;

        do {
            random = Math.floor(Math.random() * totalCells) + 1;

        } while(bombList.includes(random));
        bombList.push(random);
    }

    bombs = bombList;

   
}


const onCellClick = (cell) => {
    


    if (cell.classList.contains('bombed')) {
        location.reload();
    }



    if (cell.classList.contains('clicked')) {
        return;
    } 
    else {
        cell.classList.add('clicked')
        score += 1;
        scorePlaceHolder.innerText = score;
        console.log(cell.innerText)
    }

        
}

// ! ---------------------------------------------------------------------------------

// Al click del bottone genero la griglia

button.addEventListener('click', function(){
    

    for (let i = 0; i < totalCells; i++) {

        const cell = createCell();
        cell.innerText = i + 1;

        bomb();
        
        if (bombs.includes(i)) {
            bombed = true;
        }

        if (bombed === true) {
            cell.classList.add('bombed')
            bombed = false;
        }

        cell.addEventListener('click', function(){
            onCellClick(cell);
        }) 

        grid.appendChild(cell);
    }
})