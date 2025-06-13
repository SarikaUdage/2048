

// // let grid = [];
// // let score = 0;
// // let highScore = localStorage.getItem("highScore") || 0;
// // document.getElementById("high-score").innerText = highScore;

// // function startGame() {
// //   document.getElementById("game-over").classList.add("hidden");
// //   grid = Array(4).fill().map(() => Array(4).fill(0));
// //   score = 0;
// //   document.getElementById("score").innerText = score;
// //   document.getElementById("high-score").innerText = highScore;
// //   addNewTile();
// //   addNewTile();
// //   drawGrid();
// // }

// // function addNewTile() {
// //   let empty = [];
// //   for (let r = 0; r < 4; r++) {
// //     for (let c = 0; c < 4; c++) {
// //       if (grid[r][c] === 0) empty.push({ r, c });
// //     }
// //   }
// //   if (empty.length === 0) return;
// //   let { r, c } = empty[Math.floor(Math.random() * empty.length)];
// //   grid[r][c] = Math.random() < 0.9 ? 2 : 4;
// // }

// // function drawGrid() {
// //   const container = document.getElementById("grid-container");
// //   container.innerHTML = "";
// //   for (let row of grid) {
// //     for (let val of row) {
// //       const tile = document.createElement("div");
// //       tile.className = `tile tile-${val}`;
// //       tile.textContent = val !== 0 ? val : "";
// //       container.appendChild(tile);
// //     }
// //   }
// // }

// // function move(direction) {
// //   let rotated = rotateGrid(grid, direction);
// //   let moved = false;

// //   for (let r = 0; r < 4; r++) {
// //     let row = rotated[r].filter(val => val !== 0);
// //     for (let c = 0; c < row.length - 1; c++) {
// //       if (row[c] === row[c + 1]) {
// //         row[c] *= 2;
// //         score += row[c];
// //         row[c + 1] = 0;
// //         c++;
// //       }
// //     }
// //     row = row.filter(val => val !== 0);
// //     while (row.length < 4) row.push(0);
// //     if (row.toString() !== rotated[r].toString()) moved = true;
// //     rotated[r] = row;
// //   }

// //   grid = rotateGrid(rotated, (4 - direction) % 4);
// //   if (moved) {
// //     addNewTile();
// //     drawGrid();
// //     document.getElementById("score").innerText = score;

// //     if (score > highScore) {
// //       highScore = score;
// //       localStorage.setItem("highScore", highScore);
// //       document.getElementById("high-score").innerText = highScore;
// //     }

// //     if (checkGameOver()) {
// //       document.getElementById("game-over").classList.remove("hidden");
// //     }
// //   }
// // }

// // function rotateGrid(mat, times) {
// //   let res = JSON.parse(JSON.stringify(mat));
// //   for (let t = 0; t < times; t++) {
// //     res = res[0].map((_, i) => res.map(row => row[i]).reverse());
// //   }
// //   return res;
// // }

// // function checkGameOver() {
// //   for (let r = 0; r < 4; r++) {
// //     for (let c = 0; c < 4; c++) {
// //       if (grid[r][c] === 0) return false;
// //       if (c < 3 && grid[r][c] === grid[r][c + 1]) return false;
// //       if (r < 3 && grid[r][c] === grid[r + 1][c]) return false;
// //     }
// //   }
// //   return true;
// // }

// // document.addEventListener("keydown", (e) => {
// //   if (e.key === "ArrowLeft") move(0);
// //   else if (e.key === "ArrowUp") move(1);
// //   else if (e.key === "ArrowRight") move(2);
// //   else if (e.key === "ArrowDown") move(3);
// // });

// // startGame();


// let grid = [];
// let previousGrid = null;
// let previousScore = 0;
// let score = 0;
// let highScore = localStorage.getItem("highScore") || 0;
// document.getElementById("high-score").innerText = highScore;

// function startGame() {
//   document.getElementById("game-over").classList.add("hidden");
//   grid = Array(4).fill().map(() => Array(4).fill(0));
//   score = 0;
//   document.getElementById("score").innerText = score;
//   document.getElementById("high-score").innerText = highScore;
//   addNewTile();
//   addNewTile();
//   drawGrid();
// }

// function addNewTile() {
//   let empty = [];
//   for (let r = 0; r < 4; r++) {
//     for (let c = 0; c < 4; c++) {
//       if (grid[r][c] === 0) empty.push({ r, c });
//     }
//   }
//   if (empty.length === 0) return;
//   let { r, c } = empty[Math.floor(Math.random() * empty.length)];
//   grid[r][c] = Math.random() < 0.9 ? 2 : 4;
// }

// function drawGrid() {
//   const container = document.getElementById("grid-container");
//   container.innerHTML = "";
//   for (let row of grid) {
//     for (let val of row) {
//       const tile = document.createElement("div");
//       tile.className = `tile tile-${val}`;
//       tile.textContent = val !== 0 ? val : "";
//       container.appendChild(tile);
//     }
//   }
// }

// function savePreviousState() {
//   previousGrid = JSON.parse(JSON.stringify(grid));
//   previousScore = score;
// }

// function undoMove() {
//   if (previousGrid) {
//     grid = JSON.parse(JSON.stringify(previousGrid));
//     score = previousScore;
//     drawGrid();
//     document.getElementById("score").innerText = score;
//   }
// }

// function move(direction) {
//   savePreviousState();
//   let rotated = rotateGrid(grid, direction);
//   let moved = false;

//   for (let r = 0; r < 4; r++) {
//     let row = rotated[r].filter(val => val !== 0);
//     for (let c = 0; c < row.length - 1; c++) {
//       if (row[c] === row[c + 1]) {
//         row[c] *= 2;
//         score += row[c];
//         row[c + 1] = 0;
//         c++;
//       }
//     }
//     row = row.filter(val => val !== 0);
//     while (row.length < 4) row.push(0);
//     if (row.toString() !== rotated[r].toString()) moved = true;
//     rotated[r] = row;
//   }

//   grid = rotateGrid(rotated, (4 - direction) % 4);
//   if (moved) {
//     addNewTile();
//     drawGrid();
//     document.getElementById("score").innerText = score;

//     if (score > highScore) {
//       highScore = score;
//       localStorage.setItem("highScore", highScore);
//       document.getElementById("high-score").innerText = highScore;
//     }

//     if (checkGameOver()) {
//       document.getElementById("game-over").classList.remove("hidden");
//     }
//   }
// }

// function rotateGrid(mat, times) {
//   let res = JSON.parse(JSON.stringify(mat));
//   for (let t = 0; t < times; t++) {
//     res = res[0].map((_, i) => res.map(row => row[i]).reverse());
//   }
//   return res;
// }

// function checkGameOver() {
//   for (let r = 0; r < 4; r++) {
//     for (let c = 0; c < 4; c++) {
//       if (grid[r][c] === 0) return false;
//       if (c < 3 && grid[r][c] === grid[r][c + 1]) return false;
//       if (r < 3 && grid[r][c] === grid[r + 1][c]) return false;
//     }
//   }
//   return true;
// }

// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowLeft") move(0);
//   else if (e.key === "ArrowUp") move(1);
//   else if (e.key === "ArrowRight") move(2);
//   else if (e.key === "ArrowDown") move(3);
// });

// startGame();


// let grid = [];
// let score = 0;
// let highScore = localStorage.getItem("highScore") || 0;
// document.getElementById("high-score").innerText = highScore;

// // Backup for undo feature
// let lastGrid = [];
// let lastScore = 0;

// function startGame() {
//   document.getElementById("game-over").classList.add("hidden");
//   grid = Array(4).fill().map(() => Array(4).fill(0));
//   score = 0;
//   document.getElementById("score").innerText = score;
//   document.getElementById("high-score").innerText = highScore;
//   addNewTile();
//   addNewTile();
//   drawGrid();
// }

// function addNewTile() {
//   let empty = [];
//   for (let r = 0; r < 4; r++) {
//     for (let c = 0; c < 4; c++) {
//       if (grid[r][c] === 0) empty.push({ r, c });
//     }
//   }
//   if (empty.length === 0) return;
//   let { r, c } = empty[Math.floor(Math.random() * empty.length)];
//   grid[r][c] = Math.random() < 0.9 ? 2 : 4;
// }

// function drawGrid() {
//   const container = document.getElementById("grid-container");
//   container.innerHTML = "";
//   for (let row of grid) {
//     for (let val of row) {
//       const tile = document.createElement("div");
//       tile.className = `tile tile-${val}`;
//       tile.textContent = val !== 0 ? val : "";
//       container.appendChild(tile);
//     }
//   }
// }

// function move(direction) {
//   // Save the current state for undo
//   lastGrid = grid.map(row => row.slice());
//   lastScore = score;

//   let rotated = rotateGrid(grid, direction);
//   let moved = false;

//   for (let r = 0; r < 4; r++) {
//     let row = rotated[r].filter(val => val !== 0);
//     for (let c = 0; c < row.length - 1; c++) {
//       if (row[c] === row[c + 1]) {
//         row[c] *= 2;
//         score += row[c];
//         row[c + 1] = 0;
//         c++;
//       }
//     }
//     row = row.filter(val => val !== 0);
//     while (row.length < 4) row.push(0);
//     if (row.toString() !== rotated[r].toString()) moved = true;
//     rotated[r] = row;
//   }

//   grid = rotateGrid(rotated, (4 - direction) % 4);
//   if (moved) {
//     addNewTile();
//     drawGrid();
//     document.getElementById("score").innerText = score;

//     if (score > highScore) {
//       highScore = score;
//       localStorage.setItem("highScore", highScore);
//       document.getElementById("high-score").innerText = highScore;
//     }

//     if (checkGameOver()) {
//       document.getElementById("game-over").classList.remove("hidden");
//     }
//   }
// }

//  function undoMove() {
//    grid = lastGrid.map(row => row.slice());
//    score = lastScore;
//    drawGrid();
//   document.getElementById("score").innerText = score;
//  }

// function rotateGrid(mat, times) {
//   let res = JSON.parse(JSON.stringify(mat));
//   for (let t = 0; t < times; t++) {
//     res = res[0].map((_, i) => res.map(row => row[i]).reverse());
//   }
//   return res;
// }

// function checkGameOver() {
//   for (let r = 0; r < 4; r++) {
//     for (let c = 0; c < 4; c++) {
//       if (grid[r][c] === 0) return false;
//       if (c < 3 && grid[r][c] === grid[r][c + 1]) return false;
//       if (r < 3 && grid[r][c] === grid[r + 1][c]) return false;
//     }
//   }
//   return true;
// }

// document.addEventListener("keydown", (e) => {
//   if (e.key === "ArrowLeft") move(0);
//   else if (e.key === "ArrowUp") move(1);
//   else if (e.key === "ArrowRight") move(2);
//   else if (e.key === "ArrowDown") move(3);
//   else if (e.key === "u" || e.key === "U") undoMove(); // U key for undo
// });

// startGame();



let grid = [];
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("high-score").innerText = highScore;

// Backup for undo feature
let lastGrid = [];
let lastScore = 0;

function startGame() {
  document.getElementById("game-over").classList.add("hidden");
  grid = Array(4).fill().map(() => Array(4).fill(0));
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("high-score").innerText = highScore;
  addNewTile();
  addNewTile();
  drawGrid();
}

function addNewTile() {
  let empty = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (grid[r][c] === 0) empty.push({ r, c });
    }
  }
  if (empty.length === 0) return;
  let { r, c } = empty[Math.floor(Math.random() * empty.length)];
  grid[r][c] = Math.random() < 0.9 ? 2 : 4;
}

function drawGrid() {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  for (let row of grid) {
    for (let val of row) {
      const tile = document.createElement("div");
      tile.className = `tile tile-${val}`;
      tile.textContent = val !== 0 ? val : "";
      container.appendChild(tile);
    }
  }
}

function move(direction) {
  // Save the current state for undo (only if move is valid)
  const backupGrid = grid.map(row => row.slice());
  const backupScore = score;

  let rotated = rotateGrid(grid, direction);
  let moved = false;

  for (let r = 0; r < 4; r++) {
    let row = rotated[r].filter(val => val !== 0);
    for (let c = 0; c < row.length - 1; c++) {
      if (row[c] === row[c + 1]) {
        row[c] *= 2;
        score += row[c];
        row[c + 1] = 0;
        c++;
      }
    }
    row = row.filter(val => val !== 0);
    while (row.length < 4) row.push(0);
    if (row.toString() !== rotated[r].toString()) moved = true;
    rotated[r] = row;
  }

  if (moved) {
    lastGrid = backupGrid;
    lastScore = backupScore;

    grid = rotateGrid(rotated, (4 - direction) % 4);
    addNewTile();
    drawGrid();
    document.getElementById("score").innerText = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      document.getElementById("high-score").innerText = highScore;
    }

    if (checkGameOver()) {
      document.getElementById("game-over").classList.remove("hidden");
    }
  }
}

function undoMove() {
  if (lastGrid.length === 0) return;
  grid = lastGrid.map(row => row.slice());
  score = lastScore;
  drawGrid();
  document.getElementById("score").innerText = score;
}

function rotateGrid(mat, times) {
  let res = JSON.parse(JSON.stringify(mat));
  for (let t = 0; t < times; t++) {
    res = res[0].map((_, i) => res.map(row => row[i]).reverse());
  }
  return res;
}

function checkGameOver() {
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (grid[r][c] === 0) return false;
      if (c < 3 && grid[r][c] === grid[r][c + 1]) return false;
      if (r < 3 && grid[r][c] === grid[r + 1][c]) return false;
    }
  }
  return true;
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") move(0);
  else if (e.key === "ArrowUp") move(1);
  else if (e.key === "ArrowRight") move(2);
  else if (e.key === "ArrowDown") move(3);
  else if (e.key === "u" || e.key === "U") undoMove(); // Press U to undo
});

startGame();
