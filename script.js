const secondHand=document.getElementById('second-hand');
const minuteHand=document.getElementById('minute-hand');
const houeHand=document.getElementById('hour-hand');

function clockTick(){
    const date=new Date();
    const second = date.getSeconds()/60;
    const minute = (second + date.getMinutes()) /60;
    const hour =(minute + date.getHours()) /12;
    rotateclockHand(secondHand, second);
    rotateclockHand(minuteHand,minute);
    rotateclockHand(houeHand,hour);
}
function rotateclockHand(element,rotation){
    element.style.setProperty('--rotate',rotation * 360);
}
setInterval(clockTick,1000)