import { Cell } from 'components/cell/cell'
import { useBoardStore } from 'store'
import styles from './board.module.css'

const renderBoard = () => {
  const board = useBoardStore.getState().board

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
