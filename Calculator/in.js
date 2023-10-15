// let displayValue = '';

function appendValue(value) {
    // displayValue += value;
    // document.getElementById('display').value = displayValue;
    document.getElementById('display').value += value;
}

function clearDisplay() {
    // displayValue = '';
    // document.getElementById('display').value = '';
    document.getElementById('display').value = ''
}

function deleteChar() {
    // displayValue = displayValue.slice(0,-1)
    // document.getElementById('display').value = displayValue;
    document.getElementById('display').value = document.getElementById('display').value.slice(0,-1)
}

function calculate() {
    try {
        // const result = eval(displayValue);
        // document.getElementById('display').value = result;
        // displayValue = result.toString();
        document.getElementById('display').value = eval(document.getElementById('display').value)
    } catch (error) {
        // document.getElementById('display').value = 'Error';
        // displayValue = '';
        document.getElementById('display').value = 'Error';
    }
}
