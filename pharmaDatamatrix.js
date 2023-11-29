import GTIN from "./gs1GTIN.js";

function pharmaDatamatrix(barcode) {
    if (barcode.startsWith(']d2')) {
        barcode = barcode.slice(3)
        console.log(GTIN(barcode));
}
    else if (['01', '21', '17', '10', '71', '11'].includes(barcode.slice(0,2))) {
        console.log(GTIN(barcode));
        }
    else {
        return {'ERROR': 'INVALID BARCODE'}
    }
}

// Test barcode with GS1 separators
// let barcode = pharmaDatamatrix("01443556547871161724011310TEST3C7E76935A\x1D21PK136A35CA8D45A2845\x1D710RER33456")
// let barcode1 = pharmaDatamatrix("010501261701331610CO639\x1D112305221726053121899123306857")

