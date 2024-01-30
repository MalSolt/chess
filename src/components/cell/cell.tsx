import { TCell } from 'types'
import styles from './cell.module.css'

const isDarkCell = (position: TCell['position']) => (position.x + position.y) % 2 === 1

export const Cell = ({ position, id }: TCell) => {
  const cellColorClass = isDarkCell(position) ? styles.dark : styles.light

  return (
    <div className={`${styles.cell} ${cellColorClass}`}>
      {position.x + position.y === 2 && (
        <img
          src='https://i.pinimg.com/originals/c2/09/08/c20908ec4f6f913c8f4064e644999a90.png'
          alt='pawn'
          width='50px'
        />
      )}
    </div>
  )
}
