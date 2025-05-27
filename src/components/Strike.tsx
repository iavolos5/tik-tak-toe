import { memo } from "react"

interface StrikeProps {
  strikeClass: undefined | string
}

const Strike = memo(({ strikeClass }: StrikeProps) => {
  console.log('12312312');
  
  return <div className={`strike ${strikeClass}`}></div>
})

export default Strike
