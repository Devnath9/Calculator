function plus() {
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    document.getElementById('output').value = a+b;
}
function minus() {
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    document.getElementById('output').value = a-b;
}
function multi() {
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    document.getElementById('output').value = a*b;
}
function divide() {
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    document.getElementById('output').value = a/b;
}