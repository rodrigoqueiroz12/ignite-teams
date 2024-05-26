import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  variant: ButtonVariant
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, variant }) =>
    variant === 'primary'
      ? theme.colors['green-700']
      : theme.colors['red-700']};

  border-radius: 6px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: ${({ theme }) => theme['font-size'].md}px;
  font-family: ${({ theme }) => theme['font-family'].bold};
`
