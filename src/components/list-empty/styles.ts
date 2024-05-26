import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  text-align: center;

  color: ${({ theme }) => theme.colors['gray-300']};

  font-size: ${({ theme }) => theme['font-size'].sm}px;
  font-family: ${({ theme }) => theme['font-family'].regular};
`
