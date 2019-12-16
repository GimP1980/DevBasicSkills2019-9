function buttonPressed(){
    const fromSystem = document.getElementById("fromSelector");
    const toSystem = document.getElementById( "toSelector" );
    var toIndex = toSystem.options[toSystem.selectedIndex].value ;
    var selectIndex = fromSystem.options[fromSystem.selectedIndex].value ;
    var givenNumber = document.getElementById( "inputField" ).value;
    var givenNumberDec = Number(document.getElementById("inputField").value) ;
    var result =  document.getElementById( "conversionResult" );

    if (selectIndex == "dec" && toIndex == "bin"){
        var convResult = givenNumberDec.toString(2);
        result.innerHTML = givenNumberDec + " in binary is: " + convResult ;
        if (isNaN(givenNumberDec)){
            result.innerHTML = "Wrong input!"
        }
    }
    else if (selectIndex == "dec" && toIndex == "oct"){
        var convResult = givenNumberDec.toString(8)
        result.innerHTML = givenNumberDec + " in octal is: " + convResult ; 
        if (isNaN(givenNumberDec)){
            result.innerHTML = "Wrong input!"
        }      
    }
    else if (selectIndex == "dec" && toIndex == "hex"){
        var convResult = givenNumberDec.toString(16)
        result.innerHTML = givenNumberDec + " in hexadecimal is: " + convResult ;
        if (isNaN(givenNumberDec)){
            result.innerHTML = "Wrong input!"
        }       
    }
    else if (selectIndex == "bin" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + ""), 2) ;
        let resultBin = parseInt(binToDec, 10) ;

        if (isNaN(resultBin)){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("2") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("3") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("4") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("5") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("6") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("7") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("8") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("9") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else{
            result.innerHTML = givenNumber + " binary in decimal is: " + resultBin ;
        }
    }
    else if (selectIndex == "bin" && toIndex == "oct"){
        let binToOct = parseInt((givenNumber + "").replace(/[^01]/gi, ""), 2) ;
        let resultOct = parseInt(binToOct, 10).toString(8) ;
        
        if (isNaN(resultOct)){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("2") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("3") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("4") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("5") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("6") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("7") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("8") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("9") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else{
            result.innerHTML = givenNumber + " binary in octal is: " + resultOct ;
        }   
    }
    else if (selectIndex == "bin" && toIndex == "hex"){
        let binToHex = parseInt((givenNumber + "").replace(/[^01]/gi,""), 2) ;
        let resultHex = parseInt(binToHex, 10).toString(16) ;
        
        if ( givenNumber.includes("2") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("3") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("4") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("5") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("6") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("7") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("8") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else if ( givenNumber.includes("9") ){
            result.innerHTML = "Not a valid binary number!"
        }
        else{
            result.innerHTML = givenNumber + " binary in hexadecimal is: " + resultHex ;
        }   
    }
    else if (selectIndex == "oct" && toIndex == "bin"){
        let octToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(octToDec, 10).toString(2) ;

        if ( givenNumber.includes("8") ){
            result.innerHTML = "Not a valid octal number!"
        }
        else if ( givenNumber.includes("9") ){
            result.innerHTML = "Not a valid octal number!"
        }
        else if( isNaN(resultBin)){
            result.innerHTML = "Not a valid octal number!"
        }
        else{
            result.innerHTML = givenNumber + " octal in binary is: " + resultBin ;   
        }
    }
    else if (selectIndex == "oct" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(binToDec, 10) ;

        if ( givenNumber.includes("8") ){
            result.innerHTML = "Not a valid octal number!"
        }
        else if ( givenNumber.includes("9") ){
            result.innerHTML = "Not a valid octal number!"
        }
        else if( isNaN(resultBin)){
            result.innerHTML = "Not a valid octal number!"
        }
        else{
            result.innerHTML = givenNumber + " octal in decimal is: " + resultBin ;   
        }
    }
    else if (selectIndex == "oct" && toIndex == "hex"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(binToDec, 10).toString(16) ;

        if ( givenNumber.includes("8") ){
            result.innerHTML = "Not a valid octal number!"
        }
        else if ( givenNumber.includes("9") ){
            result.innerHTML = "Not a valid octal number!"
        }
        else if( isNaN(resultBin)){
            result.innerHTML = "Not a valid octal number!"
        }
        else{
            result.innerHTML = givenNumber + " octal in hexadecimal is: " + resultBin ;   
        }
    }
    else if (selectIndex == "hex" && toIndex == "bin"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10).toString(2) ;

        if(isNaN(resultBin)){
            result.innerHTML = "Not a valid hexadecimal number!"
        }
        else{
            result.innerHTML = givenNumber + " hexadecimal in binary is: " + resultBin ;
        }
    }
    else if (selectIndex == "hex" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10) ;
        
        result.innerHTML = givenNumber + " hexadecimal in decimal is: " + resultBin ;   
    }
    else if (selectIndex == "hex" && toIndex == "oct"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10).toString(8) ;
        
        result.innerHTML = givenNumber + " hexadecimal in octal is: " + resultBin ;   
    }
    
}