import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 96px;

  background-color: ${({ theme }) => theme.colors['gray-500']};

  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;

  margin-bottom: 12px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors['gray-200']};
  font-size: ${({ theme }) => theme['font-size'].lg}px;
  font-family: ${({ theme }) => theme['font-family'].regular};
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors['green-700'],
  weight: 'fill',
}))`
  margin-right: 20px;
`
