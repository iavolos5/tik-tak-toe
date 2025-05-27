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

  return (
    <div className='board'>
      {tiles.map((value, index) => {
        return (
          <Tile
            key={index}
            playerTurn={playerTurn}
            onClick={() => onTileClick(index)}
            value={value}
            className={getClassName(index)}
          />
        )
      })}

      <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board
