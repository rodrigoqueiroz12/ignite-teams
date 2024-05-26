import { TextInput, TextInputProps } from 'react-native'

import { Container } from './styles'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...props }: InputProps) {
  return <Container {...props} ref={inputRef} />
}
