// viết 1 function tạo ra thông báo
function createNotification(title) {
  const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${title}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        dignissimos unde ipsum
      </p>
    </div>
  </div>`;
  //insertAdjacentHTML
  document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
  "Welcome to js course",
  "Welcome to this tutorial",
  "Today is good day",
  "My name is Hiep",
  "I am frontend developer",
];

let lastTitle;

const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  // lay ra random title trong mang randomData
  const title = randomData[Math.floor(Math.random() * randomData.length)];

  // lan sau tao khong trung title voi lan truoc day
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 5000);
