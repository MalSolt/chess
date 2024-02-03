import styles from './board.module.css'
import { Cell } from 'components/cell/cell'
import { TCell } from 'types'

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

const renderBoard = () => {
  return board.map((row, rowIndex) => (
    <div key={rowIndex} className={styles.row}>
      {row.map((cell) => {
        return <Cell key={`${cell.x}${cell.y}`} {...cell} />
      })}
    </div>
  ))
}

export const Board = () => {
  return <div className={styles.board}>{renderBoard()}</div>
}
