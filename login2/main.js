document.getElementById("sign-in-one").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (!email && !password) {
        errorMessage.textContent = "Tất cả các trường không được để trống!";
        return;
    }
    if (!email) {
        errorMessage.textContent = "Trống email!";
        return;
    }
    if (!password) {
        errorMessage.textContent = "Trống password!";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Địa chỉ email không hợp lệ!";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "Mật khẩu phải có ít nhất 8 ký tự!";
        return;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (specialCharRegex.test(password)) {
        errorMessage.textContent = "Mật khẩu không được chứa ký tự đặc biệt!";
        return;
    }

    alert("Đăng nhập thành công!");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});
