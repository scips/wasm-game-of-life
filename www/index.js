import { memory } from "wasm-game-of-life/wasm_game_of_life_bg";
import { Universe, Cell } from "wasm-game-of-life";

const CELL_SIZE = 5;
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

let init_width = 64;
let init_height = 64;

let universe, width, height;
const canvas = document.getElementById("game-of-life-canvas");
let ctx;

let initialized = false;

const initialize = () => {
  universe = Universe.new(init_width, init_height);
  width = universe.width();
  height = universe.height();
  canvas.height = (CELL_SIZE + 1) * height + 1;
  canvas.width = (CELL_SIZE + 1) * width + 1;
  ctx = canvas.getContext('2d');
}

let animationId = null;

let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed;

const renderLoop = () => {
  animationId = requestAnimationFrame(renderLoop);
  
  now = Date.now();
  elapsed = now - then;
  
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    
    universe.tick();
    
    drawGrid();
    drawCells();
  }
};

const drawGrid = () => {
  ctx.beginPath();
  ctx.strokeStyle = GRID_COLOR;

  // create grid
  // horizontal
  for (let i = 0; i <= width; i++) {
    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
  }
  // vertical
  for (let j = 0; j <= height; j++) {
    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
    ctx.lineTo((CELL_SIZE + 1) * width + 1, j* (CELL_SIZE + 1) + 1);
  }

  ctx.stroke();
}

const getIndex = (row, column) => {
  return row * width + column;
}

const drawCells = () => {
  const cellsPtr = universe.cells();
  const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

  ctx.beginPath();

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex(row, col);

      ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR:ALIVE_COLOR;

      ctx.fillRect(
        col * (CELL_SIZE + 1) +1,
        row * (CELL_SIZE + 1) +1,
        CELL_SIZE,
        CELL_SIZE
      );
    }
  }

  ctx.stroke();
};

const isPaused = () => {
  return animationId === null;
};

const playPauseButton = document.getElementById("play-pause");

const pause = () => {
  playPauseButton.textContent = "▶";
  cancelAnimationFrame(animationId);
  animationId = null;
};

const play = () => {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;

  playPauseButton.textContent = "⏸";
  renderLoop();
};

playPauseButton.addEventListener("click", event => {
  if (isPaused()) {
    if (!initialized) {
      initialize();
    }
    width_input.disabled = true;
    height_input.disabled = true;
    play();
  } else {
    pause();
  }
});

// form controller

const speed_output = document.getElementById("speed_value");
const speed_input = document.getElementById("speed");
speed_input.addEventListener("input", (event) => {
  speed_output.textContent = event.target.value;
  fps = Math.floor(60*speed_input.value/100);
  fpsInterval = 1000 / fps;
});
speed_output.textContent = speed_input.value;
fps = Math.floor(60*speed_input.value/100);

const width_output = document.getElementById("width_value");
const width_input = document.getElementById("width");
width_input.addEventListener("input", (event) => {
  init_width =  Math.pow(2, event.target.value);
  width_output.textContent = init_width;
});
init_width =  Math.pow(2, width_input.value);
width_output.textContent = init_width;

const height_output = document.getElementById("height_value");
const height_input = document.getElementById("height");
height_input.addEventListener("input", (event) => {
  init_height = Math.pow(2, event.target.value);
  height_output.textContent = init_height;
});
init_height = Math.pow(2, height_input.value);
height_output.textContent = init_height;
