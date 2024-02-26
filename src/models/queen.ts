import { nanoid } from 'nanoid'
import { TPosition } from 'types'

export class Queen {
  id = nanoid()
  position: TPosition
  image = 'https://static.thenounproject.com/png/889197-200.png'

  constructor(position: TPosition) {
    this.position = position
  }

  canMove(cellPosition: TPosition) {
    if (
      Math.abs(cellPosition.x - this.position.x) === Math.abs(cellPosition.y - this.position.y) &&
      Math.abs(cellPosition.y - this.position.y) > 0 &&
      Math.abs(cellPosition.x - this.position.x) > 0
    ) {
      return true
    }

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
