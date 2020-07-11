function goToPage(element) {
    const menuLinks = document.querySelectorAll(".topNav a")
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].style.backgroundColor = ""
        menuLinks[i].className = ""
    }
    element.className = "active"
}
