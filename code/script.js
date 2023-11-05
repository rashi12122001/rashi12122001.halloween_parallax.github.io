let stars=document.getElementById('starry');
let moon=document.getElementById('moon');
let background=document.getElementById('background');
let house=document.getElementById('house');
let text=document.getElementById('text');
let hallo=document.getElementById('hallo');

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    stars.style.left=value*0.25+ 'px';
    moon.style.top=value*0.7 + 'px';
    hallo.style.top=value*0.5 + 'px';
    // text.style.marginRight=value*4 + 'px';
});