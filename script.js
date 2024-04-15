function somarnumero() {
    var Pnum = document.getElementById("Pnumm").value;
    var Pnumf = parseFloat(Pnum)
    var Snum = document.getElementById("Snumm").value;
    var Snumf =parseFloat(Snum)
    var soma
    soma = Pnumf + Snumf

    if (Pnum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Pnumm").style.backgroundColor = "#FFCCCC";
        
        
        
    }

    if (Snum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Snumm").style.backgroundColor = "#FFCCCC";

    }
    if (Snum!="" && Pnum!="") {
        alert (soma);
        document.getElementById("Pnumm").style.backgroundColor = "#CCFFE5";
        document.getElementById("Snumm").style.backgroundColor = "#CCFFE5";
    }


}

function subtrairnumero() {
    var Pnum = document.getElementById("Pnumm").value;
    var Pnumf = parseFloat(Pnum)
    var Snum = document.getElementById("Snumm").value;
    var Snumf =parseFloat(Snum)
    var sub
    sub = Pnumf - Snumf

    if (Pnum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Pnumm").style.backgroundColor = "#FFCCCC";
        
        
        
    }

    if (Snum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Snumm").style.backgroundColor = "#FFCCCC";

    }
    if (Snum!="" && Pnum!="") {
        alert (sub);
        document.getElementById("Pnumm").style.backgroundColor = "#CCFFE5";
        document.getElementById("Snumm").style.backgroundColor = "#CCFFE5";
    }
}
    
function multiplicarnumero() {
    var Pnum = document.getElementById("Pnumm").value;
    var Pnumf = parseFloat(Pnum)
    var Snum = document.getElementById("Snumm").value;
    var Snumf =parseFloat(Snum)
    var mult
    mult = Pnumf * Snumf

    if (Pnum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Pnumm").style.backgroundColor = "#FFCCCC";
        
        
        
    }

    if (Snum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Snumm").style.backgroundColor = "#FFCCCC";

    }
    if (Snum!="" && Pnum!="") {
        alert (mult);
        document.getElementById("Pnumm").style.backgroundColor = "#CCFFE5";
        document.getElementById("Snumm").style.backgroundColor = "#CCFFE5";
    }
}

function dividirnumero() {
    var Pnum = document.getElementById("Pnumm").value;
    var Pnumf = parseFloat(Pnum)
    var Snum = document.getElementById("Snumm").value;
    var Snumf =parseFloat(Snum)
    var div
    div = Pnumf / Snumf

    if (Pnum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Pnumm").style.backgroundColor = "#FFCCCC";
        
        
        
    }

    if (Snum=="") {
        alert ("Preencha os campos obrigatórios");
        document.getElementById("Snumm").style.backgroundColor = "#FFCCCC";

    }
    if (Snum!="" && Pnum!="") {
        alert (div.toFixed(2));
        document.getElementById("Pnumm").style.backgroundColor = "#CCFFE5";
        document.getElementById("Snumm").style.backgroundColor = "#CCFFE5";
    }
}