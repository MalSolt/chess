import { nanoid } from 'nanoid'
import { TPosition } from 'types'

export class Knight {
  id = nanoid()
  position: TPosition
  image = 'https://static.thenounproject.com/png/589743-200.png'

  constructor(position: TPosition) {
    this.position = position
  }

  canMove(cellPosition: TPosition) {
    if (
      (Math.abs(cellPosition.x - this.position.x) === 2 &&
        Math.abs(cellPosition.y - this.position.y) === 1) ||
      (Math.abs(cellPosition.x - this.position.x) === 1 &&
        Math.abs(cellPosition.y - this.position.y) === 2)
    ) {
      return true
    }

    return false
  }

  move(cellPosition: TPosition) {
    this.position = cellPosition
  }
}
