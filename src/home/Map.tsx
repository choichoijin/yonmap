import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { markAsUntransferable } from "worker_threads";

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
      center: new window.kakao.maps.LatLng(37.563, 126.9383), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커 이미지 정보
    const imageSrc = "https://i.ibb.co/5nksNGp/image.png";
    const imageSize = new window.kakao.maps.Size(28, 40);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const markerPosition = new window.kakao.maps.LatLng(37.563, 126.9383);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  }, []);

  return <MapContainer id="map" />;
};

export default Map;

const MapContainer = styled.div`
  width: 80%;
  height: 100vh;
`;
