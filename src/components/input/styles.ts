import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors['gray-300'],
}))`
  padding: 16px;

  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['gray-700']};

  border-radius: 6px;

  font-size: ${({ theme }) => theme['font-size'].md}px;
  font-family: ${({ theme }) => theme['font-family'].regular};
`
