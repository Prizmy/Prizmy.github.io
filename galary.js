if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".ItemTitle span").click(function(){
    });
    $(".galary-1").click(function(){
    });
    }


    function findExternals() {
        let links = document.getElementsByTagName("a");
        Array.from(links).forEach((link) => {
            if (link.host !== window.location.host)
                link.style.color = "green";
        });
    }
    

function changeMainImage(e) {
    const pageWidth = document.documentElement.scrollWidth
    if(pageWidth >1000){
    if (e.target.tagName === "IMG") {
        let mainImg = document.getElementById("main_image").getElementsByTagName("img")[0];
        let showImage = e.target.cloneNode(true);
        let mainImgDiv = document.getElementById("main_image").getBoundingClientRect();
        let centerX = mainImgDiv.left;
        let centerY = mainImgDiv.top;
        showImage.id = "clonedImage";
        showImage.style.top = "280px";
        showImage.style.left = e.clientX - 410  + "px";
        showImage.style.zIndex = "1";
        showImage.classList.add("prepare_image");
        showImage.classList.add("show_image");
        document.getElementsByClassName("gallery")[0].appendChild(showImage);
        let imgX = showImage.getBoundingClientRect().left - 480;
        let moveImage = setInterval(function () {
            if (showImage.style.top !== "20px") {
                showImage.style.top = parseInt(showImage.style.top) - 2 + "px";
            }
            if (imgX > (centerX + 1)) {
                showImage.style.left = parseInt(showImage.style.left) - 2 + "px";
                imgX -= 2;
            } else if (imgX < (centerX - 1)) {
                showImage.style.left = parseInt(showImage.style.left) + 2 + "px";
                imgX += 2;
            }
        }, 10);

        setTimeout(function () {
            showImage.remove();
            clearInterval(moveImage);
            mainImg.src = e.target.src;
        }, 2200)
    }
}
    else{
        if (e.target.tagName === "IMG") {
            let mainImg = document.getElementById("main_image").getElementsByTagName("img")[0];
            let showImage = e.target.cloneNode(true);
            let moveImage = setInterval(function () {
                if (showImage.style.top !== "20px") {
                    showImage.style.top = parseInt(showImage) ;
                }
            }, );
            setTimeout(function () {
                showImage.remove();
                clearInterval(moveImage);
                mainImg.src = e.target.src;
            }, 0)
        }
    }
}



