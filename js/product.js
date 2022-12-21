const product_url =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=HDPEPIPE&key=AIzaSyCzFsvPUv4oQBwHeCsYH1FxMueWv-GAiY8';

fetch(product_url)
  .then((value) => value.json())
  .then((data) => console.log(data));
