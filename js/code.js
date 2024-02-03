'use strict';

var elementToWriteIn = document.getElementById('write-div');

$('.header').height(window.innerHeight - 160);

$(window).on('resize',function(){
    $('.header').height(window.innerHeight - 160);
})

var n = 0;
var textToWrite = "I'am a full-stack web developer , love everything about code , also love node.js , i solve problems ...";
var textToWriteArr = textToWrite.split(',');

writeText(elementToWriteIn,textToWriteArr[0],80);
var timer_01 = setTimeout(function(){
    clearText(elementToWriteIn,40)
},4480);
var timer_02 = setTimeout(function(){
    writeText(elementToWriteIn,textToWriteArr[1],80);
},3480*2);
var timer_03 = setTimeout(function(){
    clearText(elementToWriteIn,40)
},3480*3+2);
var timer_04 = setTimeout(function(){
    writeText(elementToWriteIn,textToWriteArr[2],80);
},3480*4);
var timer_05 = setTimeout(function(){
    clearText(elementToWriteIn,40);
},3480*5+2);
var timer_06 = setTimeout(function(){
    writeText(elementToWriteIn,textToWriteArr[3],80);
},3480*6);
function writeText(element,text,t){
    var n = 0;
    var write = setInterval(function(){
        if( n !== text.length ){
            element.innerHTML += text[n];
            n++;
        }else{
            clearInterval(write);
        }
    },t)
}

function clearText(element,t){
    var n = element.innerHTML.length;
    var clear = setInterval(function(){
        if( n > 0 ){
            element.innerHTML = element.innerHTML.slice(0,-1);
            n--;
        }else{
            clearInterval(clear);
        }
    },t)
}

