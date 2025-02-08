function getInput() {
    let n1 = Number(document.getElementById("first-number").value);
    let n2 = Number(document.getElementById("second-number").value);
    return [n1, n2];
}

function setOutput(number) {
    if (number < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = null;
    }
    document.getElementById("output").innerHTML = String(number);
}

function clearAll() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("first-number").value = ""
    document.getElementById("second-number").value = ""
}

function addition() {
    let [n1, n2] = getInput();
    setOutput(n1 + n2);
}

function subtraction() {
    let [n1, n2] = getInput();
    setOutput(n1 - n2);
}

function multiplication() {
    let [n1, n2] = getInput();
    setOutput(n1 * n2);
}

function division() {
    let [n1, n2] = getInput();
    setOutput(n1 / n2);
}

function power() {
    let [n1, n2] = getInput();
    let n = 1;
    for (let i = 0; i < n2; i++) {
        n = n * n1;
    }
    setOutput(n);
}