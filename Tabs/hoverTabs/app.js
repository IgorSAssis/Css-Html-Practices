function openCity(event, cityName, element) {
    const tabLinks = document.getElementsByClassName("tablink")
    const tabContents = document.getElementsByClassName("tabcontent")

    for(let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none"
    }

    for(let i = 0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    document.getElementById(cityName).style.display = "block"
    event.currentTarget.className += " active"
}