let body = document.getElementById('body');


function red(){
    body.style.backgroundColor = 'red';
}
function green(){
    body.style.backgroundColor = 'green';
}
function blue(){
    body.style.backgroundColor = 'blue';
}
function random(){
    let val1 = Math.floor(Math.random() * 256)
    let val2 = Math.floor(Math.random() * 256)
    let val3 = Math.floor(Math.random() * 256)
    body.style.backgroundColor = `rgb(${val1},${val2},${val3})`
}