const PATTERN_COLOR_3_DIGITS = /^([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/;
const PATTERN_COLOR_6_DIGITS = /^([A-Fa-f0-9]{6})$/;

function hexToRgb() {
    let hex = document.getElementById('hex');
    let rgb = document.getElementById('rgb');
    let hexValue = hex.value;
    if (verifyPattern(hexValue)) {
        hex.className = "form-control is-valid"
        hexValue = convert3To6HexDigits(hexValue);
        let r = parseInt(hexValue.substring(0, 2), 16);
        let g = parseInt(hexValue.substring(2, 4), 16);
        let b = parseInt(hexValue.substring(4, 6), 16);
        document.body.style.background = `rgb(${r},${g},${b})`;
        return rgb.value = `rgb(${r},${g},${b})`;
    }
    hex.className = "form-control is-invalid";
}

function verifyPattern(hex){
    return (hex.match(PATTERN_COLOR_3_DIGITS) || hex.match(PATTERN_COLOR_6_DIGITS));
}

function convert3To6HexDigits(hex){
    if(hex.match(PATTERN_COLOR_3_DIGITS)) return hex.replace(PATTERN_COLOR_3_DIGITS, "$1$1$2$2$3$3");
    return hex;
}
