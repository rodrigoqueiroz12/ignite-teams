import AsyncStorage from '@react-native-async-storage/async-storage'

import { GroupAlreadyExistsError } from '@/errors/group-already-exists-error'

import { GROUP_COLLECTION } from '../storage-config'
import { groupGetAll } from './group-get-all'

export async function groupCreate(group: string) {
  // eslint-disable-next-line no-useless-catch
  try {
    const storedGroups = await groupGetAll()

    const groupAlreadyExists = storedGroups.includes(group)

    if (groupAlreadyExists) {
      throw new GroupAlreadyExistsError()
    }

    const storage = JSON.stringify([...storedGroups, group])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
