
var imgs = document.querySelectorAll("ul li img");
var windo = document.querySelector(".window");
var right = document.querySelector("#right");
var leftt = document.querySelector("#left");
var close = document.querySelector("#close");
var slide = document.querySelector(".monitor .slide");




for (var i = 0; i < imgs.length; i++) {

    // IMG CLICK
    imgs[i].addEventListener("click", function () {
        var data = this.getAttribute("data")
        windo.style.transform = "scale(1,1)"
        var left = (data - 1) * 100
        slide.style.left = -left + "%";

        //    Mouse Click
        windo.addEventListener("click", function (event) {
            var y = event.screenY
            var x = event.screenX
            if (y < 134 || y > 534 || x < 276 || x > 1080) {
                windo.style.transform = "scale(0,0)"
            }
        })

        // LEFT-ICON
        leftt.addEventListener("click", function () {
            if (data == 1) {
                data = imgs.length
            } else {
                data--
            }
            var left = (data - 1) * 100
            slide.style.left = -left + "%";
        })
        //  RIGHT-ICON
        right.addEventListener("click", function () {
            if (data == imgs.length) {
                data = 1
            } else {
                data++
            }
            var left = (data - 1) * 100
            slide.style.left = -left + "%";
        });
        // RIGHT-KEY
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 39) {
                if (data == imgs.length) {
                    data = 1
                } else {
                    data++
                }
                var left = (data - 1) * 100
                slide.style.left = -left + "%";

            }
        })
        //    LEFT-KEY
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 37) {
                if (data == 1) {
                    data = imgs.length
                } else {
                    data--
                }
                var left = (data - 1) * 100
                slide.style.left = -left + "%";
            }

        })






    })
}


// CLOSE ICON
close.addEventListener("click", function () {
    windo.style.transform = "scale(0,0)"
})
