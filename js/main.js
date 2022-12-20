const lists = document.querySelectorAll(".popUp ul li");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const ul = document.querySelector("#figure .inner ul");

ul.style.marginLeft = "-100%";
ul.prepend(ul.lastElementChild);
prevBtn.addEventListener("click", () => {
  new Anim(ul, {
    prop: "margin-left",
    value: "0%",
    duration: 1000,
    callback: (e) => {
      ul.style.marginLeft = "-100%";
      ul.prepend(ul.lastElementChild);
      const li = ul.querySelectorAll("li")[1];
      activeSmallBanner(li);
    }
  });
});

nextBtn.addEventListener("click", () => {
  new Anim(ul, {
    prop: "margin-left",
    value: "-200%",
    duration: 1000,
    callback: () => {
      ul.style.marginLeft = "-100%";
      ul.append(ul.firstElementChild);
      const li = ul.querySelectorAll("li")[1];
      activeSmallBanner(li);
    }
  });
});

setInterval(() => {
  new Anim(ul, {
    prop: "margin-left",
    value: "-200%",
    duration: 1500,
    callback: () => {
      ul.style.marginLeft = "-100%";
      ul.append(ul.firstElementChild);
      const li = ul.querySelectorAll("li")[1];
      activeSmallBanner(li);
    }
  });
}, 7000);

function activeSmallBanner(list) {
  const index = list.dataset.index;
  lists.forEach((list) => list.classList.remove("on"));
  lists[index - 1].classList.add("on");
}
