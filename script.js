var count = 2;
var arr = new Array(9).fill(null);
var winer;
var drow = 0;
const result = document.getElementById("result");

function resetGame() {
  location.reload();
}

function disableAllButtons() {
  var buttons = document.querySelectorAll(".btns");
  buttons.forEach(function (button) {
    button.disabled = true;
  });
}

function showline(index) {
  const column = document.getElementById("column");
  const row = document.getElementById("row");
  const diag = document.getElementById("diag");
  const lines = document.querySelector(".lines");
  lines.style.zIndex = "2";
  switch (index) {
    case 0:
      column.style.display = "block";
      column.style.transform = "translate(-85px)";
      break;
    case 1:
      column.style.display = "block";
      column.style.transform = "translate(0px)";
      break;
    case 2:
      column.style.display = "block";
      column.style.transform = "translate(85px)";
      break;
    case 3:
      row.style.display = "block";
      row.style.transform = "translateY(-85px)";
      break;
    case 4:
      row.style.display = "block";
      row.style.transform = "translateY(0px)";
      break;
    case 5:
      row.style.display = "block";
      row.style.transform = "translateY(85px)";
      break;
    case 6:
      diag.style.display = "block";
      diag.style.transform = "translateY(-85px)";
      diag.style.transform = "rotate(-45deg)";
      break;
    case 7:
      diag.style.display = "block";
      diag.style.transform = "translateY(85px)";
      diag.style.transform = "rotate(45deg)";
      break;
  }
}

function checkWinner() {
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (
      arr[i * 3] !== null &&
      arr[i * 3] === arr[i * 3 + 1] &&
      arr[i * 3] === arr[i * 3 + 2]
    ) {
      winer = arr[i * 3];
      disableAllButtons();
      showline(i + 3);
      return true;
    }
  }

  // Check columns
  for (var i = 0; i < 3; i++) {
    if (
      arr[i] !== null &&
      arr[i] === arr[i + 3] &&
      arr[i] === arr[i + 6]
    ) {
      winer = arr[i];
      disableAllButtons();
      showline(i);
      return true;
    }
  }

  // Check diagonals
  if (arr[0] !== null && arr[0] === arr[4] && arr[0] === arr[8]) {
    winer = arr[0];
    disableAllButtons();
    showline(6);
    return true;
  }
  if (arr[2] !== null && arr[2] === arr[4] && arr[2] === arr[6]) {
    winer = arr[2];
    disableAllButtons();
    showline(7);
    return true;
  }

  return false;
}

function handleClick(index) {
  var buttons = document.querySelectorAll(".btns");
  if (count % 2 == 0) {
    var btnvalue = "O";
    arr[index] = 0;
  } else {
    var btnvalue = "X";
    arr[index] = 1;
  }

  buttons[index].value = btnvalue;

  if (count > 4) {
    var check = checkWinner();
    if (check == true) {
      drow = 1;
      if (winer == 0) {
        result.innerText = "Player 1 is the winner!";
      } else {
        result.innerText = "Player 2 is the winner!";
      }
    }
  }
  if (drow == 0 && count >= 9) {
    result.innerText = "Match is a draw! Play Again";
  }

  count++;
  buttons[index].disabled = true;
}
