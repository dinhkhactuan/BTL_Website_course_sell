const btnlogin = document.querySelector("#Btn_Login");

if (btnlogin)
  btnlogin.addEventListener("click", (e) => {
    e.preventDefault();
    handleLogin();
  });
async function handleLogin() {
  const email = document.querySelector("#typeEmailX").value;
  const password = document.querySelector("#typePasswordX").value;
  console.log(email);
  console.log(password);

  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/user/login",
      data: {
        email,
        password,
      },
    });
    console.log(res.status);

    if (res.data.status == "success") {
      // alertsussess.classList.add("active_success");
      window.setTimeout(() => {
        location.assign("/");
      });
    } else if (res.data.status == "failed") {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    } else if (res.data.status != "success") {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  } catch (error) {
    if (error) {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  }
}
