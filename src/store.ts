import { nanoid } from 'nanoid'
import { TCell } from 'types'
import { create } from 'zustand'

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

type State = {
  board: typeof board
}

export const useBoardStore = create<State>()((set) => ({
  board,
}))
