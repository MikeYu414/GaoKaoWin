function show() {      
 
    var funtureDate = new Date("2023-06-07 09:00:00");
    setInterval(function () {
        var presentDate = new Date(); 
        var funtureTime = funtureDate.getTime(); 
        var presenTime = presentDate.getTime();
        var allTime = funtureTime - presenTime;          
        var allSecond = parseInt(allTime / 1000);
        var day = size(parseInt(allSecond / 3600 / 24));
        var hour = size(parseInt(allSecond / 3600 % 24));
        var minute = size(parseInt(allSecond / 60 % 60));
        var second = size(parseInt(allSecond % 60));
        document.getElementById('one').innerHTML = day;
        document.getElementById('two').innerHTML = hour;
        document.getElementById('three').innerHTML = minute;
        document.getElementById('four').innerHTML = second;
    }, 1000);
    function size(num) {
        return num < 10 & num >= 0 ? '0' + num : num;
    }  
}

function dateFormat(data){
    var date = new Date(data);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    return YY + MM + DD;
}

function getImg(){
    var num = getRandom(9) + 1;
    $(".back-img").attr("src",num + ".jpg");
}
function getRandom(max){
    return Math.floor(Math.random()*(max+1));
}

window.onload = function () {
    getImg();
    show();
}