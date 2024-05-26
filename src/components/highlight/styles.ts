import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme['font-size'].xl}px;
  font-family: ${({ theme }) => theme['font-family'].bold};
  color: ${({ theme }) => theme.colors.white};
`

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme['font-size'].md}px;
  font-family: ${({ theme }) => theme['font-family'].regular};
  color: ${({ theme }) => theme.colors['gray-300']};
`
