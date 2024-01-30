import { TCell } from 'types'
import styles from './cell.module.css'

const isDarkCell = (position: TCell['position']) => (position.x + position.y) % 2 === 1

export const Cell = ({ position, id }: TCell) => {
  const cellColorClass = isDarkCell(position) ? styles.dark : styles.light

  return <div className={`${styles.cell} ${cellColorClass}`}>{position.x + ',' + position.y}</div>
}
