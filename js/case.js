document.getElementById('case-increase-btn').addEventListener('click' , function(){

    const newNumber = getNewNumber(true , 'case-number');
    setValue('case-number' , newNumber);
    setPrice('price-field-case' , newNumber , 59);
    calculate();

})
document.getElementById('case-decrease-btn').addEventListener('click' , function(){

 
    const newNumber = getNewNumber(false , 'case-number');
    setValue('case-number' , newNumber);
    setPrice('price-field-case' , newNumber , 59);
    calculate();

})