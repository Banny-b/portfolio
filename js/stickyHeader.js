window.onscroll = function() {
    stickyHeader();
};

function stickyHeader() {
    const header = document.getElementById("up");
    const stickyPoint = header.offsetTop;
    if (window.pageYOffset > stickyPoint) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};


