import styled from "styled-components";

export const NavbarSty = styled.nav`
  width: 100%;
  height: 60px;
  background: #bce2f7;

  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    padding-right: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  .img{
    padding-left: 20px;
    font-family: 'Fredoka One', cursive;
  }
  
  .list {
    display: flex;
    flex-direction: row;
  }
`;
