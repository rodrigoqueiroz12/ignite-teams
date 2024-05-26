import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '../storage-config'

export async function groupGetAll() {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    if (!storage) {
      return []
    }

    const groups: string[] = JSON.parse(storage)

    return groups
  } catch (error) {
    throw error
  }
}
