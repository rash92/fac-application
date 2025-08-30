function openProject(event){
    /* don't necessarily like this way of getting project name from the id
    of the button which has to match the id of the corresponding contents but
    with 'tab_' before it for this to work. may be better way of doing this.
    */
    let projectName = event.currentTarget.id.split("_")[1]
    let tabcontents = document.getElementsByClassName("tabcontent")
    let tab = document.getElementsByClassName("tab")

    //hide all tabcontents
    Array.from(tabcontents).forEach(element => element.style.display = "none");

    //remove active from all tabs
    Array.from(tab).forEach(element => element.className = element.className.replace(" active", ""))

    //put active back on actually selected tablink
    document.getElementById(projectName).style.display = "block";
    event.currentTarget.className += " active"
}

let tab = document.getElementsByClassName("tab")
Array.from(tab).forEach(element => {
    element.addEventListener("click", openProject)
})
