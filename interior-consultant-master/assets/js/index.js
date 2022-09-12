let menu=document.getElementById('navbar');

let nav=document.querySelector('nav');

let closeBar=document.querySelector('#closebar');

menu.addEventListener("click", openbar);

closeBar.addEventListener("click",close);

function openbar(){
    nav.style.left="-9%";
    menu.style.display="none";
    closeBar.style.display="inline";
}

function close(){
    nav.style.left="-200%"
    menu.style.display="inline";
    closeBar.style.display="none";

}