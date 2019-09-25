

// var a = document.querySelectorAll("a");
// // console.log(a);
// for (let i = 0; i < a.length; i++) {
//     a[i].href = 'javascript:;';
//     // a[i].setAttribute("href", "javascript:;");
// }

// 设置所有a



var actqbsp = document.querySelector(".actqbsp")
var actqbspBOX = document.querySelector(".actqbspBOX")
var Boxli = actqbspBOX.querySelectorAll("li")
var BoxLibox = actqbspBOX.querySelector(".cp-box")
console.log(actqbsp)


actqbsp.onmouseenter = function () {
    actqbspBOX.style.display = "block"
}
actqbsp.onmouseleave = function () {
    actqbspBOX.style.display = "none"

}

for (let i = 0; i < Boxli.length; i++) {
    Boxli[i].onmouseenter = function () {
        console.log(this.lastChild)
        // for (let i = 0; i < BoxLibox.length; i++) BoxLibox.style.display = "none"
        this.style.background = "#fff"
        this.lastChild.style.display = "block"
        this.style.color = "#404145"
    }
    Boxli[i].onmouseleave = function () {

        for (let i = 0; i < BoxLibox.length; i++) BoxLibox.style.display = "none"
        this.lastChild.style.display = "none"
        this.style.background = "#c63239"
        this.style.color = "#fff"
    }
}



// 设置全部商品分类显示隐藏