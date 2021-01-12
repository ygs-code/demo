var num1 = 1.234;
var num2 = 19.4;
var num3 = 0.123;
 
const checkNum=(num)=>{
    console.log('原始num=',num)  
    // var reg1=/(^0\.0+[1-9]+)|(^0\.\d{2})|(^\d{1}.\d{1})|(^[1-9]\d*)/ig
    var reg =/^0\.0*[1-9]{1}/ig
    num=num.toString()
    var   num1 =  num.match(reg)
    //  console.log('  num1========',  num1 );
    if(  num1&&(num1=num1[0])&&num1.length>=4){
        //  console.log('  num1========',  num1 );
       return  num1 
    }

    //    num =  num.toString() 
    // if(num){
    //     num=num[0]
        num= num.replace(/(^0\.0*)|(\.)/ig,'')
        num=num.substr(0,2)
    // }
    return num
}


console.log('num1=',checkNum(num1));
console.log('num2=', checkNum(num2));
console.log('num3=', checkNum(num3));
console.log('num4=', checkNum(4));
console.log('num5=', checkNum(0.23423));
console.log('num6=', checkNum(0.0000093423));
console.log('num7=', checkNum(0.000000000000000007861));
console.log('num8=', checkNum(0.000000000000000001));


 