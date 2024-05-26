import AsyncStorage from '@react-native-async-storage/async-storage'

import { PlayerAlreadyInATeamError } from '@/errors/player-already-in-a-team-error'

import { PLAYER_COLLECTION } from '../storage-config'
import { playersGetByGroup } from './player-get-by-group'
import { PlayerStorageDTO } from './player-storage-dto'

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string,
) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedPlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name,
    )

    if (playerAlreadyExists.length > 0) {
      throw new PlayerAlreadyInATeamError()
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}
