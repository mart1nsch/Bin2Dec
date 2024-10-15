const binaryInput = document.getElementById("binary");
const decimalField = document.getElementById("decimal");

binaryInput.addEventListener("keyup", () => {
    const calculate = validateNumber(binaryInput.value.toString());

    if (calculate){
        returnDecimal(binaryInput.value.toString());
    }
})

function validateNumber(binaryValue){
    if (binaryValue.slice(-1) != 0 && binaryValue.slice(-1) != 1){
        binaryInput.value = binaryValue.slice(0, -1);

        alert("Somente números 0 e 1 são aceitos!");

        return false;
    }

    return true;
}

function returnDecimal(binaryValue){
    let priorValue = 0;

    for (let i=0; i<binaryValue.length; i++){
        const binaryNumber = Number(binaryValue.slice(i, (i + 1)));
        
        priorValue = priorValue * 2 + binaryNumber;
    }

    decimalField.innerHTML = priorValue;
}