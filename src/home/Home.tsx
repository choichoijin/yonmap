import React from "react";
import styled from "styled-components";
import Map from "./Map";

function Home() {
  return (
    <HomeArea>
      <SideBar>
        <StLogo>YON MAP</StLogo>
        <StSearchContainer>
          <StBeforeClassInput placeholder="앞 강의 입력"></StBeforeClassInput>
          <StAfterClassInput placeholder="뒷 강의 입력"></StAfterClassInput>
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
  text-align: center;
  margin: 4.5rem 0 1.6rem 0;
`;

const StSearchContainer = styled.div`
  & > input {
    width: 21rem;
    height: 3.5rem;
    border-radius: 2.9rem;
    border-style: none;
    margin: 1.5rem 3rem 0 3rem;
    padding-left: 2rem;
  }
`;

const StSearchButton = styled.div`
  & > button {
    width: 21rem;
    height: 3.5rem;
    border-radius: 2.9rem;
    margin: 1.5rem 3rem 0 3rem;
    background-color: #c1c8ff;
    border-radius: 2.9rem;
    color: white;
  }
`;

const StBeforeClassInput = styled.input``;
const StAfterClassInput = styled.input``;
