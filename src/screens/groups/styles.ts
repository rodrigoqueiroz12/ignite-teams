import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding: 24px;

  flex: 1;

  background-color: ${({ theme }) => theme.colors['gray-600']};
`
