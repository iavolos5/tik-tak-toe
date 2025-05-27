interface TileProps {
  className?: string
  value: null | string
  onClick: () => void
  hoverClass: string
  key: number
}

const Tile = ({ className, value, onClick, hoverClass }: TileProps) => {
  console.log(value)

  return (
    <div onClick={onClick} className={`tile ${hoverClass} ${className || ''}`}>
      {value}
    </div>
  )
}

export default Tile
