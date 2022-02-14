var array = [10, 20, 30]; 
 
var double = array.map( 
  
  function doubleNumber( currentValue ) {
    return currentValue +20 ;

  }
);

console.log(double)

//2 пример:


 const arraySecond = [0, 2, 3, 4, 5, 6, 7, 8, 9]
 const arrayDouble = arraySecond.map((num) => {
  return num + 20
})
console.log(arrayDouble);
///


//2 задача 

// let num = [1,2,3,4]
// function getSum(){
//    if (num ===1){
//        console.log('zima')
//    }
   

//     else if (num ===2){
//        console.log('vesna')
//     }
    
    
//     else if (num ===3){
//      console.log('leto')
//     }
//     else if (num ===4){
//       console.log('osen')
//     }
// }
  
//     console.log(1)
   

l
// let result;{
//   function getSum(){
//     if (num === 1){
//        return 'leto'
//     }
   
//    else if (num === 2){
//   return 'vesna' 
//    }
//    else if (num === 3){
//      return 'osen '
//     }
    
//   }
  
// }


//4
const obj = {green: 'зеленый', red: 'красный',blue: 'голубой'}
for (variable in obj) {
  console.log(variable + ' = ' + obj[variable] )
}
//3

let num = 2;
switch (num) {
case 1:
result = 'зима';
break;
case 2:
result = 'весна';
break;
case 3:
result = 'лето';
break;
case 4:
result = 'осень';
break;
}

console.log(result);
//


