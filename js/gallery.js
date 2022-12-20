const body = document.querySelector("body");
const frame = document.querySelector("#list");
const loading = document.querySelector(".loading");
const close = document.querySelector(".close");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".searchBtn");
const key = "45c970bc3ee3b60b35d021e520358df0";
const secret = "341183f9b84def36";
const baseUrl = "https://www.flickr.com/services/rest/?";
const trand_pic = "flickr.interestingness.getList";
const maxCount = 25;
const trand_url = `${baseUrl}method=${trand_pic}&api_key=${key}&per_page=${maxCount}&format=json&nojsoncallback=1`;

callPicture(trand_url);
searchBtn.addEventListener("click", (e) => {
  const value = searchInput.value.trim();
  value !== "" ? searchPic(value) : spacePic();
});

searchInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.target.value === "" ? spacePic() : searchPic(e.target.value);
  }
});
function spacePic() {
  frame.innerHTML = "";
  frame.classList.remove("on");
  frame.style.height = "auto";

  const errMsgs = frame.parentElement.querySelectorAll("p");

  if (errMsgs.length > 0) return;
  const errMsg = document.createElement("p");
  errMsg.append("검색어를 쓰지 않았습니다, 검색어를 입력하세요");
  frame.parentElement.append(errMsg);
}
function searchPic(item) {
  const url = `${baseUrl}method=flickr.photos.search&api_key=${key}&per_page=${maxCount}&format=json&nojsoncallback=1&tags=${item}&privacy_filter=1`;
  callPicture(url);
}

frame.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI") return;
  const target = e.target.closest(".item").querySelector(".thumb");
  const imgSrc = target.parentElement.getAttribute("href");
  const aside = document.createElement("aside");
  aside.classList.add("pop");
  const Popup = `
		<div class="box">
        <img src="${imgSrc}">
    </div>
    <span class="close">close</span>
	`;
  aside.innerHTML = Popup;
  body.querySelector("#gallery").append(aside);
  body.style.overflow = "hidden";
});

body.addEventListener("click", (e) => {
  if (e.target.classList[0] === "close") {
    e.target.closest("aside").remove();
    body.style.overflow = "auto";
  }
});

function callPicture(url) {
  fetch(url)
    .then((value) => value.json())
    .then((items) => {
      createList(items.photos);
      delayLoading();
    });
}

function delayLoading() {
  const imgs = frame.querySelectorAll("img");
  const length = imgs.length;
  let count = 0;

  for (const img of imgs) {
    img.onload = () => {
      count += 1;
      if (count == length) {
        isoLayout();
      }
    };
  }
}
function createList(items) {
  let list = "";
  items.photo.map((item) => {
    const thumbnailSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
    const originSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
    list += `
				<li class="item">
          <div>
            <a href=${originSrc}>
              <img src=${thumbnailSrc} class="thumb">
            </a>
            <p>${item.title}</p>      
          </div>
        </li>
		`;
  });

  frame.innerHTML = list;
}

function isoLayout() {
  loading.classList.add("off");
  frame.classList.add("on");

  new Isotope("#list", {
    itemSelection: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s"
  });
}
