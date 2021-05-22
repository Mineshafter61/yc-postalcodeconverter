function convertxz(){
    var x = document.getElementById("x");
    var z = document.getElementById("z");
    var code = document.getElementById("code");
    var xcode;
    var zcode;
    if (z.value.length>0){
        error.style.display="none";
        xcode = Math.abs(parseInt(x.value)).toString(36).toUpperCase();
        zcode = Math.abs(parseInt(z.value)).toString(36).toUpperCase();
        console.log(xcode, zcode)
        xcode = addzero(xcode);
        zcode = addzero(zcode);
        x.value<0 ? xcode="-"+xcode : xcode="+"+xcode;
        z.value<0 ? zcode="-"+zcode : zcode="+"+zcode;
        code.value = xcode+zcode;
    } else if (x.value.length>0) {
        error.style.display="flex";
        error.innerHTML="<h2>Error</h2><p>Please enter a Z value.</p>";
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