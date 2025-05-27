import { GameStates } from '../constants'

interface GameOverProps {
  gameState: number
}

const GameOver = ({ gameState }: GameOverProps) => {
  console.log('gameState')

  switch (gameState) {
    case GameStates.inProgress:
      return <></>
    case GameStates.playerOWins:
      return <div className='game-over'>O Wins</div>
    case GameStates.playerXWins:
      return <div className='game-over'>X Wins</div>
    case GameStates.draw:
      return <div className='game-over'>draw</div>
    default:
      ;<></>
  }
}

export default GameOver
