import styled from "styled-components";

export const ButtonSty = styled.button`
  border: none;
  height: 40px;
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  padding: 0 30px;
  font-size: 16px;
`;
