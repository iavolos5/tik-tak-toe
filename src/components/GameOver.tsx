import { GameStates } from '../interfaces'

interface GameOverProps {
  gameState: number
}

const GameOver = ({ gameState }: GameOverProps) => {
  switch (gameState) {
    case GameStates.InProgress:
      return <></>
    case GameStates.PlayerOWins:
      return <div className='game-over'>O Wins</div>
    case GameStates.PlayerXWins:
      return <div className='game-over'>X Wins</div>
    case GameStates.Draw:
      return <div className='game-over'>draw</div>
    default:
      ;<></>
  }
}

export default GameOver
