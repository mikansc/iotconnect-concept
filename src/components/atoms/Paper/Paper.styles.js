import styled from 'styled-components'

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow.default};
`
