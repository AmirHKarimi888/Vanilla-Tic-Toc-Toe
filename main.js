import './style.css'

let players = [
  { name: "Player 1", id: "x", x1: 0, x2: 0, x3: 0, y1: 0, y2: 0, y3: 0, z1: 0, z2: 0 },
  { name: "Player 2", id: "o", x1: 0, x2: 0, x3: 0, y1: 0, y2: 0, y3: 0, z1: 0, z2: 0 },
]

let btnsList = [
  { name: "x1y3", filledBy: "", score: 0, func: () => filler("x1y3") },
  { name: "x2y3", filledBy: "", score: 0, func: () => filler("x2y3") },
  { name: "x3y3", filledBy: "", score: 0, func: () => filler("x3y3") },

  { name: "x1y2", filledBy: "", score: 0, func: () => filler("x1y2") },
  { name: "x2y2", filledBy: "", score: 0, func: () => filler("x2y2") },
  { name: "x3y2", filledBy: "", score: 0, func: () => filler("x3y2") },

  { name: "x1y1", filledBy: "", score: 0, func: () => filler("x1y1") },
  { name: "x2y1", filledBy: "", score: 0, func: () => filler("x2y1") },
  { name: "x3y1", filledBy: "", score: 0, func: () => filler("x3y1") },
]

let turn = players[0].id;

const filler = (id) => {
  const boardItemIcon = document.querySelector(`#${id} i`);

  if (boardItemIcon.className == "") {
    btnsList.filter((btn) => {
      if (btn.name == id) {
        btn.filledBy = turn;

        players.filter((player) => {
          if (player.id == turn) {

            switch (id) {
              case "x1y1":
                player.x1++;
                player.y1++;
                player.z2++;
                break;
              case "x1y2":
                player.x1++;
                player.y2++;
                break;
              case "x1y3":
                player.x1++;
                player.y3++;
                player.z1++;
                break;

              case "x2y1":
                player.x2++;
                player.y1++;
                break;
              case "x2y2":
                player.x2++;
                player.y2++;
                player.z1++;
                player.z2++;
                break;
              case "x2y3":
                player.x2++;
                player.y3++;
                break;

              case "x3y1":
                player.x3++;
                player.y1++;
                player.z1++;
                break;
              case "x3y2":
                player.x3++;
                player.y2++;
                break;
              case "x3y3":
                player.x3++;
                player.y3++;
                player.z2++;
                break;
            }


            if (player.x1 == 3 || player.x2 == 3 || player.x3 == 3 || player.y1 == 3 || player.y2 == 3 || player.y3 == 3 || player.z1 == 3 || player.z2 == 3 || player.z3 == 3 || player.z4 == 3) {
              message.innerHTML = player.name + " Won!";
              document.querySelector("#results").append(message);
              document.querySelector("#results").append(restartBtn);
            } else if(player.x1 != 3 && player.x2 != 3 && player.x3 != 3 && player.y1 != 3 && player.y2 != 3 && player.y3 != 3 && player.z1 != 3 && player.z2 != 3) {
              let i = 0;
              for(let btn of btnsList) {
                if(btn.filledBy != "") {
                  i++;
                  if(i == 9) {
                    message.innerHTML = "The game was drawn!";
                    document.querySelector("#results").append(message);
                    document.querySelector("#results").append(restartBtn);
                  }
                }
              }
            }
          }
        })
      }
    })

    if (turn == "x") {
      if (boardItemIcon.className == "") {
        turn = players[1].id;
        boardItemIcon.className = "fa fa-close";
      }
    } else if (turn == "o") {
      if (boardItemIcon.className == "") {
        turn = players[0].id;
        boardItemIcon.className = "fa fa-circle-o";
      }
    }

  }
}


const restartGame = () => {
  players = [
    { name: "Player 1", id: "x", x1: 0, x2: 0, x3: 0, y1: 0, y2: 0, y3: 0, z1: 0, z2: 0 },
    { name: "Player 2", id: "o", x1: 0, x2: 0, x3: 0, y1: 0, y2: 0, y3: 0, z1: 0, z2: 0 },
  ]

  btnsList = [
    { name: "x1y3", filledBy: "", score: 0, func: () => filler("x1y3") },
    { name: "x2y3", filledBy: "", score: 0, func: () => filler("x2y3") },
    { name: "x3y3", filledBy: "", score: 0, func: () => filler("x3y3") },
  
    { name: "x1y2", filledBy: "", score: 0, func: () => filler("x1y2") },
    { name: "x2y2", filledBy: "", score: 0, func: () => filler("x2y2") },
    { name: "x3y2", filledBy: "", score: 0, func: () => filler("x3y2") },
  
    { name: "x1y1", filledBy: "", score: 0, func: () => filler("x1y1") },
    { name: "x2y1", filledBy: "", score: 0, func: () => filler("x2y1") },
    { name: "x3y1", filledBy: "", score: 0, func: () => filler("x3y1") },
  ]

  board.innerHTML = "";

  btnsList.map((btn) => {
    const boardItem = document.createElement("li");
    boardItem.className = "boardItem";
    boardItem.id = btn.name;
    boardItem.addEventListener("click", btn.func);
  
    const boardItemIcon = document.createElement("i");
    boardItemIcon.className = "";
    boardItem.append(boardItemIcon);
  
    board.append(boardItem);
  })

  document.querySelector("#results").innerHTML = "";
}




const app = document.querySelector('#app');

const title = document.createElement("div");
title.innerHTML = "Tic Toc Toe Game Made By Vanilla (Pure JS)"
title.className = "title";

const board = document.createElement("ul");
board.className = "board";


btnsList.map((btn) => {
  const boardItem = document.createElement("li");
  boardItem.className = "boardItem";
  boardItem.id = btn.name;
  boardItem.addEventListener("click", btn.func);

  const boardItemIcon = document.createElement("i");
  boardItemIcon.className = "";
  boardItem.append(boardItemIcon);

  board.append(boardItem);
})

const resualts =document.createElement("div");
resualts.className = "results";
resualts.id = "results";

const message = document.createElement("p");
message.className = "message";
message.id = "message";

const restartBtn = document.createElement("button");
restartBtn.className = "restartBtn";
restartBtn.id = "restartBtn";
restartBtn.innerHTML = "New Game";
restartBtn.addEventListener("click", () => restartGame())

app.append(title);
app.append(board);
app.append(resualts);