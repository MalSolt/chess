import { King } from 'models/king'
import { Knight } from 'models/knight'
import { Pawn } from 'models/pawn'
import { Queen } from 'models/queen'
import { TCell, TPosition } from 'types'
import { create } from 'zustand'

// create board initial state
const createBoard = () => {
  const board = []

  for (let row = 1; row <= 8; row++) {
    const rowCells: TCell[] = []
    for (let col = 1; col <= 8; col++) {
      rowCells.push({ x: col, y: row })
    }
    board.push(rowCells)
  }

  return board.reverse()
}

const board = createBoard()

//create pieces initial state
const pieces: Record<string, Pawn | Knight | King | Queen> = {
  '1,2': new Pawn({ x: 1, y: 2 }),
  '2,2': new Pawn({ x: 2, y: 2 }),
  '3,2': new Pawn({ x: 3, y: 2 }),
  '4,2': new Pawn({ x: 4, y: 2 }),
  '5,2': new Pawn({ x: 5, y: 2 }),
  '6,2': new Pawn({ x: 6, y: 2 }),
  '7,2': new Pawn({ x: 7, y: 2 }),
  '8,2': new Pawn({ x: 8, y: 2 }),
  '2,1': new Knight({ x: 2, y: 1 }),
  '5,1': new King({ x: 5, y: 1 }),
  '4,1': new Queen({ x: 4, y: 1 }),
}

//create store
type State = {
  board: typeof board
  pieces: typeof pieces
  selectedPiece: TPosition | null
  clickOnCell: (position: TPosition) => void
}

export const useBoardStore = create<State>()((set) => ({
  board,
  pieces,
  selectedPiece: null,
  clickOnCell: (position) => {
    const targetKey = position.x + ',' + position.y

    set((state) => {
      const tempPieces = state.pieces

      if (state.selectedPiece) {
        const selectedKey = state.selectedPiece.x + ',' + state.selectedPiece.y

        if (state.selectedPiece.x === position.x && state.selectedPiece.y === position.y) {
          return state
        }

        if (tempPieces[targetKey]) {
          return { selectedPiece: position }
        }

        const canMove = tempPieces[selectedKey]?.canMove(position)
        if (canMove) {
          tempPieces[selectedKey].move(position)
          tempPieces[targetKey] = tempPieces[selectedKey]
          delete tempPieces[selectedKey]
          return { selectedPiece: null, pieces: tempPieces }
        }

        return { pieces: tempPieces }
      } else {
        return { selectedPiece: position }
      }
    })
  },
}))

export const getPieceByPosition =
  ({ x, y }: TPosition) =>
  (state: State) =>
    state.pieces[x + ',' + y]
