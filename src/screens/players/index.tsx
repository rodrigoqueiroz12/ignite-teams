import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'

import { Button } from '@/components/button'
import { ButtonIcon } from '@/components/button-icon'
import { Filter } from '@/components/filter'
import { Header } from '@/components/header'
import { Highlight } from '@/components/highlight'
import { Input } from '@/components/input'
import { ListEmpty } from '@/components/list-empty'
import { Loading } from '@/components/loading'
import { PlayerCard } from '@/components/player-card'
import { PlayerAlreadyInATeamError } from '@/errors/player-already-in-a-team-error'
import { groupRemoveByName } from '@/storage/groups/group-remove-by-name'
import { playerAddByGroup } from '@/storage/players/player-add-by-group'
import { playersGetByGroupAndTeam } from '@/storage/players/player-get-by-group-and-team'
import { playerRemoveByGroup } from '@/storage/players/player-remove-by-group'
import { PlayerStorageDTO } from '@/storage/players/player-storage-dto'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'

type RouteParams = {
  group: string
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true)
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const newPlayerNameInputRef = useRef<TextInput>(null)

  const route = useRoute()
  const navigation = useNavigation()

  const { group } = route.params as RouteParams

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.',
      )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      newPlayerNameInputRef.current?.blur()

      setNewPlayerName('')

      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof PlayerAlreadyInATeamError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.')
      }
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)

      fetchPlayersByTeam()
    } catch (error) {
      console.log(error)

      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover Grupo', 'Não foi posível remover o grupo')
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() },
    ])
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team, fetchPlayersByTeam])

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Filter
              title={item.name}
              isActive={team === item.team}
              onPress={() => setTeam(item.team)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}

      <Button
        title="Remover Turma"
        variant="secondary"
        onPress={handleGroupRemove}
      />
    </Container>
  )
}
