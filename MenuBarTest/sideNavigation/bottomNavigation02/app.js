function handleToggleMenus() {
    const myNavbar = document.getElementById("myNavbar")
    if(myNavbar.className === "bottom-nav") {
        myNavbar.className += " responsive"
    } else {
        myNavbar.className = "bottom-nav"
    }
}