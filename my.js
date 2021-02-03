function tinhdiem(){
let uutien = document.getElementById('uutien').value;
let diemcong;
switch(uutien){
    case "KV1":
    diemcong = 0.75;
    break;
    case "KV2":
        diemcong = 0.5;
        break;
        case "KV2-NT":
            diemcong = 0.25;
            break;
            case "KV3":
                diemcong = 0;
                break;
}
let diemtoan = parseInt(document.getElementById('diemtoan').value);
let diemvan = parseInt(document.getElementById('diemvan').value);
let diemanh = parseInt(document.getElementById('diemanh').value);
diemtong = diemtoan + diemvan + diemanh + diemcong;
document.getElementById('result').innerHTML= diemtong;

}