import styled, { css } from "styled-components/macro"

export const Content = styled.div`
  width: 100px;
  height: 140px;
  display: flex;
  margin: 0 5px 5px 0;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: rgba(0, 68, 111, 0.98);

  ${({ list }) =>
    list &&
    css`
      width: 100%;
      height: 100%;
    `};
`

export const Number = styled.p`
  margin: 0;
  color: #fff;
  font-size: 2.6rem;

  ${({ list }) =>
    list &&
    css`
      font-size: 10rem;
    `}
`
