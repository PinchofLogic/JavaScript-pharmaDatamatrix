# pharma_datamatrix package
The package allow users to pass the string produced by the 2D barcode scanners and parse the string into GTIN, PPN, EXPIRY, SERIAL, BATCH and NHRN.

# Files
pharmaDatamatrix.js: Primary function that checks the barcode string format and inturn calls relevant parsing logic function. (Currently on GS1 GTIN is supported)

gs1GTIN.js: Parse the GS1 GTIN barcode string.
