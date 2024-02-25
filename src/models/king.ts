import { nanoid } from 'nanoid'
import { TPosition } from 'types'

export class King {
  id = nanoid()
  position: TPosition
  image =
    'https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-vector-image-of-chess-king-on-background-png-image_4847109.png'

  constructor(position: TPosition) {
    this.position = position
  }

  canMove(cellPosition: TPosition) {
    if (
      (Math.abs(cellPosition.x - this.position.x) === 1 &&
        Math.abs(cellPosition.y - this.position.y) === 1) ||
      (Math.abs(cellPosition.x - this.position.x) === 1 &&
        Math.abs(cellPosition.y - this.position.y) === 0) ||
      (Math.abs(cellPosition.x - this.position.x) === 0 &&
        Math.abs(cellPosition.y - this.position.y) === 1)
    ) {
      return true
    }

    return false
  }

  move(cellPosition: TPosition) {
    this.position = cellPosition
  }
}
