import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storage-config'
import { groupGetAll } from './group-get-all'

export async function groupRemoveByName(groupDeleted: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedGroups = await groupGetAll()

    const groups = storedGroups.filter((group) => group !== groupDeleted)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  } catch (error) {
    throw error
  }
}
