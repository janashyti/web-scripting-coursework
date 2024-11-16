import { asyncLoadImage } from "./load-image.js";
let imgElm = await asyncLoadImage("images/sunset.jpg")

function modifyImg() {
let mainElement = document.querySelector("body")

let divMain = document.createElement("div")
mainElement.appendChild(divMain)
divMain.className = "portrait";
divMain.id = "portrait";
divMain.append(imgElm)
imgElm.id = "portrait1";


let div1 = document.createElement("div")
divMain.appendChild(div1)
div1.className = "fill cover-image";


let div2 = document.createElement("div")
divMain.appendChild(div2)
div2.className = "fill z-10 hover";

let div3 = document.createElement("div")
div2.appendChild(div3)
div3.className = "fill cover-img hover-img";


    var root = document.getElementById('portrait');
   

    var mouse_monitor = function (e) {
        let x = e.clientX / innerWidth;
        let y = e.clientY / innerHeight;

        let move_x = (x > 0.5) ? '-30px' : '30px';
        let move_y = (y > 0.5) ? '-20px' : '20px';

        root.style.setProperty("--translate-x", move_x);
        root.style.setProperty("--translate-y", move_y);
    }
    root.addEventListener("mousemove", mouse_monitor)

    return root
}

modifyImg()

export { modifyImg }