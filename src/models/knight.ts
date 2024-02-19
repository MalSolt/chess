import { nanoid } from 'nanoid'
import { TPosition } from 'types'

export class Pawn {
  id = nanoid()
  isFirstMove = true
  position: TPosition
  image = 'https://i.pinimg.com/originals/c2/09/08/c20908ec4f6f913c8f4064e644999a90.png'

  constructor(position: TPosition) {
    this.position = position
  }

  canMove(cellPosition: TPosition) {
    // if (
    //   this.isFirstMove &&
    //   cellPosition.x === this.position.x &&
    //   cellPosition.y - this.position.y <= 2
    // ) {
    //   return true
    // }

    // if (cellPosition.x === this.position.x && cellPosition.y - this.position.y === 1) {
    //   return true
    // }

    // return false
  }

  move(cellPosition: TPosition) {
    // this.position = cellPosition
    // this.isFirstMove = false
  }
}
