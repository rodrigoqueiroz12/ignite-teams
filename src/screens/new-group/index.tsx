import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Alert } from 'react-native'

import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Input } from '@/components/input'
import { GroupAlreadyExistsError } from '@/errors/group-already-exists-error'
import { groupCreate } from '@/storage/groups/group-create'

import { Container, Content, Icon } from './styles'

export default function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(group)

      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof GroupAlreadyExistsError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')

        console.error(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
          value={group}
        />
        <Button
          title="Criar turma"
          style={{ marginTop: 12 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
