import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding: 24px;

  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-600']};
`

export const Form = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors['gray-700']};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`

export const HeaderList = styled.View`
  margin: 32px 0 12px;

  width: 100%;

  flex-direction: row;
  align-items: center;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-200']};
    font-size: ${theme['font-size'].sm}px;
    font-weight: ${theme['font-family'].bold};
  `}
`
