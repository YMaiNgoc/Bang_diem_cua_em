function myFunction1() {
    var a = document.getElementById('se1').value;
    a = parseFloat(a);
    var b = document.getElementById('se2').value;
    b = parseFloat(b);
    var c = document.getElementById('select');
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var k;
    switch (value) {
        case 1:
                k = (a + (b * 2)) / 3;
                break;
            
        case 2:
                k = ((a * 2) + (b * 2)) / 5;
                break;
        case 3:
                k = ((a * 3) + (b * 4)) / 7;
                break;
            
    }
    k = parseFloat(k);
    document.getElementById('result').value = k;
    if (k >= 9) {
        document.getElementById('display').innerHTML = "Học sinh giỏi";
        document.getElementById('display').style.color = "red";
    }
    else if (k >= 7 && k < 9) {
        document.getElementById('display').innerHTML = "Học sinh khá";
        document.getElementById('display').style.color = "blue";
    }
    if (k >= 5 && k < 7) {
        document.getElementById('display').innerHTML = "Học sinh trung bình";
        document.getElementById('display').style.color = "yellow";
    } 


}
function myFunction2() {
    document.getElementById('se1').value = "";
    document.getElementById('se2').value = "";

}