const today = new Date();
console.log(today)

let dd = today.getDay();
console.log(dd);
let dt = today.getDate();
console.log(dt);
let mth = today.getMonth() + 1;
console.log(mth);
let yr = today.getFullYear();
console.log(yr);

if(dt < 10) {
   dt = "0" + dt;
}

if(mth < 10) {
    mth = "0" + mth;
}

let dat = dt + "/" + mth + "/" + yr;
console.log(dat);
document.getElementById("date").innerHTML = dat;