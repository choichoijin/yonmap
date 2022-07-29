import React, { useEffect } from "react";
import styled from "styled-components";

// interface MapProps {
//   latitude: number;
//   longitude: number;
// }

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    console.log(window.kakao.maps);

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.56418, 126.93838), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return <MapContainer id="map" />;
};

export default Map;

const MapContainer = styled.div`
  width: 80%;
  height: 100vh;
`;
