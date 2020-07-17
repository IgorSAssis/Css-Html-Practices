function myFunc(){

    const input = document.getElementById("mySearch")
    const filter = input.value.toUpperCase()
    const ul = document.getElementById("menuBar")
    const li = ul.getElementsByTagName("li")

    for(let i = 0; i < li.length; i++){
        const a = li[i].getElementsByTagName("a")[0]
        console.log(a)
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }
}

function changeContentToVisible(element, elementId) {

    const menuItems = document.querySelectorAll("#menuBar li a")
    const contents = document.getElementsByClassName("content")

    for(let i = 0; i < menuItems.length;i++ ){
        menuItems[i].style.backgroundColor = ""
        menuItems[i].className = ""
    }

    for(let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none"
    }

    document.getElementById(elementId).style.display = "block"
    element.className = "active"
}