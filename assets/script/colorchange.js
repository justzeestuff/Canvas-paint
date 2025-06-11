let color = document.getElementById('color')
export let colorhex

color.addEventListener('change', function(){
    colorhex = color.value
    console.log(colorhex);
})