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

//prints current board in sudoku
function print_board(bo)
{
    for(var i=0;i<9;i++)
    {
        for(var j=0;j<9;j++)
        {
            var x = i*9+j;
            if(bo[i][j]!=0)
            {
                document.getElementById("cell-"+x).value = bo[i][j];
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

//finds first empty cell
function find_empty(bo)
{
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
            if(bo[i][j]==0)
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
        if(bo[row][i] == num && col!=i)
            return false;

    for(var i=0;i<9;i++)
        if(bo[i][col] == num && row!=i)
            return false;

    var box_x = Math.floor(col/3);
    var box_y = Math.floor(row/3);

    for(var i=box_y*3;i<box_y*3+3;i++)
        for(var j=box_x*3;j<box_x*3+3;j++)
            if(bo[i][j]==num && i!=row && j!=col)
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
            bo[row][col] = i;

            if(solve(bo))
                return true;

            bo[row][col] = 0;
        }
    return false;
}

//copies given double array to other
function copy(board)
{
    var board1=[
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
            board1[i][j] = board[i][j];
        }
    return board1;
}

//calls function solve when button is pressed
function solveButton()
{
    var board1 = copy(board);
    solve(board1);
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            if(board[i][j] == 0 || board[i][j]!=board1[i][j])
            {
                var x = i*9+j;
                document.getElementById("cell-"+x).value=board1[i][j];
                document.getElementById("cell-"+x).style.color = "#0000FF";
            }
        }
}

//makes a "shadow" effect of row, column and square of selected cell
function shadow( row, col)
{

    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            var x = i*9+j;
            document.getElementById("cell-"+x).style.backgroundColor = "#FFFFFF";
        }

    if(board[row][col] != 0)
    {
        for(var i=0;i<9;i++)
            for(var j=0;j<9;j++)
            {
                if(board[i][j] == board[row][col])
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

//reveals number of the selected cell to the player
async function hint(row, col)
{
    if(board[row][col] == 0)
    {
        var board1 = copy(board);
        solve(board1);
        var x = row*9+col;
        document.getElementById("cell-"+x).value=board1[row][col];
        document.getElementById("cell-"+x).style.color = "#000000";
        board[row][col] = board1[row][col];
        shadow(row, col);
        hints++;
        document.getElementById("hints").innerText = "Hints: "+hints;
    }
    await sleep(500);
    if(find_empty(board)==null)
    {
        win();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//checks if all inserted values are valid once button is pressed
async function check()
{
    for(var i=0;i<9;i++)
        for(var j=0;j<9;j++)
        {
            var x = i*9+j;
            var check = document.getElementById("cell-"+x).value;
            if(board[i][j]!=check)
            {
                var board1 = copy(board);
                board1[i][j] = check;
                if(valid(board1, check, i, j))
                {
                    board[i][j] = check;
                    shadow(i,j);
                    document.getElementById("cell-"+x).style.color = "#008000";
                    await sleep(800);
                    document.getElementById("cell-"+x).style.color = "#000000";
                    if(find_empty(board)==null)
                    {
                        win();
                    }
                }
                else
                {
                    document.getElementById("cell-"+x).style.color = "#DC143C";
                    mistakes++;
                    document.getElementById("mistakes").innerText = "Mistakes: "+mistakes;
                    await sleep(800);
                    document.getElementById("cell-"+x).style.color = "#0000FF";
                }
            }
        }
}

//checks is value of selected cell is valid
async function check1(event)
{
    if(event.keyCode == 13)
    {
        for(var i=0;i<9;i++)
        {
            for(var j=0;j<9;j++)
            {
                var x = i*9+j;
                var check = document.getElementById("cell-"+x).value;
                if(board[i][j]!=check)
                {
                    var board1 = copy(board);
                    board1[i][j] = check;
                    if(valid(board1, check, i, j))
                    {
                        board[i][j] = check;
                        shadow(i,j);
                        document.getElementById("cell-"+x).style.color = "#008000";
                        await sleep(1500);
                        document.getElementById("cell-"+x).style.color = "#000000";
                        if(find_empty(board)==null)
                        {
                            win();
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
    generate();
}

function getSelectedValue()
{
    var selectedValue = document.getElementById("difficultydd").value;
}

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
        print_board(board);
        solvedBoard = copy(board);
        solve(solvedBoard);
        mistakes=0;
        hints=0;
        document.getElementById("mistakes").innerHTML = "Mistakes: 0";
        document.getElementById("hints").innerHTML = "Hints: 0";

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
}
generate();

//resets current board
function reset()
{
    board = copy(boardReset);
    print_board(board);
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

function test()

{

    console.log("sdd")

    for(var i=0;i<4;i++)

    {
        
    }
}


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