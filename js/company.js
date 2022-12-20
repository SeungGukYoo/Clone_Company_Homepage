const mapContainer = document.getElementById("map");
const mapOptions = {
  center: new kakao.maps.LatLng(37.5381183, 126.7384962),
  level: 3
};

const markerPosition = new kakao.maps.LatLng(37.5381183, 126.7384962);
const marker = new kakao.maps.Marker({
  position: markerPosition
});

const mapTypeControl = new kakao.maps.MapTypeControl();
const zoomControl = new kakao.maps.ZoomControl();
const map = new kakao.maps.Map(mapContainer, mapOptions);

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

marker.setMap(map);
