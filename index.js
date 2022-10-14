const colorArr = ["red", 'green', "yellow", "blue"];
const colorName = document.getElementById("color-name");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colorArr[randomNumber];
    colorName.textContent = colorArr[randomNumber];
    
});
function getRandomNumber(){
    return Math.floor(Math.random() * colorArr.length);
}