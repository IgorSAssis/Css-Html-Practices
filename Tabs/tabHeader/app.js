function openCity(cityName, element, color) {

    const tabContent = document.getElementsByClassName("tabcontent")
    const tabLinks = document.getElementsByClassName("tablink")

    for(let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    for(let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = ""
    }

    document.getElementById(cityName).style.display = "block"
    element.style.backgroundColor = color
}

document.getElementById("defaultOpen").click()