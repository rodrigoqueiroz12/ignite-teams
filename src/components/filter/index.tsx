import { TouchableOpacityProps } from 'react-native'

import { Container, FilterProps as StyledFilterProps, Title } from './styles'

type FilterProps = TouchableOpacityProps &
  StyledFilterProps & {
    title: string
  }

export function Filter({ title, isActive = false, ...props }: FilterProps) {
  return (
    <Container {...props} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  )
}
