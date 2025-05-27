import { useEffect, useState } from 'react'
import Board from './Board'
import { checkWinner } from '../utils/checkWinners'
import GameOver from './GameOver'
import { GameStates, PLAYER_O, PLAYER_X } from '../constants'
import Reset from './Reset'
import gameOverSoundAsset from '../sounds/EndGameSound.wav'
import clickSoundAsset from '../sounds/ClickSound.wav'

const gameOverSound = new Audio(gameOverSoundAsset)
gameOverSound.volume = 0.2
const clickSound = new Audio(clickSoundAsset)
clickSound.volume = 0.5

type PlayerTurn = 'X' | 'O'

const TicTacToe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>(PLAYER_X)
  const [strikeClass, setStrikeClass] = useState<string>('')
  const [gameState, setGameState] = useState(GameStates.inProgress)

  useEffect(() => {
    checkWinner({ tiles, setStrikeClass, setGameState })
  }, [tiles])

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play()
    }
  }, [tiles])

  useEffect(() => {
    if (gameState !== GameStates.inProgress) {
      gameOverSound.play()
    }
  }, [gameState])

  const handleReset = () => {
    setGameState(GameStates.inProgress)
    setStrikeClass('')
    setPlayerTurn(PLAYER_X)
    setTiles(Array(9).fill(null))
  }

  const handleTileClick = (index: number) => {
    if (tiles[index] !== null || gameState !== GameStates.inProgress) {
      return
    }
    const newTiles = [...tiles]
    newTiles[index] = playerTurn

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O)
    } else {
      setPlayerTurn(PLAYER_X)
    }
    setTiles(newTiles)
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      {gameState === GameStates.inProgress ? (
        <></>
      ) : (
        <>
          <GameOver gameState={gameState} />
          <Reset gameState={gameState} onReset={handleReset} />
        </>
      )}
    </div>
  )
}

export default TicTacToe
