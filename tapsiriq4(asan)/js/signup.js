$(document).ready(function(){
    let i=1;
    $("#submit").click(function(e){
        e.preventDefault();
        i=Number(localStorage.getItem("number")) +1;
        // localStorage.setItem("total",$("#name").val());
        localStorage.setItem(`user${i}-name`,$("#name").val());
        localStorage.setItem(`user${i}-email`,$("#email").val());
        localStorage.setItem(`user${i}-password`,$("#password1").val());
        localStorage.setItem(`number`,i);
    })
});