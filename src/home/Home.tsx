import React, { useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import axios from "axios";

function Home() {
  const [startSubject, setStartSubject] = useState("");
  const [endSubject, setEndSubject] = useState("");
  const [positionX, setPositionX] = useState(37.563);
  const [positionY, setPositionY] = useState(126.9383);
  const [startBuilding, setStartBuilding] = useState("");
  const [endBuilding, setEndBuilding] = useState("");

  const getBuildingNameStart = () => {
    axios
      .get(`http://172.30.1.7:8080/items/subject?subject=${startSubject}`)
      .then((res) => {
        setStartBuilding(res.data.building);
        setPositionX(res.data.pos_x);
        setPositionY(res.data.pos_y);
      })
      .catch(() => setStartBuilding("연세대학교 " + startSubject));
  };

  const getBuildingNameEnd = () => {
    axios
      .get(`http://172.30.1.7:8080/items/subject?subject=${endSubject}`)
      .then((res) => {
        setEndBuilding(res.data.building);
        setPositionX(res.data.pos_x);
        setPositionY(res.data.pos_y);
      })
      .catch(() => setEndBuilding("연세대학교 " + endSubject));
  };

  const onChangeStart = (e: any) => {
    const { value } = e.target;
    setStartSubject(value);
  };
  const onChangeEnd = (e: any) => {
    const { value } = e.target;
    setEndSubject(value);
  };
  const onKeyPressStart = () => {
    //서버한테 요청해서 좌표 받음.
    getBuildingNameStart();
  };

  const onKeyPressEnd = () => {
    //서버한테 요청해서 좌표 받음.
    getBuildingNameEnd();
  };

  const onClick = () => {
    //건물 명 두 개 받아서 url 이동
    window.open(
      `https://map.kakao.com/?sName=${startBuilding}&eName=${endBuilding}`,
      "_blank"
    );
  };
  return (
    <HomeArea>
      <SideBar>
        <StLogo>YON MAP</StLogo>
        <StSearchContainer>
          <StBeforeClassInput
            placeholder="앞 강의 입력"
            name="subject"
            type="text"
            onChange={onChangeStart}
            onKeyPress={onKeyPressStart}
          ></StBeforeClassInput>
          <StAfterClassInput
            placeholder="뒷 강의 입력"
            name="subject"
            type="text"
            onChange={onChangeEnd}
            onKeyPress={onKeyPressEnd}
          ></StAfterClassInput>
        </StSearchContainer>
        <StSearchButton>
          <button onClick={onClick}>길찾기</button>
        </StSearchButton>
      </SideBar>
      <Map positionX={positionX} positionY={positionY} />
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
