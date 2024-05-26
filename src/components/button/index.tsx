import { TouchableOpacityProps } from 'react-native'

import { ButtonVariant, Container, Title } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', title, ...props }: ButtonProps) {
  return (
    <Container variant={variant} {...props}>
      <Title>{title}</Title>
    </Container>
  )
}
