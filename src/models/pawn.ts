import { nanoid } from 'nanoid'
import { TPosition } from 'types'

export class Pawn {
  id = nanoid()
  isFirstMove = true
  position: TPosition

  constructor(position: TPosition) {
    this.position = position
  }

  canMove(cellPosition: TPosition) {
    return true
  }

  move(cellPosition: TPosition) {
    if (this.isFirstMove) {
      this.position = cellPosition
    }

    const canMove = this.canMove(cellPosition)

    if (!canMove) return
  }
}
