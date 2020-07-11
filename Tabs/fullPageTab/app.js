function openPage(contentId, element, color) {
    const tabLinks = document.getElementsByClassName("tablink")
    const tabContent = document.getElementsByClassName("tabcontent")
    
    for(let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    for(let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = ""
    }

    document.getElementById(contentId).style.display = "block"
    element.style.backgroundColor = color
}

document.getElementById("defaultOpen").click()