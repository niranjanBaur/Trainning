import styled from "styled-components";

export const HeaderSty = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #ead0eb;
  font-family: "Poppins", sans-serif;
  padding-bottom: 40px;
  height: 100vh;
  justify-content: center;
  .headerTop {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 30px 0;

    h1 {
      font-family: "Fredoka One", cursive;
    }
    span {
      font-size: 50px;
    }
  }
  .headerBottom {
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      width: 400px;
    }
  }

  #leftContent {
    max-width: 40%;
  }
`;
