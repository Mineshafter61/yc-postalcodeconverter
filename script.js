function convertxz(){
    var x = document.getElementById("x");
    var z = document.getElementById("z");
    var code = document.getElementById("code");
    var xcode;
    var zcode;
    var final;
    if (z.value.length>0 && x.value.length>0){
        error.style.display="none";
        xcode = Math.abs(parseInt(x.value)).toString(36).toUpperCase();
        zcode = Math.abs(parseInt(z.value)).toString(36).toUpperCase();
        console.log(xcode, zcode)
        xcode = addzero(xcode);
        zcode = addzero(zcode);
        // x.value<0 ? xcode="-"+xcode : xcode="+"+xcode;
        // z.value<0 ? zcode="-"+zcode : zcode="+"+zcode;

        let xfinal = xcode.slice(-1).charCodeAt(0);
        let zfinal = zcode.slice(-1).charCodeAt(0);
        xfinal <= 57 ? xfinal -= 48 : xfinal -= 55;
        zfinal <= 57 ? zfinal -= 48 : zfinal -= 55;
        let finals = [["0", "G", "I", "P", "R", "Y"], ["T", "1", "B", "4", "K", "7"], ["U", "A", "C", "J", "L", "S"], ["W", "2", "E", "5", "N", "8"], ["X", "D", "F", "M", "O", "V"], ["3", "H", "6", "Q", "9", "Z"]];
        final = finals[Math.ceil(xfinal / 6)][Math.ceil(zfinal / 6)];

        xcode = xcode.slice(0, -1);
        zcode = zcode.slice(0, -1);
        code.value = xcode+zcode+"+"+final;
    } else if (x.value.length>0 || z.value.length>0) {
        error.style.display="flex";
        error.innerHTML="<h2>Error</h2><p>Please enter both X and Z values.</p>";
    }
}

function addzero(str){
    return "0".repeat(3-str.length)+str;
}

function convert36(){
    var x = document.getElementById("x");
    var z = document.getElementById("z");
    var code = document.getElementById("code");
    var error = document.getElementById("error");
    var xcode;
    var zcode;
    if (code.value.length==6){
        error.style.display="none";
        xcode = code.value.substring(0,3);
        zcode = code.value.substring(3,6);
        console.log(xcode, zcode);
        x.value = -parseInt(xcode,36);
        z.value = parseInt(zcode,36);
    } else if (code.value.length==8){
        error.style.display="none";
        xcode = code.value.substring(0,4);
        zcode = code.value.substring(4,8);
        console.log(xcode, zcode);
        x.value = parseInt(xcode,36);
        z.value = parseInt(zcode,36);
    } else {
        error.style.display="flex";
        error.innerHTML="<h2>Error</h2><p>Postal Code needs to be 6 or 8 characters long.</p>";
    }
}
