import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '../storage-config'
import { PlayerStorageDTO } from './player-storage-dto'

export async function playersGetByGroup(group: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : []

    return players
  } catch (error) {
    throw error
  }
}
