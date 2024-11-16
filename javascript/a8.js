function createShark() {
    let sharkImg = document.createElement("img")
    sharkImg.id = "shark"
    let url = "images/shark1.png"
    sharkImg.setAttribute("src", url)
    document.body.appendChild(sharkImg)
}

createShark()
setInterval(createShark,15000)

function createShell() {
    let shellImg = document.createElement("img")
    shellImg.id = "shell"
    let url = "images/shell.png"
    shellImg.setAttribute("src", url)
    document.body.appendChild(shellImg)
}
createShell()


function createSeaweed() {
    let seaweedImg = document.createElement("img")
    seaweedImg.id = "seaweed"
    let url = "images/seaweed.gif"
    seaweedImg.setAttribute("src", url)
    document.body.appendChild(seaweedImg)
}
createSeaweed()

function createBubble() {
    let bubble1Img = document.createElement("img")
    bubble1Img.id = "bubble1"
    let url = "images/bubble1.gif"
    bubble1Img.setAttribute("src", url)
    document.body.appendChild(bubble1Img)
}
createBubble()

function createJelly() {
    let jellyImg = document.createElement("img")
    jellyImg.id = "jelly"
    let url = "images/jelly.gif"
    jellyImg.setAttribute("src", url)
    document.body.appendChild(jellyImg)
}
createJelly()

function createFish1() {
    let fish1Img = document.createElement("img")
    fish1Img.id = "fish1"
    let url = "images/fish1.png"
    fish1Img.setAttribute("src", url)
    document.body.appendChild(fish1Img)
}
createFish1()
setInterval(createFish1,15000)

function createFish3() {
    let fish3Img = document.createElement("img")
    fish3Img.id = "fish3"
    let url = "images/fish3.png"
    fish3Img.setAttribute("src", url)
    document.body.appendChild(fish3Img)
}
createFish3()
setInterval(createFish3,15000)