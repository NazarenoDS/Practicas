const buttonshow = document.querySelector('[data-id="buttonshow"]');


buttonshow.onclick = () => {
    let colorrandom = "#" + Math.floor(Math.random()*16777215).toString(16);
    const body = document.querySelector('body');
    body.style.backgroundColor = colorrandom;
    let tittle = document.querySelector('#texto');
    tittle.textContent = `Background Color: ${colorrandom}`;
    const copy = document.querySelector('[data-id="copy"]');
    copy.hidden = false;
    copy.textContent = "Copiar Hexadecimal";
    navigator.clipboard.writeText(colorrandom);
}
