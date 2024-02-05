import { TCell } from 'types'
import styles from './cell.module.css'
import { getPieceByPosition, useBoardStore } from 'store'

const isDarkCell = (x: TCell['x'], y: TCell['y']) => (x + y) % 2 === 1

export const Cell = (props: TCell) => {
  const cellColorClass = isDarkCell(props.x, props.y) ? styles.dark : styles.light
  const piece = useBoardStore(getPieceByPosition(props))
  const pieces = useBoardStore((state) => state.pieces)
  const clickOnCell = useBoardStore((state) => state.clickOnCell)
  if (props.x === 1 && props.y === 1) {
    console.log(pieces)
  }

  const handleClick = () => {
    clickOnCell(props)
  }

  return (
    <div className={`${styles.cell} ${cellColorClass}`} onClick={handleClick}>
      {piece && (
        <div className={styles.piece}>
          <img src={piece?.image} alt='piece' />
        </div>
      )}
    </div>
  )
}
