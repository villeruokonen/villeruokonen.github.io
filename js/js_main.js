
function handle_link(index) {
    switch (index) {
        case 0:
            window.open("about.html", "_parent");
            break;
        case 1:
            window.open("../BrickWorldWebGL/index.html", "_parent");
            break;
        case 2:
            window.open("https://github.com/villeruokonen?tab=repositories");
            break;
        case 3: //linktree link index
            window.open("https://linktr.ee/villeruo");
            break;
        case 4: //linktree link index
            window.open("https://linkedin.com/in/villeruo");
            break;
    }
}

