import styled, { keyframes }  from 'styled-components'

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div `
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: absolute;
  /* top: 50%; */
  left: 45%;
  border-top: 5px solid #e84393;
  border-bottom: 5px solid #fff;
  animation: ${rotate} 2s linear infinite;
`