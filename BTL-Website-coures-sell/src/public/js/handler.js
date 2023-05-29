const Btn_username = document.querySelector("#USER_NAME");
const MENU_BOX = document.querySelector("#MENU_BOX");
const Message_notifile = document.querySelector(".Message_notifile");
const BACK = document.querySelector(".BACK");
if (Btn_username) {
  Btn_username.addEventListener("click", (e) => {
    e.preventDefault();
    handle();
  });
}
const handle = () => {
  MENU_BOX.classList.toggle("show");
};
if (Message_notifile) {
  Message_notifile.addEventListener("click", () => {
    Message_notifile.classList.toggle("hide");
  });
}
if (BACK) {
  BACK.addEventListener("click", () => {
    window.location.assign("/");
  });
}
