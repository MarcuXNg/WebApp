function findlargestnumber() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var num5 = parseFloat(document.getElementById('num5').value);
    if (isNaN(num1)) {
        alert("invalid number")
    }
    else if (isNaN(num2)) {
        alert("invalid number")
    }
    else if (isNaN(num3)) {
        alert("invalid number")
    }
    else if (isNaN(num4)) {
        alert("invalid number")
    }
    else if (isNaN(num5)) {
        alert("invalid number")
    }
    else {
        var largest = Math.max(num1, num2, num3, num4, num5)
        alert(largest);
    }
}