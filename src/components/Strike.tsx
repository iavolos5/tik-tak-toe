import { memo } from 'react'

interface StrikeProps {
  strikeClass: string
}

const Strike = ({ strikeClass }: StrikeProps) => {
  return <div className={`strike ${strikeClass}`}></div>
}

export default memo(Strike)
