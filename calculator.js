var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const Coordinate = [75, 200, 325, 450, 575, 700];
ctx.fillStyle = "orange";



for (let i1=0; i1<Coordinate.length; i1++){
    for (let i2=0; i2<Coordinate.length - 2; i2++){
        ctx.fillRect(Coordinate[i1], Coordinate[i2], 75, 75);
    }
}

ctx.font = "60px Arial";
ctx.fillStyle = "black";
ctx.fillText("+", Coordinate[3] + 20, Coordinate[0] + 60);
ctx.fillText("-", Coordinate[3] + 27, Coordinate[1] + 55);
ctx.fillText("*", Coordinate[3] + 25, Coordinate[2] + 70);
ctx.fillText("/", Coordinate[3] + 27, Coordinate[3] + 60);
ctx.fillText("=", Coordinate[2] + 20, Coordinate[3] + 60);
ctx.fillText("1", Coordinate[0] + 20, Coordinate[0] + 60);
ctx.fillText("2", Coordinate[1] + 20, Coordinate[0] + 60);
ctx.fillText("3", Coordinate[2] + 20, Coordinate[0] + 60);
ctx.fillText("4", Coordinate[0] + 20, Coordinate[1] + 60);
ctx.fillText("5", Coordinate[1] + 20, Coordinate[1] + 60);
ctx.fillText("6", Coordinate[2] + 20, Coordinate[1] + 60);
ctx.fillText("7", Coordinate[0] + 20, Coordinate[2] + 60);
ctx.fillText("8", Coordinate[1] + 20, Coordinate[2] + 60);
ctx.fillText("9", Coordinate[2] + 20, Coordinate[2] + 60);
ctx.fillText("0", Coordinate[0] + 20, Coordinate[3] + 60);
ctx.fillText("C", Coordinate[4] + 15, Coordinate[0] + 60);
ctx.fillText("(", Coordinate[4] + 25, Coordinate[1] + 55);
ctx.fillText(")", Coordinate[4] + 25, Coordinate[2] + 55);
ctx.fillText("^", Coordinate[4] + 25, Coordinate[3] + 65);
ctx.fillText("%", Coordinate[5] + 10, Coordinate[0] + 60);

ctx.font = "45px Arial";
ctx.fillText("ln", Coordinate[5] + 20, Coordinate[1] + 55);
ctx.fillText("log", Coordinate[5] + 10, Coordinate[2] + 55);

ctx.font = "90px Arial";
ctx.fillText(".", Coordinate[1] + 25, Coordinate[3] + 60);
ctx.fillText(",", Coordinate[5] + 25, Coordinate[3] + 55);



document.getElementById("final").innerHTML = "Placeholder";

function Update(char){
     if (char == "Clear"){
        document.getElementById("final").innerHTML = "Placeholder"}
     else if (document.getElementById("final").innerHTML == "Placeholder"){
        document.getElementById("final").innerHTML = char;}
     else {document.getElementById("final").innerHTML += char;}
}
function logbase(b, a=10){
    return Math.log(a)/Math.log(b)
}

function equals(){
    Ans = document.getElementById("final").innerHTML;
    Ans = Ans.replace("^", "**").replace("log", "logbase").replace("ln", "Math.log");
    FinalAns = eval(Ans);
    document.getElementById("final").innerHTML = String(FinalAns);
}

canvas.addEventListener('click', function(event){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    if (Coordinate[0] <= x && x <= Coordinate[0] + 75){
        if (Coordinate[0] <= y && y <= Coordinate[0] + 75){Update("1");}
        else if (Coordinate[1] <= y && y <= Coordinate[1] + 75){Update("4");}
        else if (Coordinate[2] <= y && y <= Coordinate[2] + 75){Update("7");}
        else if (Coordinate[3] <= y && y <= Coordinate[3] + 75){Update("0");}
    } else if (Coordinate[1] <= x && x <= Coordinate[1] + 75){
        if (Coordinate[0] <= y && y <= Coordinate[0] + 75){Update("2");}
        else if (Coordinate[1] <= y && y <= Coordinate[1] + 75){Update("5");}
        else if (Coordinate[2] <= y && y <= Coordinate[2] + 75){Update("8");}
        else if (Coordinate[3] <= y && y <= Coordinate[3] + 75){Update(".");}
    } else if (Coordinate[2] <= x && x <= Coordinate[2] + 75){
        if (Coordinate[0] <= y && y <= Coordinate[0] + 75){Update("3");}
        else if (Coordinate[1] <= y && y <= Coordinate[1] + 75){Update("6");}
        else if (Coordinate[2] <= y && y <= Coordinate[2] + 75){Update("9");}
        else if (Coordinate[3] <= y && y <= Coordinate[3] + 75){equals();}
    }else if (Coordinate[3] <= x && x <= Coordinate[3] + 75){
        if (Coordinate[0] <= y && y <= Coordinate[0] + 75){Update("+");}
        else if (Coordinate[1] <= y && y <= Coordinate[1] + 75){Update("-");}
        else if (Coordinate[2] <= y && y <= Coordinate[2] + 75){Update("*");}
        else if (Coordinate[3] <= y && y <= Coordinate[3] + 75){Update("/");}
    }else if (Coordinate[4] <= x && x <= Coordinate[4] + 75){
        if (Coordinate[0] <= y && y <= Coordinate[0] + 75){Update("Clear");}
        else if (Coordinate[1] <= y && y <= Coordinate[1] + 75){Update("(");}
        else if (Coordinate[2] <= y && y <= Coordinate[2] + 75){Update(")");}
        else if (Coordinate[3] <= y && y <= Coordinate[3] + 75){Update("^");}
    }else if (Coordinate[5] <= x && x <= Coordinate[5] + 75){
        if (Coordinate[0] <= y && y <= Coordinate[0] + 75){Update("%");}
        else if (Coordinate[1] <= y && y <= Coordinate[1] + 75){Update("ln");}
        else if (Coordinate[2] <= y && y <= Coordinate[2] + 75){Update("log");}
        else if (Coordinate[3] <= y && y <= Coordinate[3] + 75){Update(",");}
    }
    
}, false);

document.addEventListener('keydown', function(event) {
    switch(event.key){
        case "1": Update("1"); break;
        case "2": Update("2"); break;
        case "3": Update("3"); break;
        case "4": Update("4"); break;
        case "5": Update("5"); break;
        case "6": Update("6"); break;
        case "7": Update("7"); break;
        case "8": Update("8"); break;
        case "9": Update("9"); break;
        case "0": Update("0"); break;
        case "+": Update("+"); break;
        case "-": Update("-"); break;
        case "*": Update("*"); break;
        case "/": Update("/"); break;
        case "^": Update("^"); break;
        case "%": Update("%"); break;
        case ".": Update("."); break;
        case ",": Update(", "); break;
        case "=": equals(); break;
        case "c": Update("Clear"); break;
        case "C": Update("Clear"); break;
        case "Backspace": Update("Clear"); break;
        case "(": Update("("); break;
        case ")": Update(")"); break;
    }

}, true);