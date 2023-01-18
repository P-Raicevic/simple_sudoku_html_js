var board = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
];

var boardReset = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

var hints=0;
var mistakes=0;

boardReset = copy(board);

class Cell{
    constructor(value, posX, posY)
    {
        this.value = value;
        this.candidates = [];
        this.posX = posX;
        this.posY = posY;

        this.add = function(newObject)
        {
            this.candidates.push(newObject);
        }
    }

}

var cell1 = new Cell(0,0,0); var cell2 = new Cell(0,0,1); var cell3 = new Cell(0,0,2);
var cell4 = new Cell(0,0,3); var cell5 = new Cell(0,0,4); var cell6 = new Cell(0,0,5);
var cell7 = new Cell(0,0,6); var cell8 = new Cell(0,0,7); var cell9 = new Cell(0,0,8);
var cell10 = new Cell(0,1,0); var cell11 = new Cell(0,1,1); var cell12 = new Cell(0,1,2);
var cell13 = new Cell(0,1,3); var cell14 = new Cell(0,1,4); var cell15 = new Cell(0,1,5);
var cell16 = new Cell(0,1,6); var cell17 = new Cell(0,1,7); var cell18 = new Cell(0,1,8);
var cell19 = new Cell(0,2,0); var cell20 = new Cell(0,2,1); var cell21 = new Cell(0,2,2);
var cell22 = new Cell(0,2,3); var cell23 = new Cell(0,2,4); var cell24 = new Cell(0,2,5);
var cell25 = new Cell(0,2,6); var cell26 = new Cell(0,2,7); var cell27 = new Cell(0,2,8);
var cell28 = new Cell(0,3,0); var cell29 = new Cell(0,3,1); var cell30 = new Cell(0,3,2);
var cell31 = new Cell(0,3,3); var cell32 = new Cell(0,3,4); var cell33 = new Cell(0,3,5);
var cell34 = new Cell(0,3,6); var cell35 = new Cell(0,3,7); var cell36 = new Cell(0,3,8);
var cell37 = new Cell(0,4,0); var cell38 = new Cell(0,4,1); var cell39 = new Cell(0,4,2);
var cell40 = new Cell(0,4,3); var cell41 = new Cell(0,4,4); var cell42 = new Cell(0,4,5);
var cell43 = new Cell(0,4,6); var cell44 = new Cell(0,4,7); var cell45 = new Cell(0,4,8);
var cell46 = new Cell(0,5,0); var cell47 = new Cell(0,5,1); var cell48 = new Cell(0,5,2);
var cell49 = new Cell(0,5,3); var cell50 = new Cell(0,5,4); var cell51 = new Cell(0,5,5);
var cell52 = new Cell(0,5,6); var cell53 = new Cell(0,5,7); var cell54 = new Cell(0,5,8);
var cell55 = new Cell(0,6,0); var cell56 = new Cell(0,6,1); var cell57 = new Cell(0,6,2);
var cell58 = new Cell(0,6,3); var cell59 = new Cell(0,6,4); var cell60 = new Cell(0,6,5);
var cell61 = new Cell(0,6,6); var cell62 = new Cell(0,6,7); var cell63 = new Cell(0,6,8);
var cell64 = new Cell(0,7,0); var cell65 = new Cell(0,7,1); var cell66 = new Cell(0,7,2);
var cell67 = new Cell(0,7,3); var cell68 = new Cell(0,7,4); var cell69 = new Cell(0,7,5);
var cell70 = new Cell(0,7,6); var cell71 = new Cell(0,7,7); var cell72 = new Cell(0,7,8);
var cell73 = new Cell(0,8,0); var cell74 = new Cell(0,8,1); var cell75 = new Cell(0,8,2);
var cell76 = new Cell(0,8,3); var cell77 = new Cell(0,8,4); var cell78 = new Cell(0,8,5);
var cell79 = new Cell(0,8,6); var cell80 = new Cell(0,8,7); var cell81 = new Cell(0,8,8);

var board1 = [
    [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9],
    [cell10,cell11,cell12,cell13,cell14,cell15,cell16,cell17,cell18],
    [cell19,cell20,cell21,cell22,cell23,cell24,cell25,cell26,cell27],
    [cell28,cell29,cell30,cell31,cell32,cell33,cell34,cell35,cell36],
    [cell37,cell38,cell39,cell40,cell41,cell42,cell43,cell44,cell45],
    [cell46,cell47,cell48,cell49,cell50,cell51,cell52,cell53,cell54],
    [cell55,cell56,cell57,cell58,cell59,cell60,cell61,cell62,cell63],
    [cell64,cell65,cell66,cell67,cell68,cell69,cell70,cell71,cell72],
    [cell73,cell74,cell75,cell76,cell77,cell78,cell79,cell80,cell81]
];

//prints current board in sudoku
function print_board(bo)
{
    for(var i=0;i<9;i++)
    {
        for(var j=0;j<9;j++)
        {
            var x = i*9+j;
            if(bo[i][j].value!=0)
            {
                document.getElementById("cell-"+x).value = bo[i][j].value;
                document.getElementById("cell-"+x).disabled = true;
                document.getElementById("cell-"+x).style.color = "#000000";

            }
            else
            {
                document.getElementById("cell-"+x).value = "";
                document.getElementById("cell-"+x).disabled = false;
                document.getElementById("cell-"+x).style.color = "#0000FF";
            }
        }
    }
}

function arrayToClasses(bo)
{   
    cell1.value = bo[0][0]; cell2.value = bo[0][1]; cell3.value = bo[0][2];
    cell4.value = bo[0][3]; cell5.value = bo[0][4]; cell6.value = bo[0][5];
    cell7.value = bo[0][6]; cell8.value = bo[0][7]; cell9.value = bo[0][8];
    cell10.value = bo[1][0]; cell11.value = bo[1][1]; cell12.value = bo[1][2];
    cell13.value = bo[1][3]; cell14.value = bo[1][4]; cell15.value = bo[1][5];
    cell16.value = bo[1][6]; cell17.value = bo[1][7]; cell18.value = bo[1][8];
    cell19.value = bo[2][0]; cell20.value = bo[2][1]; cell21.value = bo[2][2];
    cell22.value = bo[2][3]; cell23.value = bo[2][4]; cell24.value = bo[2][5];
    cell25.value = bo[2][6]; cell26.value = bo[2][7]; cell27.value = bo[2][8];
    cell28.value = bo[3][0]; cell29.value = bo[3][1]; cell30.value = bo[3][2];
    cell31.value = bo[3][3]; cell32.value = bo[3][4]; cell33.value = bo[3][5];
    cell34.value = bo[3][6]; cell35.value = bo[3][7]; cell36.value = bo[3][8];
    cell37.value = bo[4][0]; cell38.value = bo[4][1]; cell39.value = bo[4][2];
    cell40.value = bo[4][3]; cell41.value = bo[4][4]; cell42.value = bo[4][5];
    cell43.value = bo[4][6]; cell44.value = bo[4][7]; cell45.value = bo[4][8];
    cell46.value = bo[5][0]; cell47.value = bo[5][1]; cell48.value = bo[5][2];
    cell49.value = bo[5][3]; cell50.value = bo[5][4]; cell51.value = bo[5][5];
    cell52.value = bo[5][6]; cell53.value = bo[5][7]; cell54.value = bo[5][8];
    cell55.value = bo[6][0]; cell56.value = bo[6][1]; cell57.value = bo[6][2];
    cell58.value = bo[6][3]; cell59.value = bo[6][4]; cell60.value = bo[6][5];
    cell61.value = bo[6][6]; cell62.value = bo[6][7]; cell63.value = bo[6][8];
    cell64.value = bo[7][0]; cell65.value = bo[7][1]; cell66.value = bo[7][2];
    cell67.value = bo[7][3]; cell68.value = bo[7][4]; cell69.value = bo[7][5];
    cell70.value = bo[7][6]; cell71.value = bo[7][7]; cell72.value = bo[7][8];
    cell73.value = bo[8][0]; cell74.value = bo[8][1]; cell75.value = bo[8][2];
    cell76.value = bo[8][3]; cell77.value = bo[8][4]; cell78.value = bo[8][5];
    cell79.value = bo[8][6]; cell80.value = bo[8][7]; cell81.value = bo[8][8];
}

//finds first empty cell
function find_empty(bo)
{
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
            if(bo[i][j].value==0)
            {
                var found = [i,j];
                return found;
            }
    return null;
}

//checks if number inserted in some row and column is valid
function valid(bo, num, row, col)
{
    for(var i=0;i<9;i++)
        if(bo[row][i].value == num && col!=i)
            return false;

    for(var i=0;i<9;i++)
        if(bo[i][col].value == num && row!=i)
            return false;

    var box_x = Math.floor(col/3);
    var box_y = Math.floor(row/3);

    for(var i=box_y*3;i<box_y*3+3;i++)
        for(var j=box_x*3;j<box_x*3+3;j++)
            if(bo[i][j].value==num && i!=row && j!=col)
                return false;
    return true;
}

//solves given sudoku
function solve(bo)
{
    var find = find_empty(bo);

    if(!find)
        return true;

    var row = find[0];
    var col = find[1];

    for(var i=1;i<10;i++)
        if(valid(bo, i, row, col))
        {
            bo[row][col].value = i;

            if(solve(bo))
                return true;

            bo[row][col].value = 0;
        }
    return false;
}

//calls function solve when button is pressed
function solveButton()
{
    arrayToClasses(board);
    solve(board1);
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            if(board1[i][j].value == 0 || board1[i][j].value!=board[i][j])
            {
                var x = i*9+j;
                document.getElementById("cell-"+x).value=board1[i][j].value;
                document.getElementById("cell-"+x).style.color = "#0000FF";
            }
        }
}

//copies given double array to other
function copy(board)
{
    var board2=[
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ];
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            board2[i][j] = board[i][j];
        }
    return board2;
}

//makes a "shadow" effect of row, column and square of selected cell
function shadow(row, col)
{

    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            var x = i*9+j;
            document.getElementById("cell-"+x).style.backgroundColor = "#FFFFFF";
        }

    if(board1[row][col].value != 0)
    {
        for(var i=0;i<9;i++)
            for(var j=0;j<9;j++)
            {
                if(board1[i][j].value == board1[row][col].value)
                {
                    var x = i*9+j;
                    document.getElementById("cell-"+x).style.backgroundColor = "#E0FFFF";
                }
            }
    }
    
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            if(i==row || j==col)
            {
                var x = i*9+j;
                document.getElementById("cell-"+x).style.backgroundColor = "rgb(224, 224, 224)";
            }
        }

     var box_x = Math.floor(col/3);
     var box_y = Math.floor(row/3);

     for(var i=box_y*3;i<box_y*3+3;i++)
         for(var j=box_x*3;j<box_x*3+3;j++)
         {
            var x = i*9+j;
            document.getElementById("cell-"+x).style.backgroundColor = "rgb(224, 224, 224)";
         }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//checks is value of selected cell is valid
async function check1(event, pX, pY)
{
    var x = pX*9+pY;
    if(event.keyCode == 13)
    {
        var check = document.getElementById("cell-"+x).value;
        if(valid(board1, check, pX, pY))
        {
            board1[pX][pY].value = check;
            shadow(pX,pY);
            updateCandidates(pX, pY);
            deleteCandidates(pX, pY);
            document.getElementById("cell-"+x).style.color = "#008000";
            await sleep(1500);
            document.getElementById("cell-"+x).style.color = "#000000";
            if(find_empty(board)==null)
            {
                //win();
            }
        }
        else
        {

            document.getElementById("cell-"+x).style.color = "#DC143C";
            mistakes++;
            document.getElementById("mistakes").innerText = "Mistakes: "+mistakes;
            await sleep(1500);
            document.getElementById("cell-"+x).style.color = "#0000FF";                    
        }
    }
}

//alerts player when the puzzle is completed
function win()
{
    alert("You completed this puzzle! Time: " + document.getElementById("timer").innerHTML);
    mistakes=0;
    hints=0;
    document.getElementById("mistakes").innerHTML = "Mistakes: 0";
    document.getElementById("hints").innerHTML = "Hints: 0";
    elapsedTime = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    toggleTimer();
    //generate();
}

//resets current board
function reset()
{
    board = copy(boardReset);
    arrayToClasses(board);
    print_board(board1);
    mistakes=0;
    hints=0;
    document.getElementById("mistakes").innerHTML = "Mistakes: 0";
    document.getElementById("hints").innerHTML = "Hints: 0";

    if(timerRunning == false)
    {
        elapsedTime = 0;
        document.getElementById("timer").innerHTML = "00:00:00";
        toggleTimer();
    }
    else
    {
        elapsedTime = 0;
        document.getElementById("timer").innerHTML = "00:00:00";
    }
}

var elapsedTime = 0;
var timerRunning = true;
startTimer(0);

function startTimer(initialTime)
{
    elapsedTime = initialTime - 1;
    advanceTimer();
};

function advanceTimer()
{
    if(timerRunning == true)
    {
        elapsedTime++;
    };
    document.getElementById("timer").innerHTML = formatTime(elapsedTime);
    setTimeout(advanceTimer, 1000);
};

function formatTime(seconds)
{
    var hours = "00" + Math.floor(seconds/3600);
    hours = hours.substr(hours.length - 2, 2);
    var remaining = seconds - (hours * 3600);
    var minutes = "00" + Math.floor(remaining/60);
    minutes = minutes.substr(minutes.length - 2, 2);
    var seconds = "00" + (remaining - (minutes * 60));
    seconds = seconds.substr(seconds.length - 2, 2);
    var formatedTime = hours + ":" + minutes + ":" + seconds;
    return formatedTime;
};

function toggleTimer()
{
    var x = document.getElementById("pausedScreen");
    var table = document.getElementById("table");

    if(timerRunning == true)
    {
        timerRunning = false;
        document.getElementById("timerButton").innerHTML = "Start";
        x.style.display = "block";
        table.style.display = "none";
    }
    else
    {
        timerRunning = true;
        document.getElementById("timerButton").innerHTML = "Pause ";
        x.style.display = "none";
        table.style.display = "block";
    }
};

//generates new sudoku puzzle
function generate()
{
    var request = new XMLHttpRequest()

    var difficulty = 'https://sugoku.herokuapp.com/board?difficulty=easy'; 

    if(document.getElementById("difficultydd").value == "easy")
    {
        difficulty = 'https://sugoku.herokuapp.com/board?difficulty=easy';
    }
    else if(document.getElementById("difficultydd").value == "medium")
    {
        difficulty = 'https://sugoku.herokuapp.com/board?difficulty=medium';
    }
    else if(document.getElementById("difficultydd").value == "hard")
    {
        difficulty = 'https://sugoku.herokuapp.com/board?difficulty=hard';
    }
    else if(document.getElementById("difficultydd").value == "random")
    {
        difficulty = 'https://sugoku.herokuapp.com/board?difficulty=random';
    }
    
    request.open('GET', difficulty, true)
    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
    
      if (request.status >= 200 && request.status < 400) {
        board=(data.board);
        boardReset = copy(board);
        arrayToClasses(board);
        print_board(board1);
        mistakes=0;
        hints=0;
        document.getElementById("mistakes").innerHTML = "Mistakes: 0";
        document.getElementById("hints").innerHTML = "Hints: 0";
        findCandidates();
      } else {
        console.log('error')
      }
    }
    request.send();

    if(timerRunning == false)
    {
        elapsedTime = 0;
        document.getElementById("timer").innerHTML = "00:00:00";
        toggleTimer();
    }
    else
    {
        elapsedTime = 0;
        document.getElementById("timer").innerHTML = "00:00:00";
    }
}

function findCandidates()
{
     for(var i=0;i<9;i++)
         for(var j=0;j<9;j++)
            for(var k=1;k<=9;k++)
            {
                if(valid(board1, k, i, j) && !board1[i][j].candidates.includes(k) && board1[i][j].value==0)
                {
                    board1[i][j].candidates.push(k);
                }
            }
}

function updateCandidates(row, col)
{
    for(var i=0;i<9;i++)
        for(var k=1;k<=9;k++)
            if(col!=i && board1[row][i].value==0 && !valid(board1, k, row, i) && board1[row][i].candidates.includes(k))
            {
                var index = board1[row][i].candidates.indexOf(k);
                board1[row][i].candidates.splice(index,1);
            }

    for(var i=0;i<9;i++)
        for(var k=1;k<=9;k++)
            if(row!=i && board1[i][col].value==0 && !valid(board1, k, i, col) && board1[i][col].candidates.includes(k))
            {
                var index = board1[i][col].candidates.indexOf(k);
                board1[i][col].candidates.splice(index,1);
            }

    var box_x = Math.floor(col/3);
    var box_y = Math.floor(row/3);

    for(var i=box_y*3;i<box_y*3+3;i++)
        for(var j=box_x*3;j<box_x*3+3;j++)
            for(var k=1;k<=9;k++)
                if(row!=i && col!=j && board1[i][j].value==0 && !valid(board1, k, i, j) 
                && board1[i][j].candidates.includes(k))
                {
                    var index = board1[i][j].candidates.indexOf(k);
                    board1[i][j].candidates.splice(index,1);
                }
}

function deleteCandidates(row, col)
{
    while(board1[row][col].candidates.length > 0)
    {
        console.log(board1[row][col].candidates.length);
        board1[row][col].candidates.pop();
    }
}

function oneCandidate()
{
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
            if(board1[i][j].candidates.length == 1)
            {
                var x = i*9+j;
                board1[i][j].value = board1[i][j].candidates.pop();
                document.getElementById("cell-"+x).value = board1[i][j].value;
                updateCandidates(i,j);
                return true;
            }
    return false;
}

function foundNakedPair()
{
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
            if(board1[i][j].candidates.length == 2)
            {
                for(var k=j;k<9;k++)
                    if(j!=k && board1[i][k].candidates.length==2 && 
                        board1[i][k].candidates[0] == board1[i][j].candidates[0] &&
                        board1[i][k].candidates[1] == board1[i][j].candidates[1])
                        {
                        console.log(i + " " + j + " " + i + " " + k);
                        var found = [i,j,i,k];
                        return found;
                        }

                for(var k=i;k<9;k++)
                    if(i!=k && board1[k][j].candidates.length==2 && 
                        board1[k][j].candidates[0] == board1[i][j].candidates[0] &&
                        board1[k][j].candidates[1] == board1[i][j].candidates[1])
                        {
                            console.log(i + " " + j + " " + k + " " + j);
                            var found = [i,j,k,j];
                            return found;
                        }

                var box_x = Math.floor(j/3);
                var box_y = Math.floor(i/3);

                for(var k=box_y*3;k<box_y*3+3;k++)
                    for(var n=box_x*3;n<box_x*3+3;n++)
                        if(i!=k && j!=n && board1[k][n].candidates.length==2 && 
                            board1[k][n].candidates[0] == board1[i][j].candidates[0] &&
                            board1[k][n].candidates[1] == board1[i][j].candidates[1])
                            {
                                console.log(i + " " + j + " " + k + " " + n);
                                var found = [i,j,k,n];
                                return found;
                            }
            }
    return null;
}

function nakedPair()
{
    var find = foundNakedPair(board1);

    if(!find)
        return null;

    var row1 = find[0];
    var col1 = find[1];
    var row2 = find[2];
    var col2 = find[3];

    var candidate1 = board1[row1][col1].candidates[0];
    var candidate2 = board1[row1][col1].candidates[1];

    var counter1 = 9;
    var counter2 = 0;
    
    if(row1 == row2)
    {
        for(var i=0;i<9;i++)
        {
            if(i!=col1 && i!=col2)
            {
                var index1 = board1[row1][i].candidates.indexOf(candidate1);
                if(index1!=-1)
                {
                    board1[row1][i].candidates.splice(index1,1);
                }
                var index2 = board1[row1][i].candidates.indexOf(candidate2);
                if(index2!=-1)
                {
                    board1[row1][i].candidates.splice(index2,1);
                }
                if(index1==-1 && index2==-1)
                {
                    counter2++;
                }
            }
        }
        if(Math.floor(row1/3) == Math.floor(row2/3) && Math.floor(col1/3) == Math.floor(col2/3))
        {
            counter1=18;
            var box_x = Math.floor(col1/3);
            var box_y = Math.floor(row1/3);

            for(var k=box_y*3;k<box_y*3+3;k++)
                for(var n=box_x*3;n<box_x*3+3;n++)
                    if((k!=row1 || n!=col1) && (k!=row2 || n!=col2))
                    {
                        var index1 = board1[k][n].candidates.indexOf(candidate1);
                        if(index1!=-1)
                        {
                            board1[k][n].candidates.splice(index1,1);
                        }
                        var index2 = board1[k][n].candidates.indexOf(candidate2);
                        if(index2!=-1)
                        {
                            board1[k][n].candidates.splice(index2,1);
                        }
                    }
        }
    }
    else if(col1 == col2)
    {
        for(var i=0;i<9;i++)
        {
            if(i!=row1 && i!=row2)
            {
                var index1 = board1[i][col1].candidates.indexOf(candidate1);
                if(index1!=-1)
                {
                    board1[i][col1].candidates.splice(index1,1);
                }
                var index2 = board1[i][col1].candidates.indexOf(candidate2);
                if(index2!=-1)
                {
                    board1[i][col1].candidates.splice(index2,1);
                }
            }
        }
        if(Math.floor(row1/3) == Math.floor(row2/3) && Math.floor(col1/3) == Math.floor(col2/3))
        {
            var box_x = Math.floor(col1/3);
            var box_y = Math.floor(row1/3);

            for(var k=box_y*3;k<box_y*3+3;k++)
                for(var n=box_x*3;n<box_x*3+3;n++)
                    if((k!=row1 || n!=col1) && (k!=row2 || n!=col2))
                    {
                        var index1 = board1[k][n].candidates.indexOf(candidate1);
                        if(index1!=-1)
                        {
                            board1[k][n].candidates.splice(index1,1);
                        }
                        var index2 = board1[k][n].candidates.indexOf(candidate2);
                        if(index2!=-1)
                        {
                            board1[k][n].candidates.splice(index2,1);
                        }
                    }
        }
    }
    else
    {
        var box_x = Math.floor(col1/3);
        var box_y = Math.floor(row1/3);

            for(var k=box_y*3;k<box_y*3+3;k++)
                for(var n=box_x*3;n<box_x*3+3;n++)
                    if((k!=row1 || n!=col1) && (k!=row2 || n!=col2))
                    {
                        var index1 = board1[k][n].candidates.indexOf(candidate1);
                        if(index1!=-1)
                        {
                            board1[k][n].candidates.splice(index1,1);
                        }
                        var index2 = board1[k][n].candidates.indexOf(candidate2);
                        if(index2!=-1)
                        {
                            board1[k][n].candidates.splice(index2,1);
                        }
                    }
    }
}

function hint()
{
    // if(!oneCandidate())
    // {
    //     console.log("No more single candidates");
    //     if(foundNakedPair())
    //     {
           nakedPair();
    //         console.log("Naked Pair");
    //     }
    // }
}

generate();