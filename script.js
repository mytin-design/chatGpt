//open the chat gpt versions options

let ver_button = document.querySelector('.ver_button');

let verbox = document.querySelector('.verbox');

function openVerbox() {
    verbox.style.display = "block";
    //ver_button.removeAttribute('onclick', 'openVerbox()');
    ver_button.setAttribute('onclick', 'closeVerbox()');
};

function closeVerbox() {
    verbox.style.display = 'none';
    //ver_button.removeAttribute('onclick', 'closeVerbox()');
    ver_button.setAttribute('onclick', 'openVerbox()');
}

//select version
let ver_selectedone = document.getElementById('ver_selectedone');
let ver_selectedtwo = document.getElementById('ver_selectedtwo');

let ver_selectedv3 = document.querySelector('.ver_selectedv3');
let ver_selectedv4 = document.querySelector('.ver_selectedv4');

function selectVer3() {
    ver_selectedv3.style.display = "block";
    ver_selectedone.checked = true;
    ver_selectedv4.style.display = "none";
}


function selectVer4() {
    ver_selectedv4.style.display = "block";
    ver_selectedtwo.checked = true;
    ver_selectedv3.style.display = "none";
}



