import { nanoid } from 'nanoid'
import { TPosition } from 'types'

export class Rook {
  id = nanoid()
  position: TPosition
  image =
    'https://www.creativefabrica.com/wp-content/uploads/2022/08/07/Rook-chess-piece-Black-castle-figure-G-Graphics-35686094-1.png'

  constructor(position: TPosition) {
    this.position = position
  }

  canMove(cellPosition: TPosition) {
    if (
      (Math.abs(cellPosition.x - this.position.x) > 0 &&
        Math.abs(cellPosition.y - this.position.y) === 0) ||
      (Math.abs(cellPosition.x - this.position.x) === 0 &&
        Math.abs(cellPosition.y - this.position.y) > 0)
    ) {
      return true
    }

    return false
  }

  move(cellPosition: TPosition) {
    this.position = cellPosition
  }
}
