const GRID_SIZE = 4;
const CELL_GAP = 2;
const CELL_SIZE = 20;

export default class Grid { // creating cells 
  #cells; //private memeber 
  constructor(gridElement) { 
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    this.#cells = createCellElement(gridElement).map((cellElement, index) => {
      return new Cell(
        cellElement,
        index % GRID_SIZE,
        Math.floor(index / GRID_SIZE)
      );
    });
    // console.log(this.cells) //to verify that all the elements are being hooked up properly
  }
  get #Emptycell() {
    return this.cells.filter((cell) => cell.tile == NULL);
  }
  radomEmptyCell() {
      const randomindex =math.floor(math.random()*this.Emptycell.length)
      return this.#Emptycell[randomindex]
  }
}
class Cell { //creating the values and initilizing the cells
  #cellElement;
  #x;
  #y;
  #tile
  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
  }
  get tile(){
      return this.#tile
  }

}

function createCellElement(gridElement) {
  const cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cells.push(cell);
    gridElement.append(cell);
  }
  return cells;
}
