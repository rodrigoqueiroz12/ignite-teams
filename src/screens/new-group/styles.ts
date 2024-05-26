import { UsersThree } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding: 24px;

  flex: 1;

  background-color: ${({ theme }) => theme.colors['gray-600']};
`

export const Content = styled.View`
  flex: 1;

  justify-content: center;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors['green-700'],
}))`
  align-self: center;
`
