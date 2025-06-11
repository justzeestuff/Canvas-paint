let canva = document.querySelector('canvas')
let canvacontainer = document.querySelector('.canva')
let ctx = canva.getContext('2d')
let painting = false
import { colorhex } from "./colorchange.js"
import { sizever } from "./size.js"

function resize() {
    canva.height = canvacontainer.offsetHeight
    canva.width = canvacontainer.offsetWidth
}

function drawing(e) {
    if (painting) {
        ctx.strokeStyle = colorhex
        ctx.lineCap = "round"
        ctx.lineWidth = sizever
        ctx.lineTo(
            e.clientX - canva.getBoundingClientRect().left,
            e.clientY - canva.getBoundingClientRect().top
        )
        ctx.stroke()
    }
}

window.addEventListener('resize', resize)
resize()

canva.addEventListener('mousedown', function(e) {
    painting = true
    ctx.beginPath()
    ctx.moveTo(
        e.clientX - canva.getBoundingClientRect().left,
        e.clientY - canva.getBoundingClientRect().top
    )
})
canva.addEventListener('mouseleave', function(){
    painting = false
    ctx.closePath
})

canva.addEventListener('mousemove', drawing)

canva.addEventListener('mouseup', function() {
    painting = false
    ctx.closePath()
})
