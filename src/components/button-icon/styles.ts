import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
  variant: ButtonVariant
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === 'primary'
        ? theme.colors['green-700']
        : theme.colors['red-700'],
  }),
)``
