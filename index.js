var num1 ;
var num2 ;
var num3 ;
var num4 ;
num1 = document.getElementsByClassName('num1')[0];
num2 = document.getElementsByClassName('num2')[0];
num3 = document.getElementsByClassName('num3')[0];
num4 = document.getElementsByClassName('num4')[0];
function getValue(){if(num2.value > 0 && num3.value > 0 && num4.value > 0){num1.value = num2.value*num3.value/num4.value ; return num1.value ;}
                    else if(num3.value > 0 && num4.value > 0 && num1.value > 0){num2.value = num1.value*num4.value/num3.value ;  return num2.value ;}
                    else if(num4.value > 0 && num1.value > 0 && num2.value > 0){num3.value = num1.value*num4.value/num2.value ;  return num3.value ;}
                    else if(num1.value > 0 && num2.value > 0 && num3.value > 0){num4.value = num2.value*num3.value/num1.value ;  return num4.value ;}}
function reload(){window.location.reload()}