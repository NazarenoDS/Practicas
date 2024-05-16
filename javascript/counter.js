const num = document.querySelector(".num");
const decrease = document.querySelector(`[data-id="decrease"]`);
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");


decrease.onclick = () => {
    num.textContent--;
    real(num)
};
reset.onclick = () => {
    num.textContent = 0;
    real(num)
}
increase.onclick = () => {
    num.textContent++;
    real(num)
}
function real(num){
    let i = parseInt(num.textContent)
    if(i < 0){
        num.style.color = "red";
}   else if(i > 0){
        num.style.color = "green";
}   else{
        num.style.color = "black";
}};
