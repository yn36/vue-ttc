var gb = document.querySelector(".gb")
var topgg = document.querySelector(".top-gg")
gb.onclick = function () {
    topgg.style.opacity = "0"
    setTimeout(() => {
        topgg.style.display = "none"
    }, 500);
}
// 关闭顶部广告

function Lbt(id) {
    this.init(id)
}
Lbt.prototype = {
    init(id) {
        let _this = this
        this.id = document.querySelector(id)
        this.oli = this.id.querySelectorAll("ul li")
        this.index = this.oindex = 0;
        this.btnS = this.id.querySelectorAll("button")
        this.obar = this.id.querySelector(".bar")
        this.bar = this.id.querySelectorAll(".bar li")
        this.item = null

        // console.log(document.documentElement.offsetWidth)
        setInterval(() => {
            this.obar.style.left = (document.documentElement.offsetWidth - (this.obar.offsetWidth / 2)) / 2 + "px"

        }, 100);
        // this.clearAct()
        this.item = setInterval(() => {
            this.gonext();
        }, 2000);
        this.btnS[0].onclick = () => {
            this.gopre()
        }
        this.btnS[1].onclick = () => {
            this.gonext();
        }
        this.id.onmouseenter = () => {
            clearInterval(this.item)
        }
        this.id.onmouseleave = () => {
            this.item = setInterval(() => {
                this.gonext();
            }, 2000);
        }
        for (var i = 0; i < this.bar.length; i++) {
            this.bar[i].index = i
            this.bar[i].onclick = function () {

                // console.log(this)
                _this.index = this.index
                _this.goindex()
            }
        }

    },
    goindex() {
        this.clearAct()
        this.oli[this.index].className = "lbt-li active"
        this.bar[this.index].className = "active"
    },
    clearAct() {
        for (let i = 0; i < this.oli.length; i++) {
            this.oli[i].className = "lbt-li"
            this.bar[i].className = ""
        }
    },
    gonext() {
        if (this.index < 4) {
            this.index++
        } else {
            this.index = 0
        }
        this.goindex()
    },
    gopre() {
        if (this.index > 0) {
            this.index--
        } else {
            this.index = 4
        }
        this.goindex()
    }
}
var lbt1 = new Lbt(".lbt")

// 轮播图