let myButton = document.getElementById("myBtn");

myButton.addEventListener('click', changeColor);
function changeColor(){
    let color = ['red', 'yellow', 'blue', 'pink', 'black', 'orange'];
    let num = Math.floor(Math.random() * color.length);
    let myColor = color[num];
    document.body.style.backgroundColor = myColor
    console.log(myColor);
    console.log(num);
}
