import { memo } from 'react'

interface StrikeProps {
  strikeClass: undefined | string
}

const Strike = ({ strikeClass }: StrikeProps) => {
  console.log('12312312')

  return <div className={`strike ${strikeClass}`}></div>
}

export default memo(Strike)
