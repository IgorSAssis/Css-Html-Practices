function openCity(event, cityName) {
    
    const tabContent = document.getElementsByClassName("tabcontent")
    const tabLinks = document.getElementsByClassName("tablink")

    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "")
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
}