var username = document.getElementById("username")
var password = document.getElementById("password")

var a1 = a2 = a3 = false;
// 失去焦点
username.onblur = function () {
    if (/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.value)) {
        a1 = true
    } else {
        a1 = false

    }
}

password.onblur = function () {
    if (/^[a-zA-Z].{5,17}$/.test(this.value)) {
        a2 = true

    } else {
        a2 = false

    }
}

function fn() {
    if (a1 && a2) {
        var user = username.value;
        var pass = password.value;
        $.ajax({
            type: "POST",
            url: "php/login.php",
            data: `username=${user}&password=${pass}`,
            success(msg) {
                if (msg == 1) {
                    alert("登陆成功");
                    location.href = "index.html";
                    console.log(msg);
                } else if (msg == 2) {
                    console.log(msg);
                    alert("该用户未注册!")
                } else {
                    alert("密码错误!")
                }
            }
        });
    } else {
        alert("请输入账号密码！");
    }
}