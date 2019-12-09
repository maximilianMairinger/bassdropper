import bassdropper from "../../app/src/bassdropper"
const elem: HTMLAudioElement = document.querySelector("audio")


// document.querySelector("button").addEventListener("click", () => {
//   elem.currentTime = 10
//   elem.play()
// })


let input = document.querySelectorAll("input")
let timeOut: any;

document.body.addEventListener("keydown", (e) => {
  if (e.target === document.body) {
    elem.currentTime = +input[0].value || 40
    
    elem.play()

    if (timeOut !== undefined) clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      elem.pause()
    }, (+input[1].value || 20) * 1000)
  }
  
})