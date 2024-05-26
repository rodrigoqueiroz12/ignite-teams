import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'

import { ButtonVariant, Container, Icon } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: ButtonVariant
}

export function ButtonIcon({
  variant = 'primary',
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <Container {...props}>
      <Icon variant={variant} name={icon} />
    </Container>
  )
}
