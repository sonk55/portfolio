var inc = 0;
var out = 0;
var str = 'SSong\'s Portfolio';
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@$%&\' ';
var t;

let shuffle=document.querySelector(".shuffle")
let anim=document.querySelector(".anim")

let fanim = function() {
    shuffle.textContent = chars[Math.floor(Math.random() * chars.length)];
    // if (inc % 7 === 0 && out < str.length) {
    // document.querySelector('.anim').appendChild(document.createTextNode(str[out]));
    // out++;
    // } 
    if (str[out]===shuffle.textContent && out < str.length) {
        document.querySelector('.anim').appendChild(document.createTextNode(str[out]));
        out++;
    } 
    else if (out >= str.length) {
    document.querySelector(".shuffle").textContent = '';
    clearInterval(t)
    }
    inc++;
};
t = setInterval(fanim, 2);

document.querySelector('.anim').textContent = '';

let nav =document.querySelector("#navi-bar")
