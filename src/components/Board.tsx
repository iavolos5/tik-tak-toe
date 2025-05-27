import { useCallback } from 'react'
import Strike from './Strike'
import Tile from './Tile'
interface BoardProps {
  tiles: Array<string | null>
  onTileClick: (index: number) => void
  playerTurn: string
  strikeClass: undefined | string
}

const Board = ({ tiles, onTileClick, playerTurn, strikeClass }: BoardProps) => {
  const getClassName = useCallback((index: number): string => {
    const isRightBorder = index % 3 !== 2
    const isBottomBorder = index < 6

    return `${isRightBorder ? 'right-border' : ''} ${
      isBottomBorder ? 'bottom-border' : ''
    }`
  }, [])

  // таблица делается один раз и не трогается, так что можно и индексы вставить
  const tileComponents = tiles.map((value, index) => {
    let hoverClass = ''
    if (value === null && playerTurn !== null) {
      hoverClass = `${playerTurn.toLowerCase()}-hover`
    }
    return (
      <Tile
        key={index}
        hoverClass={hoverClass}
        onClick={() => onTileClick(index)}
        value={value}
        className={getClassName(index)}
      />
    )
  })

  return (
    <div className='board'>
      {tileComponents}
      <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board
