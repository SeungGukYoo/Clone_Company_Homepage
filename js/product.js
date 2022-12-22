const product_url =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=HDPEPIPE&key=AIzaSyCzFsvPUv4oQBwHeCsYH1FxMueWv-GAiY8';
const video = document.querySelector('.video');

fetch(product_url)
  .then((value) => value.json())
  .then((data) => data.items[0])
  .then((item) => {
    video.innerHTML = `
  <iframe 
    id="existing-iframe-example" 
    width="640"
    height="360"
		src="https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1" 
    frameborder="0"
		style="border: solid 4px #37474F">
  </iframe>
`;
  });
