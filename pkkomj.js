if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".ItemTitle span").click(function(){
    });
    $(".galary-1").click(function(){
    });
    }
    window.onload = function () {
        findExternals();
    }
    
    function findExternals() {
        let links = document.getElementsByTagName("a");
        Array.from(links).forEach((link) => {
            if (link.host !== window.location.host)
                link.style.color = "#F51616";
        });
    }
    