const form= document.getElementById('form');
const swap= document.querySelector('.swap');
const main__title= document.querySelector('.main__title');
const form__description= document.querySelector('.form__description');
const title= document.querySelector('.title');
const answerVal= document.querySelector('.ansname');
const num= document.getElementById('val');

let swapVal= 'foot';

//submit function
form.addEventListener('submit', function(Event){
 event.preventDefault();
 
const value=parseFloat(document.getElementById('val').value);
if (value){
  
  if(swapVal === 'foot'){
  
const answer= (value * 30.48).toFixed(2);
answerVal.innerHTML=`${value} foot = ${answer} centimeter`;
}
else{
  const answer= (value * 0.0328084).toFixed(2);
answerVal.innerHTML=`${value} centimeter = ${answer} foot`;
}}
else{
  answerVal.innerHTML="Please input a Number";
}
 
 
});

//click function
swap.addEventListener('click', function(Event){
 event.preventDefault();
 
 num.value= (1);
 
 if(swapVal === 'foot'){
 swapVal= 'centimeter';
 }
 else{ swapVal='foot';
 }
 
 if(swapVal ==='foot' ){
 title.innerHTML='Foot to Centimeter Converter';
 form__description.innerHTML='Foot Value:';
 main__title.innerHTML='Enter the length in foot  to get the value converted to centimeter.'; 
 answerVal.innerHTML=`1 foot = 30.48 centimeter`;
   
 }
 else{
   title.innerHTML='Centimeter to Foot Converter';
 form__description.innerHTML='Centimeter Value:';
 main__title.innerHTML='Enter the length in centimeter to get the value converted to foot.';
 
 answerVal.innerHTML=`1 centimeter = 0.0328084 foot`;
 }
});