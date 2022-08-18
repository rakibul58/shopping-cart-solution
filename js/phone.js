document.getElementById('phone-increase-btn').addEventListener('click' , function(){

    const newNumber = getNewNumber(true , 'phone-number');
    setValue('phone-number' , newNumber);
    setPrice('price-field' , newNumber , 1219);
    calculate();

})
document.getElementById('phone-decrease-btn').addEventListener('click' , function(){

    const newNumber = getNewNumber(false , 'phone-number');
    setValue('phone-number' , newNumber);
    setPrice('price-field' , newNumber , 1219);
    calculate();

})