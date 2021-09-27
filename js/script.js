
function mClock(){
    let all = new Date()
    let h = all.getHours()
    let m = all.getMinutes()
    let s = all.getSeconds()
    let day = "am"
    if( h == 0){
        h =12
    }
    if(h > 12){
        h = h-12
        day = "pm"
    } 
    if(m < 10){
        m = "0" + m
    }
    if(s < 10){
        s = "0" + s
    }
    document.querySelector(".clock").innerHTML = `${h} : ${m} : ${s} ${day}`
    
}
setInterval(()=>{
    mClock()
})