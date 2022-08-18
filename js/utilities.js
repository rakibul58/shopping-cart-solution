function getNewNumber(isIncreased , oldNumberId)
{
    const oldNumberElement = document.getElementById(oldNumberId);
    const oldNumberString = oldNumberElement.value;
    const oldNumberInt = parseInt(oldNumberString);

    if(!isIncreased && oldNumberInt < 1)
    {
        return 0;
    }

    else if(isIncreased){
        const newNumberInt = oldNumberInt + 1;
        return newNumberInt;
    }
    else{
        const newNumberInt = oldNumberInt - 1;
        return newNumberInt;
    }
}

function setValue(elementId , newNumber)
{
    const outputField = document.getElementById(elementId);
    outputField.value = newNumber;
}
function setValueText(elementId , newNumber)
{
    const outputField = document.getElementById(elementId);
    outputField.innerText = newNumber;
}

function setPrice(elementId , newNumber , price)
{
    const priceField = document.getElementById(elementId);
    priceField.innerText = newNumber*price;
}

function getFloatValue(elementId)
{
    const valueElement = document.getElementById(elementId);
    const valuestring = valueElement.innerText;
    const valueFloat = parseFloat(valuestring);
    return valueFloat;
}

function calculate()
{
    const totalPhonePrice = getFloatValue('price-field');
    const totalCasePrice = getFloatValue('price-field-case');
    const subtotalAmount = totalCasePrice + totalPhonePrice;
    setValueText('subtotal-amount' , subtotalAmount);
    const taxAmountString = (subtotalAmount * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setValueText('tax-amount' , taxAmount);
    const totalAmount = subtotalAmount + taxAmount ;
    setValueText('total-amount' , totalAmount);
}