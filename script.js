function convertxz(){
    var x = document.getElementById("x");
    var z = document.getElementById("z");
    var code = document.getElementById("code");
    var xcode;
    var zcode;
    if (z.value.length>0){
        xcode = Math.abs(parseInt(x.value)).toString(36).toUpperCase();
        zcode = Math.abs(parseInt(z.value)).toString(36).toUpperCase();
        console.log(xcode, zcode)
        xcode = addzero(xcode);
        zcode = addzero(zcode);
        code.value = xcode+zcode;
    }
}

function addzero(str){
    return "0".repeat(3-str.length)+str;
}

function convert36(){
    var x = document.getElementById("x");
    var z = document.getElementById("z");
    var code = document.getElementById("code");
    var xcode;
    var zcode;
    if (code.value.length==6){
        xcode = code.value.substring(0,3);
        zcode = code.value.substring(3,6);
        console.log(xcode, zcode);
        x.value= -parseInt(xcode,36);
        z.value= parseInt(zcode,36);
    }
}