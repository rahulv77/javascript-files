console.log('this is a clock');


function updateclock(){
let today=new Date();
let h=today.getHours();
let m=today.getMinutes();
let s=today.getSeconds();

let currentstats=(h<12)? "AM":"PM";
let currentTime=h+":"+m+":"+s+":"+" "+currentstats;
document.getElementById('clock').innerHTML=currentTime;
}