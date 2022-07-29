import React from "react";
import styled from "styled-components";
import Map from "./Map";

function Home() {
  return (
    <HomeArea>
      <SideBar>
        <StLogo>YON MAP</StLogo>
        <StSearchContainer>
          <StBeforeClassInput></StBeforeClassInput>
          <StAfterClassInput></StAfterClassInput>
        </StSearchContainer>
        <StSearchButton>
          <button>길찾기</button>
        </StSearchButton>
      </SideBar>
      <Map />
    </HomeArea>
  );
}

export default Home;

const HomeArea = styled.div`
  display: flex;
`;

const SideBar = styled.div`
  width: 27rem;
  height: 100vh;
  background-color: #f2f4ff;
`;

const StLogo = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  color: #647dff;
`;

const StSearchContainer = styled.div``;

const StSearchButton = styled.div`
  & > button {
    background-color: #c1c8ff;
    border-radius: 2.9rem;
    color: white;
  }
`;

const StBeforeClassInput = styled.input``;
const StAfterClassInput = styled.input``;
