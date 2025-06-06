import { useEffect, useState } from 'react'
import Board from './Board'
import { checkWinner } from '../utils/checkWinners'
import GameOver from './GameOver'
import { PLAYER_O, PLAYER_X } from '../constants'
import Reset from './Reset'
import gameOverSoundAsset from '../sounds/EndGameSound.wav'
import clickSoundAsset from '../sounds/ClickSound.wav'
import { GameStates } from '../interfaces'

type PlayerTurn = 'X' | 'O'

const gameOverSound = new Audio(gameOverSoundAsset)
gameOverSound.volume = 0.2
const clickSound = new Audio(clickSoundAsset)
clickSound.volume = 0.5

const TicTacToe = () => {
  const [tiles, setTiles] = useState<Array<PlayerTurn | null>>(
    Array(9).fill(null)
  )
  const [playerTurn, setPlayerTurn] = useState<PlayerTurn>(PLAYER_X)
  const [strikeClass, setStrikeClass] = useState<string>('')
  const [gameState, setGameState] = useState(GameStates.InProgress)

  useEffect(() => {
    checkWinner({ tiles, setStrikeClass, setGameState })
  }, [tiles])

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play()
    }
  }, [tiles])

  useEffect(() => {
    if (gameState !== GameStates.InProgress) {
      gameOverSound.play()
    }
  }, [gameState])

  const handleReset = () => {
    setGameState(GameStates.InProgress)
    setStrikeClass('')
    setPlayerTurn(PLAYER_X)
    setTiles(Array(9).fill(null))
  }

  const handleTileClick = (index: number) => {
    if (tiles[index] !== null || gameState !== GameStates.InProgress) {
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
      {gameState === GameStates.InProgress ? (
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
