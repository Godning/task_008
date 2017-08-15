function getbarcode() {
    return ["||:::",":::||","::|:|","::||:",":|::|",":|:|:",":||::","|:::|","|::|:","|:|::"];
}

function build_barcode(arr) {
    let str = "|";
    let num = 0;
    let barcode = getbarcode();
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        if(obj == '-'){
            continue;
        }
        var tmp = Number(arr[i])
        num += tmp;
        str += barcode[tmp];
    }
    str += barcode[num%10];
    str += '|';
    return str;
}

function barcode_find(arr, i) {
    let barcode = getbarcode();
    for (var j = 0; j < barcode.length; j++) {
        let flag = 1;
        var obj = barcode[j];
        for (var k = 0; k < obj.length; k++) {
            if(arr[i+k] != barcode[j][k]){
                flag = 0;
                break;
            }
        }
        if(flag){
            return j;
        }
    }
    return -1;
}
function build_postnum(arr) {
    let str = "";
    let loc = -1;
    for (var i = 0; i < arr.length; i+=5) {
        loc = barcode_find(arr,i)
        if(loc != -1){
            str += loc;
        }
        if(i == 20 && i+5 < arr.length){
            str += "-";
        }
    }
    return str;
}
function main(arr){

    if(arr.length < 1){
        return "";
    }

    if(arr[0] == "|"){
        let barcode = "";
        for (var i = 1; i < arr.length-6; i++) {
            barcode += arr[i];
        }
        return build_postnum(barcode);
    }else {
        return build_barcode(arr);
    }

}

module.exports = main;
