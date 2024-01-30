import { TCell } from 'types'
import styles from './cell.module.css'

const isDarkCell = (x: TCell['x'], y: TCell['y']) => (x + y) % 2 === 1

export const Cell = ({ x, y, id }: TCell) => {
  const cellColorClass = isDarkCell(x, y) ? styles.dark : styles.light

  return <div className={`${styles.cell} ${cellColorClass}`}>{x + ',' + y}</div>
}
