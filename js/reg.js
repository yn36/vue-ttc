var username = document.getElementById("username")
                            var password = document.getElementById("password")
                            var password2 = document.getElementById("password2")
                            var yuedu = document.getElementById("qryd")

                            console.log(yuedu)
                            // var level = document.querySelector(".level")

                            var a1 = a2 = a3 = five = false;
                            console.log(yuedu)


                            // 失去焦点
                            username.onblur = function () {
                                if (/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.value)) {
                                    this.nextElementSibling.innerHTML = "格式正确"
                                    this.nextElementSibling.className = "right"
                                    a1 = true
                                } else {
                                    this.nextElementSibling.innerHTML = "格式错误"
                                    this.nextElementSibling.className = "wrong"
                                    a1 = false

                                }
                            }

                            password.onblur = function () {
                                if (/^[a-zA-Z].{5,17}$/.test(this.value)) {
                                    this.nextElementSibling.innerHTML = "格式正确"
                                    this.nextElementSibling.className = "right"
                                    a2 = true

                                } else {
                                    this.nextElementSibling.innerHTML = "格式错误"
                                    this.nextElementSibling.className = "wrong"
                                    a2 = false

                                }
                            }
                            password2.onblur = function () {
                                if (/^[a-zA-Z].{5,17}$/.test(this.value)) {

                                    this.nextElementSibling.innerHTML = "格式正确"
                                    this.nextElementSibling.className = "right"
                                    if (this.value == password.value) {
                                        this.nextElementSibling.innerHTML = "输入正确"
                                        this.nextElementSibling.className = "right"
                                        a3 = true

                                    } else {
                                        this.nextElementSibling.innerHTML = "密码不一致"
                                        this.nextElementSibling.className = "wrong"
                                        a3 = false

                                    }


                                } else {
                                    this.nextElementSibling.innerHTML = "格式错误"
                                    this.nextElementSibling.className = "wrong"
                                    a3 = true

                                }
                            }

                            yuedu.onblur = function () {
                                if (this.checked) {
                                    five = true;
                                    console.log(this.checked);
                                } else {
                                    five = false;
                                    console.log(this.checked);
                                }
                            }

                            function fn() {
                                if (yuedu.checked == false) {
                                    alert("请阅读注册协议");
                                    // console.log(yuedu.checked);
                                } else if (a1 && a2 && a3 && yuedu) {
                                    var user = username.value;
                                    var pass = password.value;
                                    $.ajax({
                                        type: "POST",
                                        url: "php/reg.php",
                                        data: `username=${user}&password=${pass}`,
                                        success(msg) {
                                            if (msg == 1) {
                                                alert("注册成功")

                                                location.href = "login.html"
                                            } else if (msg == 0) {
                                                alert("该用户已注册")

                                                location.href = "reg.html"
                                            }
                                        },
                                    });
                                } else {
                                    alert("输入错误")
                                }
                            }