const buttonBc =document.querySelector(".btn-bc")
const buttonTitle =document.querySelector("#btn-bc")
const buttonCricle =document.querySelector("#btn-circle")
const body = document.querySelector("body")
const mainTitle = document.querySelector(".title")




console.log({buttonBc,buttonCricle,buttonTitle})

buttonBc.addEventListener("click",()=>{
    body.style.backgroundColor = "yellow";
})
buttonTitle.addEventListener("click",()=>{
    mainTitle.textContent= "I am hungry!🦞"
})
buttonCricle.addEventListener("click",()=>{
    const circle = document.createElement("div");
    circle.style.width = "200px";
    circle.style.height = "200px";
    circle.style.borderRadius = "100%";
    circle.style.border = "1px solid blue";
    body.append(circle);
})