import { PLAYER_X, winningCombinations } from '../constants'
import { GameStates } from '../interfaces'

interface CheckWinner {
  setStrikeClass: React.Dispatch<React.SetStateAction<string>>
  setGameState: React.Dispatch<React.SetStateAction<number>>
  tiles: Array<string | null>
}

export function checkWinner({
  tiles,
  setStrikeClass,
  setGameState
}: CheckWinner) {
  const areAllTilesFilledIn = tiles.every((tile) => tile !== null)

  if (areAllTilesFilledIn) {
    setGameState(GameStates.Draw)
    return
  }

  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]]
    const tileValue2 = tiles[combo[1]]
    const tileValue3 = tiles[combo[2]]

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass)
      if (tileValue1 === PLAYER_X) {
        setGameState(GameStates.PlayerXWins)
      } else {
        setGameState(GameStates.PlayerOWins)
      }
      return
    }
  }
}
