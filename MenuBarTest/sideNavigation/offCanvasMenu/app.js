function openNav(){
    document.getElementById("mySideNav").style.width = "200px"
    document.getElementById("main").style.marginLeft = "200px"
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
}

function closeNav(){
    document.getElementById("mySideNav").style.width = "0"
    document.getElementById("main").style.marginLeft = "0"
    document.body.style.backgroundColor = "white"
}