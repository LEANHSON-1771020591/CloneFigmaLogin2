document.getElementById("sign-in-one").onclick = () => {
    const emailEl = document.getElementById("email");
    const passEl = document.getElementById("password");
    const error = document.getElementById("errorMessage");
    const email = emailEl.value.trim();
    const pass = passEl.value.trim();

    error.textContent = "";

    if (!email || !pass) {
        error.textContent = !email && !pass ? "Tất cả các trường không được để trống!" :
            !email ? "Trống email!" : "Trống password!";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return error.textContent = "Địa chỉ email không hợp lệ!";

    if (pass.length < 8)
        return error.textContent = "Mật khẩu phải có ít nhất 8 ký tự!";

    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass))
        return error.textContent = "Mật khẩu không được chứa ký tự đặc biệt!";

    alert("Đăng nhập thành công!");
    emailEl.value = passEl.value = "";
};
