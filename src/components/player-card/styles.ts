import { MaterialIcons } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.colors['gray-500']};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors['gray-200']};
    font-size: ${theme['font-size'].md}px;
    font-family: ${theme['font-family'].regular};
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors['gray-200'],
}))`
  margin-left: 16px;
  margin-right: 4px;
`
