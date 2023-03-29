let div = document.getElementById('mydiv');
let btn = document.getElementById('btn');

btn.addEventListener('click',buttonClicked,); // by defalut false means bubblig propagation
div.addEventListener('click',divClicked);
document.body.addEventListener('click',bodyClicked,);
// btn.addEventListener('click',buttonClicked,true); // true menas capturing propagation
// div.addEventListener('click',divClicked,true);
// document.body.addEventListener('click',bodyClicked,true);


function buttonClicked(event){
    console.log('button clicked');
    event.stopPropagation();
}
function divClicked(){
    console.log('div clicked');
}
function bodyClicked(){
    console.log('body clicked');
}