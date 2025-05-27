import { GameStates } from '../constants'

interface ResetProps {
  gameState: number
  onReset: () => void
}

const Reset = ({ gameState, onReset }: ResetProps) => {
  if (gameState === GameStates.inProgress) {
    return
  }
  return (
    <button onClick={onReset} className='reset-button'>
      Reset
    </button>
  )
}

export default Reset
