import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(0, 146, 204, 0.98);
`

export const FontAwesome = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 2.5rem;
`
