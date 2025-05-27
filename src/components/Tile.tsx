interface TileProps {
  className?: string
  value: null | string
  onClick: () => void
  playerTurn: string
  key: number
}

const Tile = ({ className, value, onClick, playerTurn }: TileProps) => {
  console.log(value)
  let hoverClass = null
  if (value === null && playerTurn !== null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`
  }

  return (
    <div onClick={onClick} className={`tile ${hoverClass} ${className || ''}`}>
      {value}
    </div>
  )
}

export default Tile
