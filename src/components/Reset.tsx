import { memo } from 'react'

interface ResetProps {
  gameState: number
  onReset: () => void
}

const Reset = ({ onReset }: ResetProps) => {
  return (
    <button onClick={onReset} className='reset-button'>
      Reset
    </button>
  )
}

export default memo(Reset)
