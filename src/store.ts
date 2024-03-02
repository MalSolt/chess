import { Bishop } from 'models/bishop'
import { King } from 'models/king'
import { Knight } from 'models/knight'
import { Pawn } from 'models/pawn'
import { Queen } from 'models/queen'
import { Rook } from 'models/rook'
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
const blackPieces = {
  '1,7': new Pawn({ x: 1, y: 7 }),
  '2,7': new Pawn({ x: 2, y: 7 }),
  '3,7': new Pawn({ x: 3, y: 7 }),
  '4,7': new Pawn({ x: 4, y: 7 }),
  '5,7': new Pawn({ x: 5, y: 7 }),
  '6,7': new Pawn({ x: 6, y: 7 }),
  '7,7': new Pawn({ x: 7, y: 7 }),
  '8,7': new Pawn({ x: 8, y: 7 }),
  '2,8': new Knight({ x: 2, y: 8 }),
  '7,8': new Knight({ x: 7, y: 8 }),
  '5,8': new King({ x: 5, y: 8 }),
  '4,8': new Queen({ x: 4, y: 8 }),
  '1,8': new Rook({ x: 1, y: 8 }),
  '8,8': new Rook({ x: 8, y: 8 }),
  '3,8': new Bishop({ x: 3, y: 8 }),
  '6,8': new Bishop({ x: 6, y: 8 }),
}

const whitePieces = {
  '1,2': new Pawn({ x: 1, y: 2 }),
  '2,2': new Pawn({ x: 2, y: 2 }),
  '3,2': new Pawn({ x: 3, y: 2 }),
  '4,2': new Pawn({ x: 4, y: 2 }),
  '5,2': new Pawn({ x: 5, y: 2 }),
  '6,2': new Pawn({ x: 6, y: 2 }),
  '7,2': new Pawn({ x: 7, y: 2 }),
  '8,2': new Pawn({ x: 8, y: 2 }),
  '2,1': new Knight({ x: 2, y: 1 }),
  '7,1': new Knight({ x: 7, y: 1 }),
  '5,1': new King({ x: 5, y: 1 }),
  '4,1': new Queen({ x: 4, y: 1 }),
  '1,1': new Rook({ x: 1, y: 1 }),
  '8,1': new Rook({ x: 8, y: 1 }),
  '3,1': new Bishop({ x: 3, y: 1 }),
  '6,1': new Bishop({ x: 6, y: 1 }),
}

const pieces: Record<string, Pawn | Knight | King | Queen | Rook | Bishop> = {
  ...blackPieces,
  ...whitePieces,
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
