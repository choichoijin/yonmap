import React, { useEffect } from "react";
import styled from "styled-components";

interface MapProps {
  positionX: number;
  positionY: number;
}

const Map = (props: MapProps) => {
  const { positionX, positionY } = props;
  const { kakao } = window;

  function scriptTemplate(id: number) {
    return `
      (() => {
        const elements = Array.from(document.querySelectorAll("img.floorImg"));
        elements.forEach((element, idx) => {
          element.style = "display: none;"
        })

        elements[${id}].style = "display: block;"
      })();
    `;
  }

  const iwContent = `
    <div>
      <button onclick='${scriptTemplate(0)}'>지하 1층</button>
      <button onclick='${scriptTemplate(1)}'>1층</button>
      <button onclick='${scriptTemplate(2)}'>2층</button>
      <button onclick='${scriptTemplate(3)}'>3층</button>
      <button onclick='${scriptTemplate(4)}'>4층</button>
      <button onclick='${scriptTemplate(5)}'>5층</button>
      <button onclick='${scriptTemplate(6)}'>6층</button>
      <button onclick='${scriptTemplate(7)}'>7층</button>
      <img id="0" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_8.jpg" width="600" height="500" />
      <img id="1" class="floorImg" style="display: block;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_7.jpg" width="600" height="500" />
      <img id="2" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_5.jpg" width="600" height="500" />
      <img id="3" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_6.jpg" width="600" height="500" />
      <img id="4" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_4.jpg" width="600" height="500" />
      <img id="5" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_3.jpg" width="600" height="500" />
      <img id="6" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_2.jpg" width="600" height="500" />
      <img id="7" class="floorImg" style="display: none;" src="https://engineering.yonsei.ac.kr/_res/engineering/img/intro/e2_1.jpg" width="600" height="500" />
    </div>
  `;

  const iwContent2 = `
  <div>
    <button onclick='${scriptTemplate(0)}'>지하 1층</button>
    <button onclick='${scriptTemplate(1)}'>1층</button>
    <button onclick='${scriptTemplate(2)}'>2층</button>
    <button onclick='${scriptTemplate(3)}'>3층</button>
    <img id="0" class="floorImg" style="display: none;" src="https://ifh.cc/g/ywM8J8.jpg" width="600" height="500" />
    <img id="1" class="floorImg" style="display: block;" src="https://ifh.cc/g/v9Bqma.jpg" width="600" height="500" />
    <img id="2" class="floorImg" style="display: none;" src="https://ifh.cc/g/vmYTat.jpg" width="600" height="500" />
    <img id="2" class="floorImg" style="display: none;" src="https://ifh.cc/g/SZTq5r.jpg" width="600" height="500" />
  </div>
`;

  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(positionX, positionY), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
      isPanto: true,
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    //마커 이미지 정보
    const imageSrc = "https://i.ibb.co/5nksNGp/image.png";
    const imageSrc2 = "https://i.ibb.co/2NRwXdw/image.png";

    const imageSize = new kakao.maps.Size(28, 40);

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize);
    const markerPosition = new kakao.maps.LatLng(37.5624, 126.9352);

    //제2공학관
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    //외솔관
    const marker2 = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.5665, 126.937),
      image: markerImage2,
    });

    marker.setMap(map);
    marker2.setMap(map);
    //인포 윈도우 제어.

    const iwPosition = new kakao.maps.LatLng(37.5624, 126.9352);
    const iwPosition2 = new kakao.maps.LatLng(37.5665, 126.937);

    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
      removable: true,
    });

    const infowindow2 = new kakao.maps.InfoWindow({
      position: iwPosition2,
      content: iwContent2,
      removable: true,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
    kakao.maps.event.addListener(marker2, "click", function () {
      infowindow2.open(map, marker2);
    });
  }, [positionX, positionY]);

  return <MapContainer id="map" />;
};

export default Map;

const MapContainer = styled.div`
  width: 80%;
  height: 100vh;
`;
