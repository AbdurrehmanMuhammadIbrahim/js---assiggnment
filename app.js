function num(number){
    var screen = document.getElementById("screen");
    screen.value += number;
}
function val(number){
    var screen = document.getElementById("screen");
    screen.value += number;
}
function result(){
    var screen = document.getElementById('screen');
    screen.value = eval(screen.value);
}
function clr(clear){
    var screen = document.getElementById('screen');
    screen.value = clear;
}