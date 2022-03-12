let result = {'SCHEME': 'GTIN'};
let index;
let GS = String.fromCharCode(29);
export default function GTIN(barcode) {
    if(barcode.includes(GS)){
       while (barcode !== null){
            if(barcode.slice(0,2) === "01"){
                result['GTIN'] = barcode.slice(2,16);
                if(barcode.length > 16) {
                    barcode = barcode.slice(16)
                }
                else
                    barcode = null;
            }
            else if(barcode.slice(0,2) === "17"){
                result['EXPIRY'] = barcode.slice(2,8);
                if(barcode.length > 8) {
                    barcode = barcode.slice(8)
                }
                else
                    barcode = null;
            }
            else if(barcode.slice(0,2) === "10"){
                if (barcode.includes(GS)){
                   index = barcode.indexOf(GS);
                   result['BATCH'] = barcode.slice(2,index);
                   barcode = barcode.slice(index+1);
                        }
                else {
                    result['BATCH'] = barcode.slice(2);
                    barcode = null;
                }
                    }
            else if(barcode.slice(0,2) === "21"){
                if (barcode.includes(GS)){
                    index = barcode.indexOf(GS);
                    result['SERIAL'] = barcode.slice(2,index);
                    barcode = barcode.slice(index+1);
                        }
                else {
                    result['SERIAL'] = barcode.slice(2);
                    barcode = null;
                }
                    }
            else if(['710', '711', '712', '713', '714'].includes(barcode.slice(0,3))){
                if (barcode.includes(GS)){
                    index = barcode.indexOf(GS);
                    result['NHRN'] = barcode.slice(3,index);
                    barcode = barcode.slice(index+1);
                        }
                else {
                    result['NHRN'] = barcode.slice(3);
                    barcode = null;
                }
                    }
                }
                return result;
            }
            else
                return "INVALID BARCODE: NO GS Seperator"
               
            }
            


