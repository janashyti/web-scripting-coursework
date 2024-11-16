let mainElement = document.querySelector("main")

let newDiv1 = document.createElement("div")
mainElement.appendChild(newDiv1)
newDiv1.className = "box1";
newDiv1.textContent = "demi logel"

let newDiv2 = document.createElement("div")
mainElement.appendChild(newDiv2)
newDiv2.className = "box2";
newDiv2.textContent="ha shume buke";

let newDiv3 = document.createElement("div")
mainElement.appendChild(newDiv3)
newDiv3.className = "box3";
newDiv3.textContent = "dhe nuk ka, fare turp"

let sectionElement = document.querySelector("section")

let appendButton = document.createElement("button")
sectionElement.appendChild(appendButton)
appendButton.id ="appendBoxBtn"
appendButton.className = "btn btn-primary"
appendButton.type = "button"
appendButton.textContent = "Append Box"

let removeButton = document.createElement("button")
sectionElement.appendChild(removeButton)
removeButton.id ="removeBoxBtn"
removeButton.className = "btn btn-primary"
removeButton.type = "button"
removeButton.textContent="Remove Box"

let modifyButton = document.createElement("button")
sectionElement.appendChild(modifyButton)
modifyButton.id ="modifyBoxBtn"
modifyButton.className = "btn btn-primary"
modifyButton.type = "button"
modifyButton.textContent = "Modify Box"

let mysteryButton = document.createElement("button")
sectionElement.appendChild(mysteryButton)
mysteryButton.id ="mysteryBoxBtn"
mysteryButton.className = "btn btn-primary"
mysteryButton.type = "button"
mysteryButton.textContent = "Mystery"


function appendBoxHandler() {
    let mainElement = document.querySelector("main")
    console.log("main")

    let newDiv = document.createElement("div")
    mainElement.appendChild(newDiv)
    newDiv.className = "box4"
    newDiv.textContent = "new box"
}

let appendBoxBtn = document.querySelector("#appendBoxBtn")
console.log(appendBoxBtn)
appendBoxBtn.addEventListener("click", appendBoxHandler)


function removeBoxBtnHandler() {
    let mainElement = document.querySelector("main")
    console.log(mainElement.firstChild.nodeName)
    mainElement.removeChild(mainElement.firstChild)
    
}

let removeBoxBtn = document.querySelector("#removeBoxBtn")
removeBoxBtn.addEventListener("click", removeBoxBtnHandler)


function modifyBoxHandler() {
    let mainElement = document.querySelector("main")
    let firstElement = mainElement.firstChild
    
 
    if(firstElement.getAttribute("class") == "box1" || 
        firstElement.getAttribute("class") == "box2" || 
        firstElement.getAttribute("class") == "box3"){
            console.log(firstElement.className)
            firstElement.className = "box4"
    }
    else{
        firstElement.className = "box1"
        console.log("Oni")
    }  
}

let modifyBoxBtn = document.querySelector("#modifyBoxBtn")
modifyBoxBtn.addEventListener("click", modifyBoxHandler)


function mysteryBoxHandler(){
    let mainElement = document.querySelector("main")
    let newDiv = document.createElement("div")
    mainElement.prepend(newDiv)
    newDiv.className = "box5"
    newDiv.textContent = "Surprize!"
    let newDiv2 = document.createElement("div")
    mainElement.appendChild(newDiv2)
    newDiv2.className = "box5"
    newDiv2.textContent = "Double Surprize"
}

let mysteryBoxBtn = document.querySelector("#mysteryBoxBtn")
mysteryBoxBtn.addEventListener("click", mysteryBoxHandler)

